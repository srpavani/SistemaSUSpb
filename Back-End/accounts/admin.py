from django.contrib import admin
from .models import Usuario, TokenCadastro,ESP_USUARIO,NEP_USUARIO,IE_USUARIO



class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name','email','cpf',)
    search_fields = ('email',)
    list_display_links = 'email',

class TokenAdmin(admin.ModelAdmin):
    list_display = ('tk',)
    search_fields = ('tk',)

class ESP_USUARIOAdmin(admin.ModelAdmin):
    list_display = ('esp_pb_id','users')
    search_fields = ('esp_pb_id','users')

class NEP_USUARIOAdmin(admin.ModelAdmin):
    list_display = ('nep_id','users')
    search_fields = ('nep_id','users')

class IE_USUARIOAdmin(admin.ModelAdmin):
    list_display = ('ie_id','users')
    search_fields = ('ie_id','users')


admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(ESP_USUARIO, ESP_USUARIOAdmin)
admin.site.register(NEP_USUARIO, NEP_USUARIOAdmin)
admin.site.register(IE_USUARIO, IE_USUARIOAdmin)