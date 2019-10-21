from django.shortcuts import render

from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . models import users
from . serializers import usersSerializer

class usersList(APIView):
    def get(self,request):
        users1 = users.objects.all()
        serializer = usersSerializer(users1,many=True)
        return Response(serializer.data)

    def post(self):
        pass