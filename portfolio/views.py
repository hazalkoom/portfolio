from django.shortcuts import render
import json
# Create your views here.

def homepage(request):
    with open("portfolio/static/portfolio/projects.json", "r") as file:
        projects = json.load(file)
    return render(request, "portfolio/home.html", {"projects":projects})