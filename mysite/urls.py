from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("home/", views.home, name="home"),
    path("home/about/", views.about, name="about"),
    path("home/projects/", views.projects, name="projects"),
    path("home/consulting/", views.consulting, name="consulting"),
    path("home/blog/", views.blog, name="blog"),
]