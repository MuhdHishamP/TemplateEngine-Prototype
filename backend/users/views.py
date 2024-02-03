from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from oauth2_provider.contrib.rest_framework import OAuth2Authentication
from rest_framework import generics, permissions, pagination

from users.models import *
from users.serializers import *
from users.functions.business import *
from users.functions.grape_js import *

class CompanyPagination(pagination.PageNumberPagination):
    page_size = 10
    

###################### 
##### Post Views #####
######################
class AddBusinessProfile(APIView):
    authentication_classes = (OAuth2Authentication,)
    permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        data = BusinessProfileFunction(self, request)
        return data
    
class FetchBusinessProfile(APIView):
    authentication_classes = (OAuth2Authentication,)
    permission_classes = (IsAuthenticated,)
    def put(self, request, *args, **kwargs):
        data = BusinessProfileFunction(self, request)
        return data
    
class UpdateBusinessProfileAPI(APIView):
    authentication_classes = (OAuth2Authentication,)
    permission_classes = (IsAuthenticated,)
    def patch(self, request, *args, **kwargs):
        data = UpdateBusinessProfile(self, request)
        return data
    
    
class AddTemplates(APIView):
    authentication_classes = (OAuth2Authentication,)
    permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        data = GrapeJSFunction(self, request)
        return data
    
     
    
 
    
    
###################### 
##### List Views #####
######################
class UserListView(generics.ListAPIView):
    authentication_classes = (OAuth2Authentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = UserProfileSerializer
    pagination_class = CompanyPagination
    def get_queryset(self,*args, **kwargs):
        data=UserProfile.objects.filter(user=self.request.user).order_by('-id')
        return data
    
class BusinessProfileListView(generics.ListAPIView):
    serializer_class = BusinessProfileSerializer
    pagination_class = CompanyPagination
    def get_queryset(self,*args, **kwargs):
        data=BusinessProfiles.objects.all().order_by('-id')
        return data

class TemplatesListView(generics.ListAPIView):
    serializer_class = GrapesJsSerializer
    pagination_class = CompanyPagination
    def get_queryset(self,*args, **kwargs):
        data=GrapeJsTemplates.objects.all().order_by('-id')
        return data




######################## 
##### Delete Views #####
########################  
class DeleteBusinessProfileAPI(APIView):
    authentication_classes = (OAuth2Authentication,)
    permission_classes = (IsAuthenticated,)
    def get(self, request, *args, **kwargs):
        data = DeleteBusinessProfile(self, request)
        return data