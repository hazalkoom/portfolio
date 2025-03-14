// Initialize AOS animations
AOS.init();

// Show Contact Section When Button is Clicked
document.getElementById("contact-link").addEventListener("click", function() {
    var contactSection = document.getElementById("contact");
    contactSection.style.display = "block";
    contactSection.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
});

// Toggle Dark Mode
document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save dark mode preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// Apply Dark Mode on Page Load (If Previously Enabled)
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Show Success Message if Form is Submitted
if (window.location.search.includes("success=true")) {
    alert("Message sent successfully!");
}
