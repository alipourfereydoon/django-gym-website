from django.db import models


class Service(models.Model):
    title = models.CharField(max_length=20)
    image = models.ImageField(null=True , blank=True, upload_to='media')

    def __str__(self):
        return self.title
    

