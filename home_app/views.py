from django.shortcuts import render
from . models import Service

def home(request):
    facility = Service.objects.all()
    return render(request,'home_app/index.html',context={'service':facility})

