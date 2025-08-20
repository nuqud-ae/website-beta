// Smooth animation sequence: ball moves up → logos fade in → text fades in → contact link appears
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const logoIcon = document.querySelector('.logo-icon');
    const logoArabic = document.querySelector('.logo-arabic');
    const comingSoon = document.querySelector('.coming-soon');
    const contactLink = document.querySelector('.contact-link');
    const abstractGraphic = document.querySelector('.abstract-graphic');
    
    // Initial state - start with logos, text, and contact link hidden
    logo.style.opacity = '0';
    logoIcon.style.opacity = '0';
    logoArabic.style.opacity = '0';
    comingSoon.style.opacity = '0';
    if (contactLink) {
        contactLink.style.opacity = '0';
    }
    abstractGraphic.style.opacity = '1';
    
    // Dynamic cursor glow effects
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calculate distance from mouse to elements for dynamic glow
        if (logoIcon.style.opacity === '1') {
            const logoIconRect = logoIcon.getBoundingClientRect();
            const logoIconCenterX = logoIconRect.left + logoIconRect.width / 2;
            const logoIconCenterY = logoIconRect.top + logoIconRect.height / 2;
            const distance = Math.sqrt((mouseX - logoIconCenterX) ** 2 + (mouseY - logoIconCenterY) ** 2);
            const maxDistance = 200;
            const glowIntensity = Math.max(0, 1 - distance / maxDistance);
            
            logoIcon.style.filter = `drop-shadow(0 0 ${20 + glowIntensity * 30}px rgba(0, 128, 128, ${0.3 + glowIntensity * 0.5}))`;
        }
        
        if (logoArabic.style.opacity === '1') {
            const logoArabicRect = logoArabic.getBoundingClientRect();
            const logoArabicCenterX = logoArabicRect.left + logoArabicRect.width / 2;
            const logoArabicCenterY = logoArabicRect.top + logoArabicRect.height / 2;
            const distance = Math.sqrt((mouseX - logoArabicCenterX) ** 2 + (mouseY - logoArabicCenterY) ** 2);
            const maxDistance = 200;
            const glowIntensity = Math.max(0, 1 - distance / maxDistance);
            
            logoArabic.style.filter = `drop-shadow(0 0 ${20 + glowIntensity * 30}px rgba(0, 128, 128, ${0.3 + glowIntensity * 0.5}))`;
        }
        
        if (abstractGraphic.style.opacity !== '0') {
            const ballRect = abstractGraphic.getBoundingClientRect();
            const ballCenterX = ballRect.left + ballRect.width / 2;
            const ballCenterY = ballRect.top + ballRect.height / 2;
            const distance = Math.sqrt((mouseX - ballCenterX) ** 2 + (mouseY - ballCenterY) ** 2);
            const maxDistance = 300;
            const glowIntensity = Math.max(0, 1 - distance / maxDistance);
            
            // Update ball glow based on cursor proximity
            abstractGraphic.style.setProperty('--glow-intensity', glowIntensity);
        }
    });
    
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
            }, 200); // 200ms delay between logos
            
            // Show the logo container
            logo.style.opacity = '1';
        }, 900); // Reduced from 1200ms to 900ms (300ms faster)
        
        // Step 3: Coming Soon fades in after logos start fading in
        setTimeout(() => {
            comingSoon.classList.add('fade-in');
            comingSoon.style.opacity = '1';
        }, 1400); // Reduced from 1700ms to 1400ms (300ms faster)
        
        // Step 4: Contact link appears last
        setTimeout(() => {
            if (contactLink) {
                contactLink.style.opacity = '1';
            }
        }, 1900); // Reduced from 2200ms to 1900ms (300ms faster)
        
    }, 400); // Reduced from 700ms to 400ms
    
    // Simple approach - no scrolling needed since all content fits in viewport
});
