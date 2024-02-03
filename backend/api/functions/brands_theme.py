from rest_framework.response import Response
from rest_framework import status
from api.models import BrandMeta
from api.serializers import BrandMetaSerializer



def BrandThemeFunction(self, request):
    if self.kwargs['id'] == 0:
        serializer = BrandMetaSerializer(data=request.data) 
    else:
        obj = BrandMeta.objects.get(pk=self.kwargs['id'])
        serializer = BrandMetaSerializer(obj,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)