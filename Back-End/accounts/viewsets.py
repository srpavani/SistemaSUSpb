from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, logout
from .serializers import EspUsuarioRegisterSerializer, InstituicaoEnsinoRegisterSerializer, NEP_USUARIO, IE_USUARIO, ESP_USUARIO, NepRegisterSerializer, TokenCadastroSerializer
from .serializers import LoginSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.authentication import TokenAuthentication
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action
from RedeEscolaApp.models import NucleoEducacaoPermanente, InstituicaoEnsino, EscolaSaudePublicaPb
from rest_framework import serializers
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

class RegistroUsuarioIEViewSet(ViewSet):
    permission_classes = [AllowAny]
    queryset = IE_USUARIO.objects.all()
    serializer_class = InstituicaoEnsinoRegisterSerializer
    
    @swagger_auto_schema(
    operation_description="Cria um novo usuário do tipo NEP (NucleoEducacaoPermanente)",
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=["nomeCompleto", "email", "password", "password2", "cpf", "cargo", "data_admissao_cargo", "telefone", "endereco_local_trabalho", "bairro", "cep", "tk", "nep_id"],
        properties={
            "nomeCompleto": {"type": "string", "description": "Nome completo do usuário."},
            "email": {"type": "string", "format": "email", "description": "Email do usuário."},
            "password": {"type": "string", "format": "password", "description": "Senha do usuário."},
            "password2": {"type": "string", "format": "password", "description": "Confirmação da senha do usuário."},
            "cpf": {"type": "string", "description": "CPF do usuário."},
            "cargo": {"type": "string", "description": "Cargo do usuário."},
            "data_admissao_cargo": {"type": "string", "description": "Data de admissão no cargo do usuário (formato: 'YYYY-MM-DD')."},
            "telefone": {"type": "string", "description": "Número de telefone do usuário."},
            "endereco_local_trabalho": {"type": "string", "description": "Endereço do local de trabalho do usuário."},
            "bairro": {"type": "string", "description": "Bairro do usuário."},
            "cep": {"type": "string", "description": "CEP do usuário."},
            "tk": {"type": "integer", "description": "ID do token de cadastro do usuário."},
            "ie_id": {"type": "integer", "description": "ID do Núcleo de Educação Permanente associado ao usuário."},
        },
    ),
    responses={
        status.HTTP_200_OK: "Usuário criado com sucesso.",
        status.HTTP_400_BAD_REQUEST: "Erro ao criar usuário."
    }
)
    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        usuario = serializer.save()
        return Response({
            "user": serializer.data,
            "message": "Usuário registrado com sucesso."
        }, status=status.HTTP_201_CREATED)

    def get_ie_instance(self, nep_id):
        try:
            ie_instance = InstituicaoEnsino.objects.get(pk=nep_id)
            return ie_instance
        except InstituicaoEnsino.DoesNotExist:
            raise serializers.ValidationError("ID IE não encontrado.")

    def perform_create(self, serializer):
        ie_instance = self.get_ie_instance(serializer.validated_data['ie_id'])
        serializer.save(ie_id=ie_instance)
  
class NepUserViewSet(ViewSet):
    permission_classes = [AllowAny]
    queryset = NEP_USUARIO.objects.all()
    serializer_class = NepRegisterSerializer
    
    @swagger_auto_schema(
        operation_description="Cria um novo usuário do tipo NEP (NucleoEducacaoPermanente)",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=["nomeCompleto", "email", "password", "password2", "cpf", "cargo", "data_admissao_cargo", "telefone", "endereco_local_trabalho", "bairro", "cep", "tk", "nep_id"],
            properties={
                "nomeCompleto": {"type": "string", "description": "Nome completo do usuário."},
                "email": {"type": "string", "format": "email", "description": "Email do usuário."},
                "password": {"type": "string", "format": "password", "description": "Senha do usuário."},
                "password2": {"type": "string", "format": "password", "description": "Confirmação da senha do usuário."},
                "cpf": {"type": "string", "description": "CPF do usuário."},
                "cargo": {"type": "string", "description": "Cargo do usuário."},
                "data_admissao_cargo": {"type": "string", "description": "Data de admissão no cargo do usuário (formato: 'YYYY-MM-DD')."},
                "telefone": {"type": "string", "description": "Número de telefone do usuário."},
                "endereco_local_trabalho": {"type": "string", "description": "Endereço do local de trabalho do usuário."},
                "bairro": {"type": "string", "description": "Bairro do usuário."},
                "cep": {"type": "string", "description": "CEP do usuário."},
                "tk": {"type": "integer", "description": "ID do token de cadastro do usuário."},
                "nep_id": {"type": "integer", "description": "ID do Núcleo de Educação Permanente associado ao usuário."},
            },
        ),
        responses={
            status.HTTP_200_OK: "Usuário criado com sucesso.",
            status.HTTP_400_BAD_REQUEST: "Erro ao criar usuário."
        }
    )
    
    
    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        usuario = serializer.save()
        return Response({
            "user": serializer.data,
            "message": "Usuário registrado com sucesso."
        }, status=status.HTTP_201_CREATED)

    def get_nep_instance(self, nep_id):
        try:
            nep_instance = NucleoEducacaoPermanente.objects.get(pk=nep_id)
            return nep_instance
        except NucleoEducacaoPermanente.DoesNotExist:
            raise serializers.ValidationError("ID NEP não encontrado.")

    def perform_create(self, serializer):
        nep_instance = self.get_nep_instance(serializer.validated_data['nep_id'])
        serializer.save(nep_id=nep_instance)
        
        
