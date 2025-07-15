// script.js

// Smooth Scroll for internal links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start',
//             });
//         }
//     });
// });

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

const carModels = [
  { name: 'Porsche', number: '911', image: 'Picture/Porsche_carModel.png' },
  { name: 'Lamborghini', number: 'Aventador', image: 'Picture/Lamborghini_carModel.png' },
  { name: 'Mercedes', number: 'AMG', image: 'Picture/Mercedes_AMG_carModel.png' },
];

let currentCarIndex = 0;
let isAnimating = false;

const carModelNameElement = document.getElementById('car-model-name');
const carModelNumberElement = document.getElementById('car-model-number');
const carImageElement = document.getElementById('car-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const slider = document.querySelector('.hero__slider');

function updateCarInfo() {
  const currentCar = carModels[currentCarIndex];
  carModelNameElement.textContent = currentCar.name;
  carModelNumberElement.textContent = currentCar.number;
  carImageElement.src = currentCar.image;
}

function animateSlide(direction) {
  if (isAnimating) return;
  isAnimating = true;

  // slide out
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(${direction * -100}%)`;

  // after slide out
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.style.transform = `translateX(${direction * 100}%)`;

    updateCarInfo();

    // slide in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slider.style.transition = 'transform 0.5s ease';
        slider.style.transform = 'translateX(0%)';
        setTimeout(() => {
          isAnimating = false;
        }, 500);
      });
    });
  }, 500);
}

prevButton.addEventListener('click', () => {
  currentCarIndex = (currentCarIndex - 1 + carModels.length) % carModels.length;
  animateSlide(-1);
});

nextButton.addEventListener('click', () => {
  currentCarIndex = (currentCarIndex + 1) % carModels.length;
  animateSlide(1);
});

updateCarInfo();
