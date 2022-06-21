from django.db import models

# Create your models here.


class PhoneNumber(models.Model):
    name = models.CharField(max_length=60)
    phone_number = models.CharField(max_length=20)
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.phone_number
