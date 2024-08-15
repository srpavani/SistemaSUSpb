from django.contrib import admin
from .models import ( Documentos, Aluno, Curso, 
    EscolaSaudePublicaPb, Estagio, InstituicaoEnsino, 
    Local, NucleoEducacaoPermanente, Semestre, Vaga
)

class DocumentosAdmin(admin.ModelAdmin):
    list_display = ('documento_id', 'documento_name', 'documento_file', 'version',)
    search_fields = ('documento_name',)

class AlunoAdmin(admin.ModelAdmin):
    list_display = ('aluno_id', 'aluno_nome', 'aluno_data_nascimento', 'aluno_periodo', 'data_inicio', 'data_fim', 'version',)
    search_fields = ('aluno_nome',)

class CursoAdmin(admin.ModelAdmin):
    list_display = ('curso_id', 'curso_nome', 'curso_duracao', 'data_inicio', 'data_fim', 'version',)
    search_fields = ('curso_nome',)

class EscolaSaudePublicaPbAdmin(admin.ModelAdmin):
    list_display = ('esp_pb_id', 'nome_responsavel', 'contato', 'data_inicio', 'data_fim', 'version',)
    search_fields = ('nome_responsavel',)

class EstagioAdmin(admin.ModelAdmin):
    list_display = ('estagio_id', 'contrapartida_valor', 'residuos', 'data_inicio', 'data_fim', 'version',)
    search_fields = ('residuos',)

class InstituicaoEnsinoAdmin(admin.ModelAdmin):
    list_display = ('ie_id', 'ie_nome', 'privada', 'publica', 'data_inicio', 'data_fim', 'version',)
    search_fields = ('ie_nome',)

class LocalAdmin(admin.ModelAdmin):
    list_display = ('local_id', 'rua', 'numero', 'cep', 'bairro', 'data_inicio', 'data_fim', 'version',)
    search_fields = ('rua', 'bairro',)

class NucleoEducacaoPermanenteAdmin(admin.ModelAdmin):
    list_display = ('nep_id', 'nep_nome', 'data_inicio', 'data_fim', 'version',)
    search_fields = ('nep_nome',)

class SemestreAdmin(admin.ModelAdmin):
    list_display = ('semestre_id', 'semestre_periodo', 'mes', 'data_inicio', 'data_fim', 'version',)
    search_fields = ('semestre_periodo',)

class VagaAdmin(admin.ModelAdmin):
    list_display = ('vaga_id', 'titulo_vaga', 'turno_vaga', 'data_inicio', 'data_fim', 'version',)
    search_fields = ('titulo_vaga',)

admin.site.register(Documentos, DocumentosAdmin)
admin.site.register(Aluno, AlunoAdmin)
admin.site.register(Curso, CursoAdmin)
admin.site.register(EscolaSaudePublicaPb, EscolaSaudePublicaPbAdmin)
admin.site.register(Estagio, EstagioAdmin)
admin.site.register(InstituicaoEnsino, InstituicaoEnsinoAdmin)
admin.site.register(Local, LocalAdmin)
admin.site.register(NucleoEducacaoPermanente, NucleoEducacaoPermanenteAdmin)
admin.site.register(Semestre, SemestreAdmin)
admin.site.register(Vaga, VagaAdmin)
