from rest_framework.serializers import ModelSerializer

from RedeEscolaApp.models import Estagio, Vaga


class EstagioSerializer(ModelSerializer):
    class Meta:
        model = Estagio
        fields = '__all__'


class VagaSerializer(ModelSerializer):
    class Meta:
        model = Vaga
        fields = '__all__'

