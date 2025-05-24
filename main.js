/**
 * Main JavaScript for Prof. Imran Qammar Sandhu's Portfolio
 * Author: Muhammad Mikran Sandhu
 * Date: May 24, 2025
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(function() {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('fade-out');
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    }, 2000);

    // Particles.js initialization for hero section
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Header scroll effect
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active nav link based on scroll position
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-bottom');
    
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('resize', checkReveal);
    window.addEventListener('load', checkReveal);
    
    // Skill circle animations
    const skillCircles = document.querySelectorAll('.skill-progress');
    
    function animateSkills() {
        skillCircles.forEach(circle => {
            const percent = circle.getAttribute('data-percent');
            const circleProgress = circle.querySelector('.skill-circle-progress');
            const percentElement = circle.querySelector('.skill-percent');
            const radius = circleProgress.getAttribute('r');
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percent / 100) * circumference;
            
            // Animate the circle
            setTimeout(() => {
                circleProgress.style.strokeDasharray = `${circumference} ${circumference}`;
                circleProgress.style.strokeDashoffset = offset;
                
                // Animate the percentage number
                let currentPercent = 0;
                const interval = setInterval(() => {
                    if (currentPercent >= percent) {
                        clearInterval(interval);
                    } else {
                        currentPercent++;
                        percentElement.textContent = `${currentPercent}%`;
                    }
                }, 20);
            }, 500);
        });
    }
    /**
 * JavaScript for WhatsApp Button
 * This adds animation and scroll effects to the WhatsApp button
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add the WhatsApp button after the hero section
    const heroSection = document.getElementById('hero');
    const aboutSection = document.getElementById('about');
    
    if (heroSection && aboutSection) {
        // Create the WhatsApp button container
        const whatsappContainer = document.createElement('div');
        whatsappContainer.className = 'whatsapp-button-container';
        
        // Create the WhatsApp button
        const whatsappButton = document.createElement('a');
        whatsappButton.className = 'whatsapp-button';
        whatsappButton.href = 'https://wa.me/923216443914'; // Replace with the actual phone number
        whatsappButton.target = '_blank';
        
        // Add icon and text
        whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i><span>Chat on WhatsApp</span>';
        
        // Append button to container
        whatsappContainer.appendChild(whatsappButton);
        
        // Insert the container after hero section and before about section
        heroSection.parentNode.insertBefore(whatsappContainer, aboutSection);
        
        // Add animation effect
        setTimeout(() => {
            whatsappContainer.style.opacity = '0';
            whatsappContainer.style.transform = 'translateY(20px)';
            
            // Add transition properties
            whatsappContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            // Trigger animation after a small delay
            setTimeout(() => {
                whatsappContainer.style.opacity = '1';
                whatsappContainer.style.transform = 'translateY(0)';
            }, 300);
        }, 100);
        
        // Add pulse animation effect on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                whatsappButton.classList.add('pulse');
            } else {
                whatsappButton.classList.remove('pulse');
            }
        });
    }
    
    // Add this CSS rule dynamically for the pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .whatsapp-button.pulse {
            animation: pulse 1.5s infinite;
        }
    `;
    document.head.appendChild(style);
});

    // Trigger skill animations when skills section is in view
    const skillsSection = document.querySelector('.skills-section');
    
    function checkSkillsInView() {
        if (skillsSection) {
            const sectionTop = skillsSection.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;
            
            if (sectionTop < triggerBottom) {
                animateSkills();
                // Remove event listener after animation is triggered
                window.removeEventListener('scroll', checkSkillsInView);
            }
        }
    }
    
    window.addEventListener('scroll', checkSkillsInView);
    window.addEventListener('load', checkSkillsInView);
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this demo, we'll just show a success message
            
            // Reset form
            contactForm.reset();
            
            // Show success message (you could replace this with a more elegant solution)
            alert('Thank you for your message! Prof. Sandhu will get back to you soon.');
        });
    }
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', function() {
        if (heroSection) {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
    
    // Initialize any tooltips or popovers if needed
    // This is a placeholder for potential future enhancements
    
    // Add any additional interactive features here
});
