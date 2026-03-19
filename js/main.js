// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Verse of the Day
const verses = [
    { verse: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
    { verse: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
    { verse: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.", ref: "Isaiah 40:31" },
    { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5" },
    { verse: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", ref: "Joshua 1:9" }
];

function updateVerseOfDay() {
    const verseElement = document.querySelector('#verse-of-day .verse');
    const refElement = document.querySelector('#verse-of-day .verse-ref');
    
    if (verseElement && refElement) {
        const today = new Date().getDate();
        const verseIndex = today % verses.length;
        verseElement.textContent = `"${verses[verseIndex].verse}"`;
        refElement.textContent = verses[verseIndex].ref;
    }
}

updateVerseOfDay();

// Form Submissions
const prayerForm = document.getElementById('prayerForm');
if (prayerForm) {
    prayerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your prayer request has been submitted. We will be praying with you!');
        prayerForm.reset();
    });
}

const testimonyForm = document.getElementById('testimonyForm');
if (testimonyForm) {
    testimonyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for sharing your testimony! It will encourage others.');
        testimonyForm.reset();
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
}

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Live Stream functionality
document.getElementById('watch-live')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Live stream will be available during service times. Check back on Sundays at 8am!');
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.leader-card, .unit-card, .event-card, .sermon-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
});

// View All Leaders Toggle
document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.getElementById('viewAllLeaders');
    const allLeaders = document.getElementById('allLeaders');
    
    if (viewAllBtn && allLeaders) {
        viewAllBtn.addEventListener('click', function() {
            if (allLeaders.style.display === 'none' || allLeaders.style.display === '') {
                allLeaders.style.display = 'grid';
                viewAllBtn.classList.add('active');
                viewAllBtn.querySelector('.btn-text').textContent = 'Show Less';
                
                setTimeout(() => {
                    allLeaders.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            } else {
                allLeaders.style.display = 'none';
                viewAllBtn.classList.remove('active');
                viewAllBtn.querySelector('.btn-text').textContent = 'View All Executives';
                
                document.querySelector('.featured-leaders').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    }
});

// Add fallback for images that fail to load
document.addEventListener('DOMContentLoaded', function() {
    const leaderImages = document.querySelectorAll('.leader-img img');
    
    leaderImages.forEach(img => {
        img.addEventListener('error', function() {
            const name = this.alt || 'Leader';
            const initials = name.split(' ').map(n => n[0]).join('').substring(0,2);
            const parent = this.parentElement;
            parent.innerHTML = `<div class="fallback-avatar">${initials}</div>`;
        });
    });
});