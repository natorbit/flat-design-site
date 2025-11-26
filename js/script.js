// script.js

// Ensures the script runs only after the entire page (DOM) is loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the hamburger icon and the navigation list elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // 2. Check if both elements exist before adding the listener
    if (hamburger && navMenu) {
        // 3. Add a click event listener to the hamburger icon
        hamburger.addEventListener('click', () => {
            // Toggles the 'open' class on the navigation menu.
            // The CSS @media query uses this 'open' class to switch 
            // the menu from 'display: none' to 'display: flex'.
            navMenu.classList.toggle('open');
        });
    }
});