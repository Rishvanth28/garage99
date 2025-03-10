from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def services(request):  # Make sure this function exists
    return render(request, 'services.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def gallery(request):
    return render(request, 'gallery.html')

def register(request):
    return render(request, 'register.html')