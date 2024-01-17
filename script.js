document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navItems.forEach(item => {
                    item.classList.toggle('link-active', item.getAttribute('href').substring(1) === id);
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
});

window.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
    });
});

hamburger = document.querySelector(".hamburger");
navBar = document.querySelector(".nav-bar");
navLinks = document.querySelectorAll('.nav-bar ul li a');

hamburger.onclick = function() {
    navBar.classList.toggle("active");
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove("active"); 
    });
});
