from rest_framework.response import Response
from rest_framework import status
from users.models import BusinessProfiles
from users.serializers import BusinessProfileSerializer


def BusinessProfileFunction(self, request):
    if self.kwargs['id'] == 0:
        serializer = BusinessProfileSerializer(data=request.data) 
    else:
        obj = BusinessProfiles.objects.get(pk=self.kwargs['id'])
        serializer = BusinessProfileSerializer(obj,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def UpdateBusinessProfile(self, request):
    obj = BusinessProfiles.objects.get(pk=self.kwargs['id'])
    serializer = BusinessProfileSerializer(obj,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def DeleteBusinessProfile(self, request):
    try:
        data = BusinessProfiles.objects.get(pk=self.kwargs['id'])
        data.delete()
        response = {'status': 200, 'result': True}
        return Response(response)
    except:
        return Response({'result': False})

