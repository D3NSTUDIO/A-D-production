// Responsive navigation menu
const navToggle = document.createElement('button');
navToggle.textContent = 'Menu';
navToggle.classList.add('nav-toggle');
document.querySelector('nav').prepend(navToggle);

navToggle.addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('show');
});

// Form validation
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()) {
    // Submit form if valid
    contactForm.submit();
  }
});
const contactForm = document.querySelector('#contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        // Submit form if valid
        contactForm.submit();
        alert('Thank you for your message. We will get back to you soon!');
    }
});

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  let isValid = true;

  if (name === '') {
    showError('name', 'Name is required');
    isValid = false;
  } else {
    clearError('name');
  }

  if (email === '') {
    showError('email', 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError('email', 'Please enter a valid email address');
    isValid = false;
  } else {
    clearError('email');
  }

  if (message === '') {
    showError('message', 'Message is required');
    isValid = false;
  } else {
    clearError('message');
  }

  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorElement = field.nextElementSibling || document.createElement('span');
  errorElement.textContent = message;
  errorElement.classList.add('error-message');
  if (!field.nextElementSibling) {
    field.parentNode.insertBefore(errorElement, field.nextSibling);
  }
}

function clearError(fieldId) {
  const errorElement = document.getElementById(fieldId).nextElementSibling;
  if (errorElement && errorElement.classList.contains('error-message')) {
    errorElement.remove();
  }
}

// Responsive image resizing
const responsiveImages = document.querySelectorAll('.portfolio-item img');

function resizeImages() {
  responsiveImages.forEach(img => {
    if (window.innerWidth < 600) {
      img.style.width = '100%';
    } else {
      img.style.width = 'auto';
    }
  });
}

window.addEventListener('resize', resizeImages);
window.addEventListener('load', resizeImages);
