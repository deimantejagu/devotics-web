document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll('.nav-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href').substring(1) === entry.target.id) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    // Observe each section
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});  

// This script will be run after the page has loaded because of the defer attribute
window.addEventListener('DOMContentLoaded', (event) => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the actual form submission
        // Here you can add the code to handle the form data
        console.log('Form submitted');
    });
});
