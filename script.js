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

window.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
    });
});

function toggleMenu() {
    var menu = document.querySelector('.burger-menu nav');
    menu.classList.toggle('active');
}
