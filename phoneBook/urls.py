"""phoneBook URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views import renderFrontend, get_contacts, add_contact, edit_contact, delete_contact

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", renderFrontend, name="front"),
    path("contacts/", get_contacts, name="contacts"),
    path("contact/", add_contact, name="add"),
    path("contact/edit/<int:id>/", edit_contact, name="edit"),
    path("contact/delete/<int:id>/", delete_contact, name="delete"),
]
