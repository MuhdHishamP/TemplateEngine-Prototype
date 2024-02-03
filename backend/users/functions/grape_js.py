from rest_framework.response import Response
from rest_framework import status
from users.models import GrapeJsTemplates
from users.serializers import GrapesJsSerializer


def GrapeJSFunction(self, request):
    if self.kwargs['id'] == 0:
        serializer = GrapesJsSerializer(data=request.data) 
    else:
        obj = GrapeJsTemplates.objects.get(pk=self.kwargs['id'])
        serializer = GrapesJsSerializer(obj,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def UpdateGrapeJS(self, request):
    obj = GrapeJsTemplates.objects.get(pk=self.kwargs['id'])
    serializer = GrapesJsSerializer(obj,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def DeleteGrapeJS(self, request):
    try:
        data = GrapeJsTemplates.objects.get(pk=self.kwargs['id'])
        data.delete()
        response = {'status': 200, 'result': True}
        return Response(response)
    except:
        return Response({'result': False})

