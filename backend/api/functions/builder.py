from rest_framework.response import Response
from rest_framework import status
from api.models import BuilderMeta
from api.serializers import BuilderMetaSerializer
from api.functions.validation.sanitize import SanitizeData


def BuilderMetaFunction(self, request):
    if self.kwargs['id'] == 0:
        serializer = BuilderMetaSerializer(data=request.data) 
    else:
        obj = BuilderMeta.objects.get(pk=self.kwargs['id'])
        serializer = BuilderMetaSerializer(obj,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)