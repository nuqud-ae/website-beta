// Smooth animation sequence: ball moves up → logos fade in → text fades in
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const logoIcon = document.querySelector('.logo-icon');
    const logoArabic = document.querySelector('.logo-arabic');
    const comingSoon = document.querySelector('.coming-soon');
    const abstractGraphic = document.querySelector('.abstract-graphic');
    
    // Initial state - start with logos and text hidden
    logo.style.opacity = '0';
    logoIcon.style.opacity = '0';
    logoArabic.style.opacity = '0';
    comingSoon.style.opacity = '0';
    abstractGraphic.style.opacity = '1';
    
    // Animation sequence
    setTimeout(() => {
        // Step 1: Ball moves up and fades to lighter gradient
        abstractGraphic.classList.add('move-up');
        
        // Step 2: After ball moves, logos fade in with staggered timing
        setTimeout(() => {
            // Start with English logo (Q) - blue part first
            logoIcon.classList.add('fade-in');
            logoIcon.style.opacity = '1';
            
            // Then Arabic logo (Arabic Q) - blue part first
            setTimeout(() => {
                logoArabic.classList.add('fade-in');
                logoArabic.style.opacity = '1';
            }, 300); // 300ms delay between logos
            
            // Show the logo container
            logo.style.opacity = '1';
        }, 1500);
        
        // Step 3: Coming Soon fades in after logos start fading in
        setTimeout(() => {
            comingSoon.classList.add('fade-in');
            comingSoon.style.opacity = '1';
        }, 2000);
        
    }, 1000); // Start after 1 second
});
