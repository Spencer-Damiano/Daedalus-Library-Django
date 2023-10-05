from django.contrib import admin
from django.urls import path, include
from study import views

urlpatterns = [
    path('hello/', views.hello, name='hello'),
]