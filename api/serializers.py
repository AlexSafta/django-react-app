from rest_framework import serializers
from .models import PhoneNumber


class PhoneNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneNumber
        fields = ('id', 'name', 'phone_number', 'email')
