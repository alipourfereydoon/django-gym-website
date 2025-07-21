from django.shortcuts import render,redirect
from . models import Service
from contactus_app.models import Footer
from account_app.models import Message

def home(request):
    facility = Service.objects.all()
    footer = Footer.objects.all().last()
    return render(request,'home_app/index.html',context={'service':facility , 'footer':footer})

def sendregister(request):
    if request.method == 'POST':
            name = request.POST.get('name')
            lastname = request.POST.get('lastname')
            phone = request.POST.get('phone')
            email = request.POST.get('email')
            address = request.POST.get('address')
            Message.objects.create(name=name , lastname=lastname , phone=phone , email=email, address=address)
            return redirect('/') 
    return render(request,'account_app/register.html')


