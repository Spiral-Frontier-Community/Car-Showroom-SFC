// script.js

// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

navToggle?.addEventListener('click', () => {
    navList?.classList.toggle('active');
});

// Form Validation (basic)
const contactForm = document.querySelector('.contact__form');

contactForm?.addEventListener('submit', (e) => {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please complete all fields before submitting.');
    }
});

// Scroll Animation for sections (fade in)
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    },
    {
        threshold: 0.1,
    }
);

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});