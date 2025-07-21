from django.db import models


class Message(models.Model):
    name = models.CharField(max_length=30)
    lastname = models.CharField(max_length=40)
    phone = models.CharField(max_length=14)
    email = models.EmailField(null=True,blank=True)
    address = models.CharField(max_length=40)

    def __str__(self):
        return self.name

