document.addEventListener("DOMContentLoaded", () => {
    // 1. Generate Starry Background
    const starsElement = document.querySelector('.stars');
    const numberOfStars = 100; // Dense stars
    let shadows = [];
    
    // We want stars scattered across 2x the window height so scrolling looks fine
    const height = Math.max(document.body.scrollHeight, window.innerHeight * 2);
    const width = document.body.scrollWidth || window.innerWidth;
    
    for(let i = 0; i < numberOfStars; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        // Varying opacity for depth
        const opacity = Math.random() * 0.8 + 0.2;
        const color = `rgba(255, 255, 255, ${opacity})`;
        shadows.push(`${x}px ${y}px ${color}`);
    }
    
    starsElement.style.boxShadow = shadows.join(', ');

    // 2. Initialize Fireworks.js
    const container = document.querySelector('.fireworks-container');
    if (window.Fireworks) {
        const fireworks = new Fireworks.default(container, {
            autoresize: true,
            opacity: 0.8,
            acceleration: 1.02,
            friction: 0.98,
            gravity: 0.8,
            particles: 60,
            traceLength: 4,
            traceSpeed: 2,
            explosion: 6,
            intensity: 15,
            flickering: 50,
            lineStyle: 'round',
            hue: {
                min: 0,
                max: 360
            },
            delay: {
                min: 50,
                max: 100
            },
            rocketsPoint: {
                min: 50,
                max: 50
            },
            lineWidth: {
                explosion: {
                    min: 2,
                    max: 4
                },
                trace: {
                    min: 1,
                    max: 3
                }
            },
            brightness: {
                min: 50,
                max: 80
            },
            decay: {
                min: 0.015,
                max: 0.03
            },
            mouse: {
                click: false,
                move: false,
                max: 1
            }
        });
        fireworks.start();
    } else {
        console.warn("Fireworks.js not loaded from CDN.");
    }
});
