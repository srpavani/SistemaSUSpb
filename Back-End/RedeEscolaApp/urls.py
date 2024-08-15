from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import NucleoEducacaoPermanenteViewSet, IesViewSet, NepListView, IeListView, AllowAnyNucleoEducacaoPermanenteViewSet, AllowAnyInstituicaoDeEnsinoViewSet





router = DefaultRouter()
router.register(prefix='nep', viewset = NucleoEducacaoPermanenteViewSet, basename='nep')
router.register(prefix='ies', viewset = IesViewSet, basename='ies')
router.register(prefix='criarnep', viewset = AllowAnyNucleoEducacaoPermanenteViewSet, basename='criarnep')
router.register(prefix='criaries', viewset = AllowAnyInstituicaoDeEnsinoViewSet, basename='criaries')



urlpatterns = [
    path('', include(router.urls)),
    path('neps/lista/', NepListView.as_view(), name='lista-nep'),
    path('ies/lista/', IeListView.as_view(), name='lista-ies')
]
