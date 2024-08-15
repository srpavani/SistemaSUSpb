from rest_framework.serializers import ModelSerializer

from .models import NucleoEducacaoPermanente, InstituicaoEnsino


class NepSerializer(ModelSerializer):
    class Meta:
        model = NucleoEducacaoPermanente
        fields = '__all__'


class IeSerializer(ModelSerializer):
    class Meta:
        model = InstituicaoEnsino
        fields = '__all__'
        
        
class NepListSerializer(ModelSerializer):
    class Meta:
        model = NucleoEducacaoPermanente
        fields = ['nep_id', 'nep_nome']

class IeListSerializer(ModelSerializer):
    class Meta:
        model = InstituicaoEnsino
        fields = ['ie_id', 'ie_nome']        