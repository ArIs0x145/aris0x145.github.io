// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', () => {
    // Initialize
    init();
});

// Initialize function
function init() {
    // Check browser support
    checkBrowserSupport();
    
    // Set event listeners
    setupEventListeners();
}

// Check browser support
function checkBrowserSupport() {
    // Check if CSS variables are supported
    if (!CSS.supports('color', 'var(--primary-color)')) {
        console.warn('Your browser does not support CSS variables');
    }
}

// Set event listeners
function setupEventListeners() {
    // Resize window
    window.addEventListener('resize', handleResize);
}

// Handle window resize
function handleResize() {
    // Add resize handling logic here
} 