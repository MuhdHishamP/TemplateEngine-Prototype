from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault
from api.models import *



### Brand Meta ###
##################
class BrandMetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = BrandMeta
        fields = '__all__'
        

class BuilderMetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuilderMeta
        fields = '__all__'

        
