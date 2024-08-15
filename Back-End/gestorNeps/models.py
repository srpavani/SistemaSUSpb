from django.db import models

# Create your models here.

class Estagio(models.Model):
    estagio_id = models.AutoField(primary_key=True)
    contrapartida_valor = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    residuos = models.CharField(max_length=255, blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.IntegerField(default=1)
    
    fk_curso = models.ManyToManyField('Curso', blank=True, null=True)

    qtd_vagas = models.IntegerField(default=0)
    
    fk_instituicao_ensino_ie = models.ForeignKey('InstituicaoEnsino', models.DO_NOTHING, blank=True, null=True)
    fk_nucleo_educacao_permanente_nep = models.ForeignKey('NucleoEducacaoPermanente', models.DO_NOTHING, blank=True, null=True)
    
    fk_semestre_semestre = models.ForeignKey('Semestre', models.DO_NOTHING, blank=True, null=True)
    fk_local_local = models.ForeignKey('Local', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'estagio'
        unique_together = (('estagio_id',),)

class Vaga(models.Model):
    vaga_id = models.AutoField(primary_key=True)
    titulo_vaga = models.CharField(max_length=255, blank=True, null=True)
    turno_vaga = models.CharField(max_length=15, blank=True, null=True)
    data_inicio = models.DateField(blank=True, null=True)
    data_fim = models.DateField(blank=True, null=True)
    version = models.IntegerField(default=1)
    fk_estagio_estagio = models.ForeignKey(Estagio, models.DO_NOTHING, blank=True, null=True)
    fk_aluno_aluno = models.ForeignKey('Aluno', models.DO_NOTHING, blank=True, null=True)
    
    class Meta:
        unique_together = (( 'vaga_id',),)