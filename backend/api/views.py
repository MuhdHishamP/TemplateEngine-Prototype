from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from oauth2_provider.contrib.rest_framework import OAuth2Authentication
from rest_framework import generics, permissions, pagination

from api.functions.brands_theme import BrandThemeFunction
from api.functions.builder import BuilderMetaFunction

from api.serializers import *
from api.models import *


class CompanyPagination(pagination.PageNumberPagination):
    page_size = 10


######################
##### Post Views #####
######################
class AddBrandMeta(APIView):
    authentication_classes = (OAuth2Authentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        data = BrandThemeFunction(self, request)
        return data


class AddBuilderMeta(APIView):
    # authentication_classes = (OAuth2Authentication,)
    # permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        data = BuilderMetaFunction(self, request)
        return data


######################
##### List Views #####
######################
class BrandListListView(generics.ListAPIView):
    serializer_class = BrandMetaSerializer
    pagination_class = CompanyPagination

    def get_queryset(self, *args, **kwargs):
        data = BrandMeta.objects.all().order_by("-id")
        return data


class BuilderMetaListView(generics.ListAPIView):
    authentication_classes = (OAuth2Authentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = BuilderMetaSerializer
    pagination_class = CompanyPagination

    def get_queryset(self, *args, **kwargs):
        data = BuilderMeta.objects.filter(user=self.request.user).order_by("-id")
        return data
