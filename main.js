// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Card spotlight effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', `${x}%`);
    card.style.setProperty('--my', `${y}%`);
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.navbar nav');

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu.style.display === 'flex';
  navMenu.style.display = isOpen ? 'none' : 'flex';
  navMenu.style.flexDirection = 'column';
  navMenu.style.position = 'absolute';
  navMenu.style.top = '70px';
  navMenu.style.right = '7%';
  navMenu.style.background = 'rgba(8,8,16,0.97)';
  navMenu.style.padding = '20px 24px';
  navMenu.style.borderRadius = '12px';
  navMenu.style.border = '1px solid #1e1e30';
  navMenu.style.gap = '20px';
});

// Close mobile nav on link click
navMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.style.display = 'none';
  });
});