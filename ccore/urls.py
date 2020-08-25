from django.urls import path, re_path
from ccore.views import login
from .views import login

urlpatterns = [
    re_path(r'^api/user/$', login),
]
