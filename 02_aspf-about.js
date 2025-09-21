// Navigation toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Scroll progress bar
window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// Animate elements on scroll
function checkVisibility() {
    const cards = document.querySelectorAll('.detail-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const progressCircles = document.querySelectorAll('.circle-progress');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        
        if (cardTop < window.innerHeight - 100 && cardBottom > 0) {
            card.classList.add('visible');
        }
    });
    
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;
        
        if (itemTop < window.innerHeight - 100 && itemBottom > 0) {
            item.classList.add('visible');
        }
    });
    
    progressCircles.forEach(circle => {
        const circleTop = circle.getBoundingClientRect().top;
        const circleBottom = circle.getBoundingClientRect().bottom;
        
        if (circleTop < window.innerHeight - 100 && circleBottom > 0) {
            const progress = circle.getAttribute('data-progress');
            const degrees = (progress / 100) * 360;
            circle.style.transform = `rotate(${degrees}deg)`;
        }
    });
}

// Expand cards on click
document.querySelectorAll('.detail-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});

// Initialize animations
window.addEventListener('load', () => {
    checkVisibility();
});

window.addEventListener('scroll', () => {
    checkVisibility();
});

// Particle animation for hero circle
const particles = document.querySelectorAll('.particle');
particles.forEach(particle => {
    const randomDelay = Math.random() * 5;
    particle.style.animationDelay = `${randomDelay}s`;
});
