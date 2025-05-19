// Custom JavaScript for Portfolio Website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handler
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Simple form validation
            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would normally send the form data to a server
            // For now, we'll just show a success message
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            };
            
            console.log('Form submission:', formData);
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset the form
            contactForm.reset();
        });
    }

    // Intersection Observer for animation when scrolling
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all section titles for animation
    document.querySelectorAll('section h2').forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(title);
    });

    document.addEventListener('scroll', () => {
        document.querySelectorAll('section h2.animated').forEach(title => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        });
    });    // Enhanced dark mode functionality
    const darkModeToggle = document.querySelectorAll('button[x-data]');
    
    // Initialize dark mode based on localStorage or system preference
    const initializeDarkMode = () => {
        const isDark = localStorage.getItem('darkMode') === 'true' || 
                       (localStorage.getItem('darkMode') === null && 
                        window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        document.documentElement.classList.toggle('dark', isDark);
    };
    
    // Call once on load
    initializeDarkMode();
    
    // Detect system preference changes for dark mode
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('darkMode') === null) {
            // Only apply if user hasn't manually set a preference
            document.documentElement.classList.toggle('dark', e.matches);
        }
    });
});
