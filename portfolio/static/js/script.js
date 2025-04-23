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



function createStars() {
    const container = document.createElement('div');
    container.id = 'stars-container';
    document.body.appendChild(container);
  
    const numberOfStars = 120;
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
  
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
  
      container.appendChild(star);
    }
  }
  
  window.addEventListener('DOMContentLoaded', createStars);
  