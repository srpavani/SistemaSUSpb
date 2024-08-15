from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from django.conf import settings
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.db.models.signals import post_save
from django.utils import timezone  # Importe timezone do Django

from RedeEscolaApp.models import InstituicaoEnsino, NucleoEducacaoPermanente, EscolaSaudePublicaPb

class TokenCadastro(models.Model):
    tk = models.CharField(primary_key=True, max_length=14, unique=True)

    def __str__(self):
        return self.tk


class CustomUserManager(UserManager):
    
    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        if 'tk' in extra_fields:
            del extra_fields['tk']
        return self._create_user(email, password, **extra_fields)

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("revisar email!")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)

        if 'tk' in extra_fields:
            try:
                token = TokenCadastro.objects.get(tk=extra_fields['tk'])
            except TokenCadastro.DoesNotExist:
                raise ValueError("Token inválido ou não encontrado")
        
        user.save(using=self._db)
        return user

    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Usuario(AbstractUser):
    cpf = models.CharField(max_length=14, unique=True)
    localTrabalho = models.CharField(max_length=200)
    nomeCompleto = models.CharField(max_length=200)
    data_admissao_cargo = models.DateTimeField(auto_now=True)
    telefone = models.CharField(max_length=20)
    endereco_local_trabalho = models.CharField(max_length=255)
    bairro = models.CharField(max_length=100)
    numero = models.CharField(max_length=200)
    cargo = models.CharField(max_length=25)
    cep = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    groups = models.ManyToManyField('auth.Group', verbose_name='groups', blank=True, related_name='usuarios_groups')
    user_permissions = models.ManyToManyField('auth.Permission', verbose_name='user permissions', blank=True, related_name='usuarios_permissions')
    tk = models.ForeignKey(TokenCadastro, on_delete=models.CASCADE, blank=True, null=True)
    
    
    
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()

    def __str__(self):
        return self.email


class ESP_USUARIO(models.Model):
    esp_pb_id = models.ForeignKey(EscolaSaudePublicaPb, on_delete=models.SET_NULL, blank=True, null=True)
    users = models.ForeignKey(Usuario, on_delete=models.SET_NULL, blank=True, null=True)

    class Meta:
        verbose_name = 'esp_usuario'  # Nome personalizado para a tabela

class NEP_USUARIO(models.Model):
    nep_id= models.ForeignKey(NucleoEducacaoPermanente, on_delete=models.SET_NULL, blank=True, null=True)
    users = models.ForeignKey(Usuario, on_delete=models.SET_NULL, blank=True, null=True)

    class Meta:
        verbose_name = 'nep_usuario'  # Nome personalizado para a tabela

class IE_USUARIO(models.Model):
    ie_id = models.ForeignKey(InstituicaoEnsino, on_delete=models.CASCADE)


    class Meta:
        verbose_name = 'ie_usuario'