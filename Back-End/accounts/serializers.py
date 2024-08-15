from .models import Usuario, TokenCadastro, IE_USUARIO, NEP_USUARIO,ESP_USUARIO, InstituicaoEnsino, NucleoEducacaoPermanente, EscolaSaudePublicaPb
from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import Permission


class TokenCadastroSerializer(serializers.ModelSerializer):
    class Meta:
        model = TokenCadastro
        fields = ['tk']


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if not email:
            raise serializers.ValidationError("O campo 'email' é obrigatório.")
        if not password:
            raise serializers.ValidationError("O campo 'password' é obrigatório.")

        user = authenticate(username=email, password=password)
        if not user:
            raise serializers.ValidationError("Credenciais inválidas.")

        return data


class InstituicaoEnsinoRegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
       
    class Meta:
        model = IE_USUARIO
        fields = ['nomeCompleto', 'email', 'password', 'password2', 'cpf', 'cargo', 'data_admissao_cargo', 'telefone', 'endereco_local_trabalho', 'bairro', 'cep', 'tk', 'ie_id']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        password = validated_data['password']
        password2 = validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'Error': "Senhas não são iguais"})

        if IE_USUARIO.objects.filter(email=validated_data['email']).exists():
            raise serializers.ValidationError({'Error': "E-mail já existente"})

        if IE_USUARIO.objects.filter(cpf=validated_data['cpf']).exists():
            raise serializers.ValidationError("CPF já cadastrado.")

        if not validated_data.get('tk'):
            raise serializers.ValidationError("Token de Cadastro é obrigatório.")

        if not TokenCadastro.objects.filter(tk=validated_data['tk']).exists():
            raise serializers.ValidationError("Token de cadastro inválido.") 
        
        ie_id = validated_data['ie_id']
        
        if not InstituicaoEnsino.objects.filter(pk=ie_id.pk).exists():
            raise serializers.ValidationError("ID da Instituição de Ensino não encontrado.") 
        
        instituicao_ensino_instance = InstituicaoEnsino.objects.get(pk=ie_id.pk)

        account = IE_USUARIO.objects.create(
            nomeCompleto=validated_data['nomeCompleto'],
            username=validated_data['email'],
            email=validated_data['email'],
            data_admissao_cargo=validated_data['data_admissao_cargo'], 
            telefone=validated_data['telefone'],
            bairro=validated_data['bairro'],
            cep=validated_data['cep'],
            cpf=validated_data['cpf'], 
            endereco_local_trabalho=validated_data['endereco_local_trabalho'],
            tk=validated_data['tk'],
            cargo=validated_data['cargo'],
            ie_id=instituicao_ensino_instance
        )
        account.set_password(password)
        account.save()
        return account



    
class NepRegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    
    class Meta:
        model = NEP_USUARIO
        fields = ['nomeCompleto', 'email', 'password', 'password2', 'cpf', 'cargo', 'data_admissao_cargo', 'telefone', 'endereco_local_trabalho', 'bairro', 'cep', 'tk', 'nep_id']
        extra_kwargs = {
            'password': {'write_only': True},
        }
        
    def create(self, validated_data):
        user = NEP_USUARIO.objects.create_user(**validated_data)
        return user

    def save(self):
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'Error': "Senhas não são iguais"})
        
        if NEP_USUARIO.objects.filter(email=self.validated_data['email']).exists():
            raise serializers.ValidationError({'Error': "Email já existente"})
        
        if NEP_USUARIO.objects.filter(cpf=self.validated_data['cpf']).exists():
            raise serializers.ValidationError("CPF já cadastrado.")
        
        if not self.validated_data.get('tk'):
            raise serializers.ValidationError("Token de Cadastro é obrigatório.")
        
        if not TokenCadastro.objects.filter(tk=self.validated_data['tk']).exists():
            raise serializers.ValidationError("Token de cadastro inválido.") 
        
        nep_id = self.validated_data['nep_id']
        
        if not NucleoEducacaoPermanente.objects.filter(pk=nep_id.pk).exists():
            raise serializers.ValidationError("ID NEP não encontrado.") 
        
        nep_instance = NucleoEducacaoPermanente.objects.get(pk=nep_id.pk)
    
        account = NEP_USUARIO.objects.create(
            nomeCompleto=self.validated_data['nomeCompleto'],
            username=self.validated_data['email'],
            email=self.validated_data['email'],
            data_admissao_cargo=self.validated_data['data_admissao_cargo'], 
            telefone=self.validated_data['telefone'],
            bairro=self.validated_data['bairro'],
            cep=self.validated_data['cep'],
            cpf=self.validated_data['cpf'], 
            endereco_local_trabalho=self.validated_data['endereco_local_trabalho'],
            tk=self.validated_data['tk'],
            cargo=self.validated_data['cargo'],
            nep_id=nep_instance
        )
        account.set_password(password)
        account.save()
        return account


    
    
    
class EspUsuarioRegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    
    class Meta:
        model = ESP_USUARIO
        fields = ['nomeCompleto', 'email', 'password', 'password2', 'cpf', 'cargo', 'data_admissao_cargo', 'telefone', 'endereco_local_trabalho', 'bairro', 'cep', 'tk', 'esp_pb_id']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        password = validated_data['password']
        password2 = validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'Error': "Senhas não são iguais"})

        if ESP_USUARIO.objects.filter(email=validated_data['email']).exists():
            raise serializers.ValidationError({'Error': "E-mail já existente"})

        if ESP_USUARIO.objects.filter(cpf=validated_data['cpf']).exists():
            raise serializers.ValidationError("CPF já cadastrado.")

        if not validated_data.get('tk'):
            raise serializers.ValidationError("Token de Cadastro é obrigatório.")

        if not TokenCadastro.objects.filter(tk=validated_data['tk']).exists():
            raise serializers.ValidationError("Token de cadastro inválido.") 
        
        esp_pb_id = validated_data['esp_pb_id']
        
        if not EscolaSaudePublicaPb.objects.filter(pk=esp_pb_id.pk).exists():
            raise serializers.ValidationError("ID da Escola de Saúde Pública não encontrado.") 
        
        escola_saude_publica_instance = EscolaSaudePublicaPb.objects.get(pk=esp_pb_id.pk)

        account = ESP_USUARIO.objects.create(
            nomeCompleto=validated_data['nomeCompleto'],
            username=validated_data['email'],
            email=validated_data['email'],
            data_admissao_cargo=validated_data['data_admissao_cargo'], 
            telefone=validated_data['telefone'],
            bairro=validated_data['bairro'],
            cep=validated_data['cep'],
            cpf=validated_data['cpf'], 
            endereco_local_trabalho=validated_data['endereco_local_trabalho'],
            tk=validated_data['tk'],
            cargo=validated_data['cargo'],
            esp_pb_id=escola_saude_publica_instance
        )
        account.set_password(password)
        account.save()
        return account
 