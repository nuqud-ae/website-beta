// Smooth animation sequence: ball moves up → logos fade in → text fades in
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const comingSoon = document.querySelector('.coming-soon');
    const abstractGraphic = document.querySelector('.abstract-graphic');
    
    // Initial state - start with logos and text hidden
    logo.style.opacity = '0';
    comingSoon.style.opacity = '0';
    abstractGraphic.style.opacity = '1';
    
    // Animation sequence
    setTimeout(() => {
        // Step 1: Ball moves up and fades to lighter gradient
        abstractGraphic.classList.add('move-up');
        
        // Step 2: After ball moves, logos fade in (1s duration)
        setTimeout(() => {
            logo.classList.add('fade-in');
            logo.style.opacity = '1';
        }, 1500);
        
        // Step 3: Coming Soon fades in after logos start fading in
        setTimeout(() => {
            comingSoon.classList.add('fade-in');
            comingSoon.style.opacity = '1';
        }, 2000);
        
    }, 1000); // Start after 1 second
});
