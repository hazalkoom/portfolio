// Initialize AOS animations
AOS.init();

// JavaScript to Show Contact Section When Button is Clicked
document.getElementById("contact-link").addEventListener("click", function() {
    var contactSection = document.getElementById("contact");
    contactSection.style.display = "block";
    contactSection.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling to contact section
});
