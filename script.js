// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupLoadingScreen();
    setupNavigation();
    setupDataCanvas();
    setupScrollAnimations();
    setupIntersectionObserver();
    setupSmoothScrolling();
    setupMobileMenu();
}

// ===== LOADING SCREEN =====
function setupLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
}

// ===== NAVIGATION =====
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect on navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== DATA CANVAS ANIMATION =====
function setupDataCanvas() {
    const canvas = document.getElementById('data-canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle system
    const particles = [];
    const particleCount = 50;
    const connectionDistance = 150;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            
            // Keep particles within bounds
            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(51, 166, 255, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    const opacity = (1 - distance / connectionDistance) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(152, 41, 208, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special handling for different animation types
                if (entry.target.classList.contains('philosophy-card')) {
                    animatePhilosophyCard(entry.target);
                } else if (entry.target.classList.contains('cycle-step')) {
                    animateCycleStep(entry.target);
                } else if (entry.target.classList.contains('timeline-item')) {
                    animateTimelineItem(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll([
        '.philosophy-card',
        '.cycle-step',
        '.timeline-item',
        '.tool-category',
        '.mindset-item'
    ].join(','));
    
    animateElements.forEach(el => observer.observe(el));
}

// ===== SPECIALIZED ANIMATIONS =====
function animatePhilosophyCard(card) {
    card.style.animation = 'fadeInUp 0.6s ease forwards';
}

function animateCycleStep(step) {
    step.style.animation = 'fadeInUp 0.6s ease forwards';
    
    // Add pulsing effect to the icon
    const icon = step.querySelector('.step-icon');
    if (icon) {
        icon.style.animation = 'pulse 2s ease-in-out infinite';
    }
}

function animateTimelineItem(item) {
    item.style.animation = 'fadeInUp 0.6s ease forwards';
    
    // Animate the timeline dot
    const dot = item.querySelector('.timeline-content::before');
    if (dot) {
        setTimeout(() => {
            item.style.setProperty('--dot-scale', '1.2');
        }, 300);
    }
}

// ===== INTERSECTION OBSERVER FOR SECTIONS =====
function setupIntersectionObserver() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => sectionObserver.observe(section));
}

// ===== SMOOTH SCROLLING =====
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
}

// ===== MOBILE MENU =====
function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.style.transform = navMenu.classList.contains('active') 
                    ? getHamburgerTransform(index) 
                    : 'none';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
}

function getHamburgerTransform(index) {
    const transforms = [
        'rotate(45deg) translate(5px, 5px)',
        'opacity: 0',
        'rotate(-45deg) translate(7px, -6px)'
    ];
    return transforms[index];
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== PERFORMANCE OPTIMIZATION =====
function optimizePerformance() {
    // Lazy load images when implemented
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ===== ACCESSIBILITY =====
function setupAccessibility() {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
    
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Pular para o conteúdo principal';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// ===== ANALYTICS (placeholder) =====
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics implementation
    console.log('Event tracked:', eventName, properties);
}

// Track page view
trackEvent('page_view', {
    page: window.location.pathname,
    title: document.title
});

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', debounce(() => {
    const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestones
        if (scrollPercent === 25 || scrollPercent === 50 || scrollPercent === 75 || scrollPercent === 90) {
            trackEvent('scroll_depth', { percent: scrollPercent });
        }
    }
}, 1000));

// ===== CSS ANIMATION KEYFRAMES (dynamically added) =====
const additionalStyles = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .keyboard-nav *:focus {
        outline: 2px solid var(--primary-blue) !important;
        outline-offset: 2px !important;
    }
    
    .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-blue);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    }
    
    .skip-link:focus {
        top: 6px;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize accessibility and performance optimizations
setupAccessibility();
optimizePerformance();
