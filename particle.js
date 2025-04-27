document.addEventListener('DOMContentLoaded', () => {
    // Find all elements that should trigger particles
    const particleButtons = document.querySelectorAll('.button-container-particle');

    particleButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            createParticles(event.currentTarget); // Pass the clicked button
        });
    });

    function createParticles(button) {
        const particleCount = 20; // How many particles to create
        const particleColor = '#ADD8E6'; // Light blue color
        const spread = 80; // How far the particles spread (in pixels)
        const particleSize = 6; // Match CSS or adjust

        // Get button dimensions for potential adjustments (optional)
        // const buttonRect = button.getBoundingClientRect();

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Set fixed color or maybe use computed style later
            particle.style.backgroundColor = particleColor;
            particle.style.width = `${particleSize}px`;
            particle.style.height = `${particleSize}px`;

            // Append the particle to the button
            button.appendChild(particle);

            // Calculate random target position
            // Angle in radians
            const angle = Math.random() * Math.PI * 2;
            // Distance from center
            const radius = Math.random() * spread;

            const targetX = Math.cos(angle) * radius;
            // Use negative Y because screen coordinates go down
            const targetY = Math.sin(angle) * radius;

            // Force browser repaint/reflow before applying animation styles
            // This ensures the transition starts correctly
            requestAnimationFrame(() => {
                // Set the final state for the transition
                particle.style.transform = `translate(${targetX}px, ${targetY}px)`;
                particle.style.opacity = '0';
            });


            // Remove particle after animation finishes
            setTimeout(() => {
                // Check if particle still exists before removing
                 if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
                // Use same duration as CSS transition + a small buffer
            }, 650); // Match the transition duration (0.6s = 600ms) + buffer
        }
    }
});
