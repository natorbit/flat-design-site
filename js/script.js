// Function to toggle the mobile menu visibility
document.addEventListener('DOMContentLoaded', () => {
    // Get the hamburger element by its ID
    const hamburger = document.getElementById('hamburger');
    
    // Get the navigation menu element by its ID
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        // Add a click listener to the hamburger icon
        hamburger.addEventListener('click', () => {
            // Toggles the 'open' class on the navigation menu
            // This is what the CSS uses to switch between display: none and display: flex
            navMenu.classList.toggle('open');
            
            // OPTIONAL: Toggle a class on the hamburger itself for animation (e.g., changing to an 'X')
            // hamburger.classList.toggle('toggled'); 
        });
    }
});