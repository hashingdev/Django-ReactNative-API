from django.urls import path
from ccore.views import login

urlpatterns = [
    path('login', login, name='login'),
]
