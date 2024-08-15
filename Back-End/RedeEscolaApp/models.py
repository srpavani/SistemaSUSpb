from django.db import models
import os
import uuid
# from accounts.models import Usuario


def documento_path(instance, filename):
    extra1 = filename.split('.')[-1]
    nome_arquivo = f'{uuid.uuid4()}.{extra1}'
    return os.path.join('documentos', instance.__class__.__name__, nome_arquivo)


class Documentos(models.Model):
    documento_id = models.AutoField(primary_key=True)
    documento_name = models.CharField(max_length=255, blank=True, null=True)
    documento_file = models.FileField(upload_to=documento_path, blank=True)
    version = models.IntegerField(default=1)

    class Meta:
        managed = True
        db_table = 'documentos'
        unique_together = (('version', 'documento_id'),)


class Aluno(models.Model):
    aluno_id = models.AutoField(primary_key=True)
    aluno_nome = models.CharField(max_length=255, blank=True, null=True)
    aluno_data_nascimento = models.DateField(blank=True, null=True)
    aluno_periodo = models.IntegerField(blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.IntegerField(default=1)
    fk_curso_curso = models.ForeignKey('Curso', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'aluno'
        unique_together = (('version', 'aluno_id'),)


class Curso(models.Model):
    curso_id = models.AutoField(primary_key=True)
    curso_nome = models.CharField(max_length=255, blank=True, null=True)
    curso_duracao = models.FloatField(blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.IntegerField(default=1)

    class Meta:
        managed = True
        db_table = 'curso'
        unique_together = (('version', 'curso_id'),)


class EscolaSaudePublicaPb(models.Model):
    esp_pb_id = models.AutoField(primary_key=True)
    nome_responsavel = models.CharField(max_length=255, blank=True, null=True)
    contato = models.CharField(max_length=255, blank=True, null=True)
    #email_responsavel = models.ForeignKey(Usuario, to_field='email', on_delete=models.SET_NULL, blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.IntegerField(default=1)
    
    def __str__(self) -> str:
        return f"{self.esp_pb_id}"

    class Meta:
        managed = True
        db_table = 'escola_saude_publica_pb'
        unique_together = (('version', 'esp_pb_id'),)


class InstituicaoEnsino(models.Model):
    ie_id = models.AutoField(primary_key=True)
    ie_nome = models.CharField(max_length=255, blank=True, null=True)
    numero_convenio = models.CharField(max_length=255, blank=True, null=True)
    data_assinatura = models.DateField(blank=True, null=True)
    ie_macroregiao = models.CharField(max_length=255, blank=True, null=True)
    ie_nomeResponsavel = models.CharField(max_length=255, blank=True, null=True)
    ie_ContatoResponsavel = models.CharField(max_length=255, blank=True, null=True)
    ie_emailResposavel = models.CharField(max_length=255, blank=True, null=True)
    ie_nomeResponsavel2 = models.CharField(max_length=255, blank=True, null=True) #opcional
    ie_emailResposavel2 = models.CharField(max_length=255, blank=True, null=True) #opcional   
    ie_ContatoResponsavel2 = models.CharField(max_length=255, blank=True, null=True)
    ie_Cidade = models.CharField(max_length=255, blank=True, null=True)
    publicacao_doe_pb = models.CharField(max_length=255, blank=True, null=True)
    #email_responsavel = models.ForeignKey(Usuario, to_field='email', on_delete=models.SET_NULL, blank=True, null=True)
    privada = models.BooleanField(blank=True, null=True)
    publica = models.BooleanField(blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.IntegerField(default=1)
    fk_aluno_aluno = models.ManyToManyField(Aluno, blank=True, null=True)
    fk_curso_curso = models.ManyToManyField(Curso, blank=True, null=True)
    fk_local_local = models.ManyToManyField('Local',  blank=True, null=True)
    documentos_ie = models.ManyToManyField(
        'Documentos',  
        related_name='instituicoes_ensino_documentos',
        blank=True
    )
    
    def __str__(self) -> str:
        return f"{self.ie_id}"

    class Meta:
        managed = True
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
    version = models.IntegerField(default=1)

    class Meta:
        managed = True
        db_table = 'local'
        unique_together = (('version', 'local_id'),)


class NucleoEducacaoPermanente(models.Model):
    nep_id = models.AutoField(primary_key=True)
    nep_nome = models.CharField(max_length=255, blank=True, null=True)
    regiaoSaude = models.CharField(max_length=255, blank=True, null=True)
    municipio = models.CharField(max_length=255, blank=True, null=True)
    nomeDiretor = models.CharField(max_length=255, blank=True, null=True)
    telefoneServico = models.CharField(max_length=255, blank=True, null=True)
    emailDirecao = models.CharField(max_length=255, blank=True, null=True)
    nep_nomeResponsavel = models.CharField(max_length=255, blank=True, null=True)
    nep_ContatoResponsavel = models.CharField(max_length=255, blank=True, null=True)
    nep_emailResposavel = models.CharField(max_length=255, blank=True, null=True)
    
    # users_responsavel = models.ForeignKey('accounts.Usuario', on_delete=models.SET_NULL, blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.IntegerField(default=1)
    
    
    fk_local_local = models.ForeignKey(Local, models.DO_NOTHING, blank=True, null=True)
    
    
    documentos_nep = models.ManyToManyField(
        'Documentos', 
        related_name='nucleos_educacao_documentos',
        blank=True
    )
    def __str__(self) -> str:
        return f"{self.nep_id}"

    class Meta:
        managed = True
        db_table = 'nucleo_educacao_permanente'
        unique_together = (('version', 'nep_id'),)




class Semestre(models.Model):
    semestre_id = models.AutoField(primary_key=True)
    semestre_periodo = models.FloatField(blank=True, null=True)
    mes = models.IntegerField(blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.IntegerField(default=1)

    class Meta:
        managed = True
        db_table = 'semestre'

class convenios(models.Model):
    nep_id= models.ForeignKey(NucleoEducacaoPermanente, on_delete=models.SET_NULL, blank=True, null=True)
    ie_id = models.ForeignKey(InstituicaoEnsino, on_delete=models.CASCADE)

class Estagio(models.Model):
    estagio_id = models.AutoField(primary_key=True)
    contrapartida_valor = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    residuos = models.CharField(max_length=255, blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.IntegerField(default=1)
    
    fk_curso_curso = models.ManyToManyField(Curso, blank=True, null=True)

    qtd_vagas = models.IntegerField(default=0)
    
    fk_instituicao_ensino_ie = models.ForeignKey('InstituicaoEnsino', models.DO_NOTHING, blank=True, null=True)
    fk_nucleo_educacao_permanente_nep = models.ForeignKey('NucleoEducacaoPermanente', models.DO_NOTHING, blank=True, null=True)
    
    fk_semestre_semestre = models.ForeignKey('Semestre', models.DO_NOTHING, blank=True, null=True)
    fk_local_local = models.ForeignKey('Local', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'estagio'
        unique_together = (('version', 'estagio_id'),)

class Vaga(models.Model):
    vaga_id = models.AutoField(primary_key=True)
    titulo_vaga = models.CharField(max_length=255, blank=True, null=True)
    turno_vaga = models.CharField(max_length=15, blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.IntegerField(default=1)
    fk_estagio_estagio = models.ForeignKey(Estagio, models.DO_NOTHING, blank=True, null=True)
    fk_aluno_aluno = models.ForeignKey(Aluno, models.DO_NOTHING, blank=True, null=True)
    
    class Meta:
        unique_together = (('version', 'vaga_id'),)