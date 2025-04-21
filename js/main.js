// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', () => {
    // Initialize
    init();
    createParticles();
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
    // Adjust particles on resize
    if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
    }
    setTimeout(createParticles, 300);
}

function createParticles() {
    // Create a canvas element for particles
    if (!document.getElementById('particles-js')) {
        const particlesContainer = document.createElement('div');
        particlesContainer.id = 'particles-js';
        particlesContainer.style.position = 'fixed';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.zIndex = '0';
        particlesContainer.style.pointerEvents = 'none';
        document.body.prepend(particlesContainer);
        
        // Load particles.js script dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = initParticles;
        document.head.appendChild(script);
    } else {
        initParticles();
    }
}

function initParticles() {
    if (window.particlesJS) {
        window.particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 30,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00ffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00ffff",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                }
            },
            "retina_detect": true
        });
    }
} 