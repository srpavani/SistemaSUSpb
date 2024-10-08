# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Aluno(models.Model):
    aluno_id = models.AutoField(primary_key=True)
    aluno_nome = models.CharField(max_length=255, blank=True, null=True)
    aluno_data_nascimento = models.DateField(blank=True, null=True)
    aluno_periodo = models.IntegerField(blank=True, null=True)
    data_inicio = models.DateTimeField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()
    fk_curso_curso = models.ForeignKey('Curso', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'aluno'


class Curso(models.Model):
    curso_id = models.AutoField(primary_key=True)
    curso_nome = models.CharField(max_length=255, blank=True, null=True)
    curso_duracao = models.CharField(max_length=255, blank=True, null=True)
    data_inicio = models.DateTimeField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()

    class Meta:
        managed = False
        db_table = 'curso'


class Doacao(models.Model):
    doacao_id = models.AutoField(primary_key=True)
    materiais = models.CharField(max_length=255, blank=True, null=True)
    especificacoes = models.CharField(max_length=2555, blank=True, null=True)
    quantidade = models.IntegerField(blank=True, null=True)
    cotacao_unitaria = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'doacao'


class EscolaSaudePublicaPb(models.Model):
    esp_pb_id = models.AutoField(primary_key=True)
    nome_responsavel = models.CharField(max_length=255, blank=True, null=True)
    contato = models.CharField(max_length=255, blank=True, null=True)
    data_inicio = models.DateTimeField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()

    class Meta:
        managed = False
        db_table = 'escola_saude_publica_pb'


class Estagio(models.Model):
    estagio_id = models.AutoField(primary_key=True)
    contrapartida_valor = models.FloatField(blank=True, null=True)
    residuos = models.FloatField(blank=True, null=True)
    data_inicio = models.DateTimeField(blank=True, null=True)
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


class EstagioDoacoes(models.Model):
    fk_doacao_doacao = models.ForeignKey(Doacao, models.DO_NOTHING)
    fk_estagio_estagio = models.ForeignKey(Estagio, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'estagio_doacoes'


class IeDoacoes(models.Model):
    fk_doacao_doacao = models.ForeignKey(Doacao, models.DO_NOTHING)
    fk_instituicao_ensino_ie = models.ForeignKey('InstituicaoEnsino', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'ie_doacoes'


class InstituicaoEnsino(models.Model):
    ie_id = models.AutoField(primary_key=True)
    ie_nome = models.CharField(max_length=255, blank=True, null=True)
    publica = models.BooleanField(blank=True, null=True)
    privada = models.BooleanField(blank=True, null=True)
    data_inicio = models.DateTimeField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()
    email_responsavel = models.CharField(max_length=255, blank=True, null=True)
    fk_aluno_aluno = models.ForeignKey(Aluno, models.DO_NOTHING)
    fk_curso_curso = models.ForeignKey(Curso, models.DO_NOTHING)
    fk_local_local = models.ForeignKey('Local', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'instituicao_ensino'


class Local(models.Model):
    local_id = models.AutoField(primary_key=True)
    rua = models.CharField(max_length=255, blank=True, null=True)
    numero = models.IntegerField(blank=True, null=True)
    cep = models.CharField(max_length=255, blank=True, null=True)
    bairro = models.CharField(max_length=255, blank=True, null=True)
    data_inicio = models.DateTimeField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()

    class Meta:
        managed = False
        db_table = 'local'


class NepDoacoes(models.Model):
    fk_nucleo_educacao_permanente_nep = models.ForeignKey('NucleoEducacaoPermanente', models.DO_NOTHING)
    fk_doacao_doacao = models.ForeignKey(Doacao, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'nep_doacoes'


class NucleoEducacaoPermanente(models.Model):
    nep_id = models.AutoField(primary_key=True)
    nep_nome = models.CharField(max_length=255, blank=True, null=True)
    data_inicio = models.DateTimeField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()
    email_responsavel = models.CharField(max_length=255, blank=True, null=True)
    fk_local_local = models.ForeignKey(Local, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'nucleo_educacao_permanente'


class Semestre(models.Model):
    semestre_id = models.AutoField(primary_key=True)
    semestre_periodo = models.FloatField(blank=True, null=True)
    mes = models.IntegerField(blank=True, null=True)
    data_inicio = models.DateTimeField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()

    class Meta:
        managed = False
        db_table = 'semestre'


class Vaga(models.Model):
    vaga_id = models.AutoField(primary_key=True)
    titulo_vaga = models.CharField(max_length=255, blank=True, null=True)
    data_inicio = models.DateTimeField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.AutoField()
    fk_estagio_estagio = models.ForeignKey(Estagio, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'vaga'