class RegistroUsuarioESPViewSet(ViewSet):
    permission_classes = [AllowAny]
    queryset = ESP_USUARIO.objects.all()
    serializer_class = EspUsuarioRegisterSerializer
    
    @swagger_auto_schema(
    operation_description="Cria um novo usuário do tipo NEP (NucleoEducacaoPermanente)",
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=["nomeCompleto", "email", "password", "password2", "cpf", "cargo", "data_admissao_cargo", "telefone", "endereco_local_trabalho", "bairro", "cep", "tk", "nep_id"],
        properties={
            "nomeCompleto": {"type": "string", "description": "Nome completo do usuário."},
            "email": {"type": "string", "format": "email", "description": "Email do usuário."},
            "password": {"type": "string", "format": "password", "description": "Senha do usuário."},
            "password2": {"type": "string", "format": "password", "description": "Confirmação da senha do usuário."},
            "cpf": {"type": "string", "description": "CPF do usuário."},
            "cargo": {"type": "string", "description": "Cargo do usuário."},
            "data_admissao_cargo": {"type": "string", "description": "Data de admissão no cargo do usuário (formato: 'YYYY-MM-DD')."},
            "telefone": {"type": "string", "description": "Número de telefone do usuário."},
            "endereco_local_trabalho": {"type": "string", "description": "Endereço do local de trabalho do usuário."},
            "bairro": {"type": "string", "description": "Bairro do usuário."},
            "cep": {"type": "string", "description": "CEP do usuário."},
            "tk": {"type": "integer", "description": "ID do token de cadastro do usuário."},
            "esp_pb_id": {"type": "integer", "description": "ID da esp associado ao usuário."},
        },
    ),
    responses={
        status.HTTP_200_OK: "Usuário criado com sucesso.",
        status.HTTP_400_BAD_REQUEST: "Erro ao criar usuário."
    }
)
    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        usuario = serializer.save()
        return Response({
            "user": serializer.data,
            "message": "Usuário registrado com sucesso."
        }, status=status.HTTP_201_CREATED)

    def get_esp_instance(self, esp_pb_id):
        try:
            esp_instance = EscolaSaudePublicaPb.objects.get(pk=esp_pb_id)
            return esp_instance
        except EscolaSaudePublicaPb.DoesNotExist:
            raise serializers.ValidationError("ID ESP não encontrado.")

    def perform_create(self, serializer):
        esp_instance = self.get_esp_instance(serializer.validated_data['esp_pb_id'])
        serializer.save(esp_pb_id=esp_instance)           



    
class LoginViewSet(ViewSet):
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        operation_description="Realiza login para um usuário existente.",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=["email", "password"],
            properties={
                "email": openapi.Schema(type=openapi.TYPE_STRING, description="O email do usuário."),
                "password": openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_PASSWORD, description="A senha do usuário."),
            },
        ),
        responses={
            status.HTTP_200_OK: openapi.Response(description="Login bem-sucedido.  token, email, is_authenticated, empresa:id_empresa"),
            status.HTTP_400_BAD_REQUEST: openapi.Response(description="Erro ao autenticar."),
        }
    )
    def create(self, request):
        """
        EFETUA LOGIN.
        """
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')

        user = authenticate(request, username=email, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            print(user.pk)
        
            response_data = {
                'nomeCompleto': user.nomeCompleto,
                'token': token.key,
                'email': user.email,
                'response': 'login bem-sucedido',
                'is_authenticated': True
            }
            try:
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
                        
                    
            except (NEP_USUARIO.DoesNotExist, IE_USUARIO.DoesNotExist, ESP_USUARIO.DoesNotExist):
                return Response({'error': 'Erro ao identificar a qual empresa usuario faz parte.'}, status=status.HTTP_400_BAD_REQUEST)

            return Response(response_data)
        else:
            return Response({'error': 'nao foi possível autenticar'}, status=status.HTTP_400_BAD_REQUEST)
        
class LogoutViewSet(ViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    

    @swagger_auto_schema(
        operation_description="Realiza logout para um usuário autenticado."
    )
    
    def create(self, request):
        """
        Realiza logout para um usuário autenticado.
        """
        try:
            token_key = request.auth.key
            request.auth.delete()  
            return Response({'message': 'logout realizado com sucesso.'}, status=status.HTTP_200_OK)
        except Token.DoesNotExist:
            return Response({'error': 'token inválido.'}, status=status.HTTP_400_BAD_REQUEST)
              
class CreateTokenCadastroViewSet(ViewSet):                 
    permission_classes = [IsAuthenticated, IsAdminUser]  
    
    @swagger_auto_schema(
        operation_description="Cria um novo token de cadastro."
    )
    def create(self, request):
        """
        Cria um novo token de cadastro.
        """
        serializer = TokenCadastroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   