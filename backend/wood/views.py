from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WoodSerializer
from .models import Wood

# Create your views here.
class WoodView(viewsets.ModelViewSet):
    serializer_class = WoodSerializer
    queryset = Wood.objects.all()