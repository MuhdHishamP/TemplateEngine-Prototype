from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault
from users.models import *



##### User Serializers ###
############################

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
        
class BusinessProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessProfiles
        fields = '__all__'
        
class GrapesJsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrapeJsTemplates
        fields = '__all__'
        
