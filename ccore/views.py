from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializers import UserSerializers

# Create your views here.
@api_view(['GET', 'POST'])
def login(request):
    if request.method == 'POST':
        data = User.objects.all()

        serializer = UserSerializers(data, context={'request': request})
        return Response(serializer.data)