from django.shortcuts import render, redirect
import json
import os
from django.conf import settings
from django.core.mail import send_mail
from django.contrib import messages
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


def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        # Send email
        send_mail(
            f"New Contact Form Submission from {name}",
            message,
            email,  # Sender's email
            ["your-email@gmail.com"],  # Replace with your actual email
            fail_silently=False,
        )

        messages.success(request, "Your message has been sent successfully!")
        return redirect("/?success=true")  # Redirect back to the homepage (or change to another route)

    return redirect("/")  # Ensure even GET requests don't look for a missing templa