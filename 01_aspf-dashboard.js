// Quotes rotation
const quotes = document.querySelectorAll('.quote');
let currentQuote = 0;

function rotateQuotes() {
    quotes[currentQuote].classList.remove('active');
    currentQuote = (currentQuote + 1) % quotes.length;
    quotes[currentQuote].classList.add('active');
}

setInterval(rotateQuotes, 10000);

// Portfolio title animation
const titleLetters = document.querySelectorAll('.letter');

function animateLetters() {
    titleLetters.forEach((letter, index) => {
        // Reset animation
        letter.style.opacity = '0';
        letter.style.transform = 'translateX(-100px)';
        
        // Animate with delay
        setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateX(0)';
        }, 100 * index);
    });
}

// Initialize animation on page load
window.addEventListener('load', () => {
    animateLetters();
});

// Re-animate whenever the page becomes visible again
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        animateLetters();
    }
});

// Also re-animate when user returns to the page using focus event
window.addEventListener('focus', animateLetters);
