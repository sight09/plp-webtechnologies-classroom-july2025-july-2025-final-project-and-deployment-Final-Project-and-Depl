// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// Hero Button
const ctaBtn = document.getElementById('ctaBtn');
if(ctaBtn){
  ctaBtn.addEventListener('click', () => alert('You clicked Learn More!'));
}

// Feature Cards hover (Home page)
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => card.style.background='lightblue');
  card.addEventListener('mouseleave', () => card.style.background='#eee');
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Thank you! Your message has been sent.";
    contactForm.reset();
  });
}