from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.viewsets import ModelViewSet 
from .models import NucleoEducacaoPermanente
from .serializers import NepSerializer
from rest_framework.exceptions import PermissionDenied
from drf_yasg.utils import swagger_auto_schema
from rest_framework.views import APIView
from rest_framework.response import Response


from RedeEscolaApp.models import Estagio, Vaga
from .models import NucleoEducacaoPermanente, InstituicaoEnsino
from .serializers import EstagioSerializer, VagaSerializer
from accounts.models import NEP_USUARIO, IE_USUARIO, ESP_USUARIO

class EstagioListView(APIView):
    permission_classes = [AllowAny]
    @swagger_auto_schema(
        operation_description="Lista todos os NEPs cadastrados - Usar no select do front",
        responses={200: EstagioSerializer(many=True)}
    )
    def get(self, request, *args, **kwargs):
        neps = NucleoEducacaoPermanente.objects.all()
        serializer = EstagioSerializer(neps, many=True)
        return Response(serializer.data)
    
def getInstituisao(user_id):

    response_data = dict()
    
    if  NEP_USUARIO.objects.filter(users__id=user.pk).exists():
        nep_user = NEP_USUARIO.objects.get(pk=user.pk)
        response_data['Empresa'] = nep_user.nep_id.nep_nome
        response_data['nep_id'] = nep_user.nep_id.nep_id  
    elif IE_USUARIO.objects.filter(users__id=user.pk).exists():
        ie_user = IE_USUARIO.objects.get(pk=user.pk)
        response_data['EMPRESA'] = ie_user.ie_id.ie_nome 
        response_data['ie_id'] = ie_user.ie_id.ie_id 
    elif ESP_USUARIO.objects.filter(users__id=user.pk).exists():
        esp_user = ESP_USUARIO.objects.filter(users__id=user.pk).first()
        response_data['EMPRESA'] = "ESCOLA_SAUDE_PUBLICA"  #como so existe uma ESP, resolvi deixar assim.
        response_data['esp_pb_id'] = esp_user.esp_pb_id.esp_pb_id 
    else:
        return Response({'error': 'Erro Ususario nao identificado a qual empresa usuario faz parte.'}, status=status.HTTP_400_BAD_REQUEST)
    
class EstagioViewSet(ModelViewSet):
    serializer_class = NepSerializer
    permission_classes = [IsAuthenticated]
    @swagger_auto_schema(
        operation_description="retorna todos os dados da nep vinculada ao usuario"
    )
    def get_queryset(self):
        user = self.request.user
        try:
            nep_user = Estagio.objects.get(pk=user.pk)
            nep_id = nep_user.nep_id_id 
        except Estagio.DoesNotExist:
            return NucleoEducacaoPermanente.objects.none()
        return NucleoEducacaoPermanente.objects.filter(users__id=nep_id) #retorna todos os dados da nep vinculada ao usuario
    @swagger_auto_schema(
        operation_description="Cria um novo Núcleo de Educação Permanente (NEP).",
        request_body=NepSerializer,
        responses={201: "NEP criado com sucesso", 400: "Erro ao criar NEP"},
    )
    def create(self, request, *args, **kwargs):   # se usuario for do tipo esp, ele pode criar uma nep
        user = self.request.user
        try:
            nep_user = Estagio.objects.get(pk=user.pk)
            if nep_user.nep_id is not None:
                raise PermissionDenied("Você já possui uma NEP associada a você.")
        except Estagio.DoesNotExist:
            raise PermissionDenied("Você não tem permissão para criar uma NEP.")
        return super().create(request, *args, **kwargs)
    
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)