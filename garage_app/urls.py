from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Home page
    path('about/', views.about, name='about'),  # About page
    path('gallery/', views.gallery, name='gallery'),  # Projects page
    path('contact/', views.contact, name='contact'),  # Contact page
    path('register/', views.register, name='register'),  # Registration page
]
