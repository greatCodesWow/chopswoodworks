from rest_framework import serializers
from .models import Wood

class WoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wood
        fields = ('id', 'title', 'description', 'image')