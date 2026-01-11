// Project data
const projects = [
  {
    id: 1,
    title: "Blood Type Information System",
    description: "A comprehensive system for collecting and managing blood group information for donors with an intuitive interface and secure database.",
    details: "This system was developed to help hospitals and blood banks efficiently manage donor information. It includes features like donor registration, blood type categorization, search functionality, and appointment scheduling. The system uses a secure database to protect sensitive information while providing quick access to critical data when needed.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Service Information Website",
    description: "A responsive web application providing organized service-related information with a clean, user-friendly interface and efficient navigation.",
    details: "This website was designed to help users easily find and access various services in their community. It includes service categorization, search functionality, user reviews, and contact information. The responsive design ensures optimal viewing experience across all devices from mobile phones to desktop computers.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "University Portal Redesign",
    description: "A modern redesign of a university portal with improved user experience, dashboard functionality, and integrated student services.",
    details: "This project involved redesigning the student portal for Arba Minch University to improve usability and functionality. The new design includes personalized dashboards, course management, grade tracking, and communication tools. The backend integrates with existing university systems while providing a modern, intuitive frontend interface.",
    tech: ["React", "Node.js", "MySQL", "REST API", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    liveLink: "#",
    codeLink: "#"
  }
];

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', function() {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  if (navLinks.style.display === 'flex') {
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    navLinks.style.padding = '20px';
    navLinks.style.gap = '15px';
    navLinks.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      navLinks.style.display = 'none';
    }
  });
});

// Animate skill bars on scroll
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width + '%';
  });
};

// Check if element is in viewport
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
};

// Animate on scroll
const handleScroll = () => {
  const skillsSection = document.getElementById('skills');
  if (isElementInViewport(skillsSection)) {
    animateSkillBars();
    window.removeEventListener('scroll', handleScroll);
  }
};

window.addEventListener('scroll', handleScroll);
// Trigger once on load in case section is already in view
setTimeout(handleScroll, 100);

// Open project modal
function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalImage = document.getElementById('modalImage');
  const modalTech = document.getElementById('modalTech');
  const modalDetails = document.getElementById('modalDetails');
  const modalLiveLink = document.getElementById('modalLiveLink');
  const modalCodeLink = document.getElementById('modalCodeLink');

  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalDetails.textContent = project.details;
  
  // Set technology tags
  modalTech.innerHTML = '';
  project.tech.forEach(tech => {
    const span = document.createElement('span');
    span.className = 'tech-tag';
    span.textContent = tech;
    modalTech.appendChild(span);
  });
  
  // Set links
  modalLiveLink.href = project.liveLink;
  modalCodeLink.href = project.codeLink;
  
  // Open modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // In a real application, you would send this data to a server
  // For now, we'll just show a success message
  alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you at ${email} as soon as possible.`);
  
  // Reset form
  this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
  // Add animation class to elements
  const fadeElements = document.querySelectorAll('.fade-in-up');
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
  });
  
  // Trigger animations after a short delay
  setTimeout(() => {
    fadeElements.forEach(el => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 300);
});