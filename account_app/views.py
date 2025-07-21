from django.shortcuts import render,redirect
from . models import Message

# def register(request):
#     if request.method == 'POST':
#         name = request.POST.get('name')
#         lastname = request.POST.get('lastname')
#         phone = request.POST.get('phone')
#         email = request.POST.get('email')
#         address = request.POST.get('address')
#         Message.objects.create(name=name , lastname=lastname , phone=phone , email=email, address=address)
#         return redirect('home_app/index.html') 
#     return render(request,'account_app/register.html')
