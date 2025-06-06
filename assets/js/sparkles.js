const colors = ['#fff'];

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    document.body.appendChild(sparkle);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    const size = Math.random() * 15 + 5;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    const delay = Math.random() * 1200;
    sparkle.style.animationDelay = `${delay}ms`;

    setTimeout(() => {
        sparkle.remove();
    }, 2500);
}

function startSparkles() {
    setInterval(createSparkle, 200);
}

startSparkles();

window.addEventListener('resize', () => {
    // Ensuring sparkles adjust to window size changes
});
