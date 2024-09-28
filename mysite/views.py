from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("Hello, world. This is my landing index")

def home(request):
 return render(request, 'home.html')
def about(request):
 return render(request, 'about.html')
def projects(request):
 return render(request, 'projects.html')
def consulting(request):
 return render(request, 'consulting.html')
def blog(request):
 return render(request, 'blog.html')