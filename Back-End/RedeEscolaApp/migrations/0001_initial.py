# Generated by Django 5.0.4 on 2024-06-20 21:21

import RedeEscolaApp.models
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Semestre',
            fields=[
                ('semestre_id', models.AutoField(primary_key=True, serialize=False)),
                ('semestre_periodo', models.FloatField(blank=True, null=True)),
                ('mes', models.IntegerField(blank=True, null=True)),
                ('data_inicio', models.DateField(blank=True, null=True)),
                ('data_fim', models.DateField(blank=True, null=True)),
                ('version', models.IntegerField(default=1)),
            ],
            options={
                'db_table': 'semestre',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Curso',
            fields=[
                ('curso_id', models.AutoField(primary_key=True, serialize=False)),
                ('curso_nome', models.CharField(blank=True, max_length=255, null=True)),
                ('curso_duracao', models.FloatField(blank=True, null=True)),
                ('data_inicio', models.DateField(blank=True, null=True)),
                ('data_fim', models.DateField(blank=True, null=True)),
                ('version', models.IntegerField(default=1)),
            ],
            options={
                'db_table': 'curso',
                'managed': True,
                'unique_together': {('version', 'curso_id')},
            },
        ),
        migrations.CreateModel(
            name='Aluno',
            fields=[
                ('aluno_id', models.AutoField(primary_key=True, serialize=False)),
                ('aluno_nome', models.CharField(blank=True, max_length=255, null=True)),
                ('aluno_data_nascimento', models.DateField(blank=True, null=True)),
                ('aluno_periodo', models.IntegerField(blank=True, null=True)),
                ('data_inicio', models.DateField(blank=True, null=True)),
                ('data_fim', models.DateField(blank=True, null=True)),
                ('version', models.IntegerField(default=1)),
                ('fk_curso_curso', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='RedeEscolaApp.curso')),
            ],
            options={
                'db_table': 'aluno',
                'managed': True,
                'unique_together': {('version', 'aluno_id')},
            },
        ),
        migrations.CreateModel(
            name='Documentos',
            fields=[
                ('documento_id', models.AutoField(primary_key=True, serialize=False)),
                ('documento_name', models.CharField(blank=True, max_length=255, null=True)),
                ('documento_file', models.FileField(blank=True, upload_to=RedeEscolaApp.models.documento_path)),
                ('version', models.IntegerField(default=1)),
            ],
            options={
                'db_table': 'documentos',
                'managed': True,
                'unique_together': {('version', 'documento_id')},
            },
        ),
        migrations.CreateModel(
            name='EscolaSaudePublicaPb',
            fields=[
                ('esp_pb_id', models.AutoField(primary_key=True, serialize=False)),
                ('nome_responsavel', models.CharField(blank=True, max_length=255, null=True)),
                ('contato', models.CharField(blank=True, max_length=255, null=True)),
                ('data_inicio', models.DateField(blank=True, null=True)),
                ('data_fim', models.DateField(blank=True, null=True)),
                ('version', models.IntegerField(default=1)),
            ],
            options={
                'db_table': 'escola_saude_publica_pb',
                'managed': True,
                'unique_together': {('version', 'esp_pb_id')},
            },
        ),
        migrations.CreateModel(
            name='Local',
            fields=[
                ('local_id', models.AutoField(primary_key=True, serialize=False)),
                ('rua', models.CharField(blank=True, max_length=255, null=True)),
                ('numero', models.IntegerField(blank=True, null=True)),
                ('cep', models.CharField(blank=True, max_length=8, null=True)),
                ('bairro', models.CharField(blank=True, max_length=255, null=True)),
                ('data_inicio', models.DateField(blank=True, null=True)),
                ('data_fim', models.DateField(blank=True, null=True)),
                ('version', models.IntegerField(default=1)),
            ],
            options={
                'db_table': 'local',
                'managed': True,
                'unique_together': {('version', 'local_id')},
            },
        ),
        migrations.CreateModel(
            name='InstituicaoEnsino',
            fields=[
                ('ie_id', models.AutoField(primary_key=True, serialize=False)),
                ('ie_nome', models.CharField(blank=True, max_length=255, null=True)),
                ('numero_convenio', models.CharField(blank=True, max_length=255, null=True)),
                ('data_assinatura', models.DateField(blank=True, null=True)),
                ('ie_macroregiao', models.CharField(blank=True, max_length=255, null=True)),
                ('ie_nomeResponsavel', models.CharField(blank=True, max_length=255, null=True)),
                ('ie_ContatoResponsavel', models.CharField(blank=True, max_length=255, null=True)),
                ('ie_emailResposavel', models.CharField(blank=True, max_length=255, null=True)),
                ('ie_nomeResponsavel2', models.CharField(blank=True, max_length=255, null=True)),
                ('ie_emailResposavel2', models.CharField(blank=True, max_length=255, null=True)),
                ('ie_ContatoResponsavel2', models.CharField(blank=True, max_length=255, null=True)),
                ('ie_Cidade', models.CharField(blank=True, max_length=255, null=True)),
                ('publicacao_doe_pb', models.CharField(blank=True, max_length=255, null=True)),
                ('privada', models.BooleanField(blank=True, null=True)),
                ('publica', models.BooleanField(blank=True, null=True)),
                ('data_inicio', models.DateField(blank=True, null=True)),
                ('data_fim', models.DateField(blank=True, null=True)),
                ('version', models.IntegerField(default=1)),
                ('documentos_ie', models.ManyToManyField(blank=True, related_name='instituicoes_ensino_documentos', to='RedeEscolaApp.documentos')),
                ('fk_aluno_aluno', models.ManyToManyField(blank=True, null=True, to='RedeEscolaApp.aluno')),
                ('fk_curso_curso', models.ManyToManyField(blank=True, null=True, to='RedeEscolaApp.curso')),
                ('fk_local_local', models.ManyToManyField(blank=True, null=True, to='RedeEscolaApp.local')),
            ],
            options={
                'db_table': 'instituicao_ensino',
                'managed': True,
                'unique_together': {('version', 'ie_id')},
            },
        ),
        migrations.CreateModel(
            name='NucleoEducacaoPermanente',
            fields=[
                ('nep_id', models.AutoField(primary_key=True, serialize=False)),
                ('nep_nome', models.CharField(blank=True, max_length=255, null=True)),
                ('regiaoSaude', models.CharField(blank=True, max_length=255, null=True)),
                ('municipio', models.CharField(blank=True, max_length=255, null=True)),
                ('nomeDiretor', models.CharField(blank=True, max_length=255, null=True)),
                ('telefoneServico', models.CharField(blank=True, max_length=255, null=True)),
                ('emailDirecao', models.CharField(blank=True, max_length=255, null=True)),
                ('nep_nomeResponsavel', models.CharField(blank=True, max_length=255, null=True)),
                ('nep_ContatoResponsavel', models.CharField(blank=True, max_length=255, null=True)),
                ('nep_emailResposavel', models.CharField(blank=True, max_length=255, null=True)),
                ('data_inicio', models.DateField(blank=True, null=True)),
                ('data_fim', models.DateField(blank=True, null=True)),
                ('version', models.IntegerField(default=1)),
                ('documentos_nep', models.ManyToManyField(blank=True, related_name='nucleos_educacao_documentos', to='RedeEscolaApp.documentos')),
                ('fk_local_local', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='RedeEscolaApp.local')),
            ],
            options={
                'db_table': 'nucleo_educacao_permanente',
                'managed': True,
                'unique_together': {('version', 'nep_id')},
            },
        ),
        migrations.CreateModel(
            name='convenios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ie_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='RedeEscolaApp.instituicaoensino')),
                ('nep_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='RedeEscolaApp.nucleoeducacaopermanente')),
            ],
        ),
        migrations.CreateModel(
            name='Estagio',
            fields=[
                ('estagio_id', models.AutoField(primary_key=True, serialize=False)),
                ('contrapartida_valor', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('residuos', models.CharField(blank=True, max_length=255, null=True)),
                ('data_inicio', models.DateField(blank=True, null=True)),
                ('data_fim', models.DateField(blank=True, null=True)),
                ('version', models.IntegerField(default=1)),
                ('qtd_vagas', models.IntegerField(default=0)),
                ('fk_curso_curso', models.ManyToManyField(blank=True, null=True, to='RedeEscolaApp.curso')),
                ('fk_instituicao_ensino_ie', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='RedeEscolaApp.instituicaoensino')),
                ('fk_local_local', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='RedeEscolaApp.local')),
                ('fk_nucleo_educacao_permanente_nep', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='RedeEscolaApp.nucleoeducacaopermanente')),
                ('fk_semestre_semestre', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='RedeEscolaApp.semestre')),
            ],
            options={
                'db_table': 'estagio',
                'managed': True,
                'unique_together': {('version', 'estagio_id')},
            },
        ),
        migrations.CreateModel(
            name='Vaga',
            fields=[
                ('vaga_id', models.AutoField(primary_key=True, serialize=False)),
                ('titulo_vaga', models.CharField(blank=True, max_length=255, null=True)),
                ('turno_vaga', models.CharField(blank=True, max_length=15, null=True)),
                ('data_inicio', models.DateField(blank=True, null=True)),
                ('data_fim', models.DateField(blank=True, null=True)),
                ('version', models.IntegerField(default=1)),
                ('fk_aluno_aluno', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='RedeEscolaApp.aluno')),
                ('fk_estagio_estagio', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='RedeEscolaApp.estagio')),
            ],
            options={
                'unique_together': {('version', 'vaga_id')},
            },
        ),
    ]
