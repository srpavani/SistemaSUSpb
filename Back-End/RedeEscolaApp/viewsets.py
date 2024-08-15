from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import NucleoEducacaoPermanente, InstituicaoEnsino
from .serializers import NepSerializer, IeSerializer, NepListSerializer, IeListSerializer
from rest_framework.viewsets import ModelViewSet 
from .models import NucleoEducacaoPermanente
from .serializers import NepSerializer
from accounts.models import NEP_USUARIO, IE_USUARIO, ESP_USUARIO
from rest_framework.exceptions import PermissionDenied
from drf_yasg.utils import swagger_auto_schema
from rest_framework.views import APIView
from rest_framework.response import Response

class NepListView(APIView):
    permission_classes = [AllowAny]
    @swagger_auto_schema(
        operation_description="Lista todos os NEPs cadastrados - Usar no select do front",
        responses={200: NepListSerializer(many=True)}
    )
    def get(self, request, *args, **kwargs):
        neps = NucleoEducacaoPermanente.objects.all()
        serializer = NepListSerializer(neps, many=True)
        return Response(serializer.data)

class IeListView(APIView):
    permission_classes = [AllowAny]
    @swagger_auto_schema(
        operation_description="Lista todas as IEs cadastradas - Usar no select do front",
        responses={200: IeListSerializer(many=True)}
    )
    def get(self, request, *args, **kwargs):
        ies = InstituicaoEnsino.objects.all()
        serializer = IeListSerializer(ies, many=True)
        return Response(serializer.data)
    
    
class AllowAnyNucleoEducacaoPermanenteViewSet(ModelViewSet):
    queryset = NucleoEducacaoPermanente.objects.all()
    serializer_class = NepSerializer
    permission_classes = [AllowAny]
    
    
class AllowAnyInstituicaoDeEnsinoViewSet(ModelViewSet):
    queryset = InstituicaoEnsino.objects.all()
    serializer_class = IeSerializer
    permission_classes = [AllowAny]    
      


class NucleoEducacaoPermanenteViewSet(ModelViewSet):
    serializer_class = NepSerializer
    permission_classes = [IsAuthenticated]
    @swagger_auto_schema(
        operation_description="retorna todos os dados da nep vinculada ao usuario"
    )
    def get_queryset(self):
        user = self.request.user
        try:
            nep_user = NEP_USUARIO.objects.get(pk=user.pk)
            nep_id = nep_user.nep_id_id 
        except NEP_USUARIO.DoesNotExist:
            return NucleoEducacaoPermanente.objects.none()
        return NucleoEducacaoPermanente.objects.filter(nep_id=nep_id) #retorna todos os dados da nep vinculada ao usuario
    @swagger_auto_schema(
        operation_description="Cria um novo Núcleo de Educação Permanente (NEP).",
        request_body=NepSerializer,
        responses={201: "NEP criado com sucesso", 400: "Erro ao criar NEP"},
    )
    def create(self, request, *args, **kwargs):   # se usuario for do tipo esp, ele pode criar uma nep
        user = self.request.user
        try:
            nep_user = NEP_USUARIO.objects.get(pk=user.pk)
            if nep_user.nep_id is not None:
                raise PermissionDenied("Você já possui uma NEP associada a você.")
        except NEP_USUARIO.DoesNotExist:
            raise PermissionDenied("Você não tem permissão para criar uma NEP.")
        return super().create(request, *args, **kwargs)
    
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)


class IesViewSet(ModelViewSet):
    queryset = InstituicaoEnsino.objects.all()
    serializer_class = IeSerializer

    @swagger_auto_schema(
        operation_description="retorna todos os dados da Instituicao de ensino vinculada ao usuario"
    )
    def get_queryset(self):
        user = self.request.user
        try:
            ie_user = IE_USUARIO.objects.get(pk=user.pk)
            ie_id = ie_user.ie_id.ie_id
        except IE_USUARIO.DoesNotExist:
            return InstituicaoEnsino.objects.none()
        return InstituicaoEnsino.objects.filter(ie_id=ie_id)
    
    def create(self, request, *args, **kwargs):   # se usuario for do tipo ie, ele nao pode criar uma ie
        user = self.request.user
        try:
            IE_user = IE_USUARIO.objects.get(pk=user.pk)
            if IE_user.ie_id is not None:
                raise PermissionDenied("Você já possui uma IE associada a você.")
        except NEP_USUARIO.DoesNotExist:
            raise PermissionDenied("Você não tem permissão para criar uma IE.")
        return super().create(request, *args, **kwargs)
    
    
    


    

    
    
   
    
