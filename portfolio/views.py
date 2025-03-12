from django.shortcuts import render
import json
import os
from django.conf import settings
# Create your views here.

def homepage(request):
    json_path = os.path.join(settings.BASE_DIR, "portfolio/static/portfolio/projects.json")
    
    print("Looking for JSON file at:", json_path)
    
    try:
        with open(json_path, "r", encoding="utf-8") as file:
            projects = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        projects = []  # If file is missing or invalid, avoid crashing

    return render(request, "portfolio/home.html", {"projects": projects})