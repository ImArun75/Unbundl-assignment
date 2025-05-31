
    function bookConsultation() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    
    if (name.trim() === '' || mobile.trim() === '') {
        alert('Please fill in all fields to book your consultation.');
        return;
    }
    
    if (mobile.length < 10) {
        alert('Please enter a valid mobile number.');
        return;
    }
    
    alert(`Thank you ${name}! Your free consultation has been booked. We will contact you at ${mobile} shortly.`);
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('mobile').value = '';
}

function buyPlan() {
    alert('Redirecting to payment page for the Anniversary Dental Health Plan at ₹399...');
}

function toggleFAQ(element) {
    // Close all other FAQs
    const allFAQs = document.querySelectorAll('.faq-item');
    allFAQs.forEach(faq => {
        if (faq !== element) {
            faq.classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    element.classList.toggle('active');
}

// Add smooth animations on page load
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.expert-card, .anniversary-card, .health-plan-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Animate FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 800 + (index * 100));
    });
});

// Add form validation
document.getElementById('mobile').addEventListener('input', function(e) {
    // Remove any non-digit characters
    e.target.value = e.target.value.replace(/\D/g, '');
    
    // Limit to 10 digits
    if (e.target.value.length > 10) {
        e.target.value = e.target.value.slice(0, 10);
    }
});

// Add hover effects for cards
const cards = document.querySelectorAll('.expert-card, .anniversary-card, .health-plan-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
// Smooth scrolling to form
function scrollToForm() {
    document.getElementById('consultationForm').scrollIntoView({
        behavior: 'smooth'
    });
}

// Generate random captcha
function generateCaptcha() {
    const captcha = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('captchaCode').textContent = captcha;
}

// Form submission
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon to schedule your free consultation.');
    this.reset();
    generateCaptcha();
});

// Initialize captcha on page load
window.addEventListener('load', function() {
    generateCaptcha();
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'white';
        header.style.backdropFilter = 'none';
    }
});

// Animate stats on scroll
function animateStats() {
    const stats = document.querySelectorAll('.stat-info h3');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
                let current = 0;
                const increment = numericValue / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericValue) {
                        target.textContent = finalValue;
                        clearInterval(timer);
                    } else {
                        const suffix = finalValue.includes('K+') ? 'K+' : 
                                        finalValue.includes('L+') ? 'L+' : '+';
                        target.textContent = Math.floor(current) + suffix;
                    }
                }, 50);
            }
        });
    });

    stats.forEach(stat => observer.observe(stat));
}


window.addEventListener('load', animateStats);
