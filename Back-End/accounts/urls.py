from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import  CreateTokenCadastroViewSet,  LogoutViewSet, RegistroUsuarioESPViewSet, RegistroUsuarioIEViewSet, NepUserViewSet, LoginViewSet


router = DefaultRouter()
router.register('registrar/ie', RegistroUsuarioIEViewSet, basename='registrar-ie')
router.register('registrar/nep', NepUserViewSet, basename='registrar-nep')
router.register('registrar/esp', RegistroUsuarioESPViewSet, basename='registrar-esp')
router.register('login', LoginViewSet, basename='esp-login')
router.register('logout', LogoutViewSet, basename='logout')
router.register('tokenCadastro', CreateTokenCadastroViewSet, basename='TokenCadastro')#esse token nao 'e o de autenticacao do RestFramework e sim um personalizado para criacao de usuario(como a cliente pediu)


urlpatterns = [
    path("", include(router.urls)),
]
