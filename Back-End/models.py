# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AccountsTokencadastro(models.Model):
    tk = models.CharField(primary_key=True, max_length=14)

    class Meta:
        managed = False
        db_table = 'accounts_tokencadastro'


class AccountsUsuario(models.Model):
    id = models.BigAutoField(primary_key=True)
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    cpf = models.CharField(unique=True, max_length=14)
    localtrabalho = models.CharField(db_column='localTrabalho', max_length=200)  # Field name made lowercase.
    nomecompleto = models.CharField(db_column='nomeCompleto', max_length=200)  # Field name made lowercase.
    data_admissao_cargo = models.CharField(max_length=100)
    telefone = models.CharField(max_length=20)
    endereco_local_trabalho = models.CharField(max_length=255)
    bairro = models.CharField(max_length=100)
    numero = models.CharField(max_length=200)
    cep = models.CharField(max_length=9)
    email = models.CharField(unique=True, max_length=254)
    tk = models.ForeignKey(AccountsTokencadastro, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'accounts_usuario'


class AccountsUsuarioGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    usuario = models.ForeignKey(AccountsUsuario, models.DO_NOTHING)
    group = models.ForeignKey('AuthGroup', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'accounts_usuario_groups'
        unique_together = (('usuario', 'group'),)


class AccountsUsuarioUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    usuario = models.ForeignKey(AccountsUsuario, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'accounts_usuario_user_permissions'
        unique_together = (('usuario', 'permission'),)


class Aluno(models.Model):
    aluno_id = models.AutoField(primary_key=True)
    aluno_nome = models.CharField(max_length=255, blank=True, null=True)
    aluno_data_nascimento = models.DateField(blank=True, null=True)
    aluno_periodo = models.IntegerField(blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()
    fk_curso_curso = models.ForeignKey('Curso', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'aluno'
        unique_together = (('version', 'aluno_id'),)


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthtokenToken(models.Model):
    key = models.CharField(primary_key=True, max_length=40)
    created = models.DateTimeField()
    user = models.OneToOneField(AccountsUsuario, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'authtoken_token'


class Curso(models.Model):
    curso_id = models.AutoField(primary_key=True)
    curso_nome = models.CharField(max_length=255, blank=True, null=True)
    curso_duracao = models.FloatField(blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()

    class Meta:
        managed = False
        db_table = 'curso'
        unique_together = (('version', 'curso_id'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AccountsUsuario, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Documentos(models.Model):
    documento_id = models.AutoField(primary_key=True)
    documento_file = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'documentos'


class EscolaSaudePublicaPb(models.Model):
    esp_pb_id = models.AutoField(primary_key=True)
    nome_responsavel = models.CharField(max_length=255, blank=True, null=True)
    contato = models.CharField(max_length=255, blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()

    class Meta:
        managed = False
        db_table = 'escola_saude_publica_pb'
        unique_together = (('version', 'esp_pb_id'),)


class Estagio(models.Model):
    estagio_id = models.AutoField(primary_key=True)
    contrapartida_valor = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    residuos = models.CharField(max_length=255, blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()
    fk_instituicao_ensino_ie = models.ForeignKey('InstituicaoEnsino', models.DO_NOTHING)
    fk_semestre_semestre = models.ForeignKey('Semestre', models.DO_NOTHING)
    fk_nucleo_educacao_permanente_nep = models.ForeignKey('NucleoEducacaoPermanente', models.DO_NOTHING)
    fk_aluno_aluno = models.ForeignKey(Aluno, models.DO_NOTHING)
    fk_local_local = models.ForeignKey('Local', models.DO_NOTHING)
    fk_escola_saude_publica_pb_esp_pb = models.ForeignKey(EscolaSaudePublicaPb, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'estagio'
        unique_together = (('version', 'estagio_id'),)


class InstituicaoEnsino(models.Model):
    ie_id = models.AutoField(primary_key=True)
    ie_nome = models.CharField(max_length=255, blank=True, null=True)
    privada = models.BooleanField(blank=True, null=True)
    publica = models.BooleanField(blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()
    fk_aluno_aluno = models.ForeignKey(Aluno, models.DO_NOTHING)
    fk_curso_curso = models.ForeignKey(Curso, models.DO_NOTHING)
    fk_local_local = models.ForeignKey('Local', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'instituicao_ensino'
        unique_together = (('version', 'ie_id'),)


class Local(models.Model):
    local_id = models.AutoField(primary_key=True)
    rua = models.CharField(max_length=255, blank=True, null=True)
    numero = models.IntegerField(blank=True, null=True)
    cep = models.CharField(max_length=8, blank=True, null=True)
    bairro = models.CharField(max_length=255, blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()

    class Meta:
        managed = False
        db_table = 'local'
        unique_together = (('version', 'local_id'),)


class NucleoEducacaoPermanente(models.Model):
    nep_id = models.AutoField(primary_key=True)
    nep_nome = models.CharField(max_length=255, blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()
    fk_local_local = models.ForeignKey(Local, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'nucleo_educacao_permanente'
        unique_together = (('version', 'nep_id'),)


class Semestre(models.Model):
    semestre_id = models.AutoField(primary_key=True)
    semestre_periodo = models.FloatField(blank=True, null=True)
    mes = models.IntegerField(blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField(unique=True)

    class Meta:
        managed = False
        db_table = 'semestre'


class Vaga(models.Model):
    vaga_id = models.AutoField(primary_key=True)
    titulo_vaga = models.CharField(max_length=255, blank=True, null=True)
    turno_vaga = models.CharField(max_length=15, blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()
    fk_estagio_estagio = models.ForeignKey(Estagio, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'vaga'
        unique_together = (('version', 'vaga_id'),)
