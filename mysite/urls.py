from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="index"),
    path("home/", views.home, name="home"),
    path("about/", views.about, name="about"),
    path("projects/", views.projects, name="projects"),
    path("consulting/", views.consulting, name="consulting"),
    path("blog/", views.blog, name="blog"),
]