from django.db import models

class Footer(models.Model):
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=40)
    phone = models.CharField(max_length=16)
    email = models.EmailField()
    whatsapp = models.CharField(max_length=100)
    telegram = models.CharField(max_length=100)
    instagram = models.CharField(max_length=100)

    



