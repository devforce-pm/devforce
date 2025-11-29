// script.js

document.addEventListener('DOMContentLoaded', () => {
    // You can add JavaScript for interactive elements here.
    // For example, a simple scroll-to-top button or a mobile navigation toggle.

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Example: Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu on link click
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // "Talk to Sales" button interactivity
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your interest! Our sales team will contact you shortly.');
        });
    });

    // Scroll-triggered animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); /* Optional: uncomment to hide on scroll out */
            }
        });
    }, {
        threshold: 0.1 /* Trigger when 10% of the item is visible */
    });

    document.querySelectorAll('section.hidden').forEach(section => {
        observer.observe(section);
    });

    // Header scroll animation
    const header = document.querySelector('header');
    const scrollThreshold = 50; // Pixels scrolled before animation triggers

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
});
