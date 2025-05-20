// Initialize AOS animations
AOS.init();

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
// Enhanced smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Scroll to target with smooth transition
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Use scroll-behavior: smooth in CSS and this as fallback
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Add transition class to section
                targetElement.classList.add('section-transition');
                setTimeout(() => {
                    targetElement.classList.remove('section-transition');
                }, 1000);
            }
        }
    });
});

// Highlight active section in navbar
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Create stars background
// Improved createStars() function
function createStars() {
  // Remove existing stars if any
  const existingContainer = document.getElementById('stars-container');
  if (existingContainer) existingContainer.remove();

  // Create container
  const container = document.createElement('div');
  container.id = 'stars-container';
  document.body.appendChild(container);

  // Create stars - increased quantity for better effect
  const starCount = window.innerWidth < 768 ? 100 : 200;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Randomize star properties
    const size = Math.random() * 3;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    
    // Add slight color variation
    const brightness = 0.7 + Math.random() * 0.3;
    star.style.opacity = brightness;
    
    container.appendChild(star);
  }
}

// Initialize stars when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  createStars();
  
  // Recreate stars on resize (for responsiveness)
  window.addEventListener('resize', function() {
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(createStars, 200);
  });
});

window.addEventListener('DOMContentLoaded', createStars);

// Show success message if form is submitted
if (window.location.search.includes("success=true")) {
    alert("Message sent successfully!");
}