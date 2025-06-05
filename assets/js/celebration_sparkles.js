const paperColors = ['#ffff00', '#ff0000', '#ff69b4']; // Yellow, red, pink

function createPaper() {
    const paper = document.createElement('div');
    paper.classList.add('paper');
    document.body.appendChild(paper);

    const button = document.querySelector('.button');
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    paper.style.left = `${x}px`;
    paper.style.top = `${y}px`;

    const isSquare = Math.random() > 0.5;
    paper.style.width = isSquare ? '10px' : '14px';
    paper.style.height = isSquare ? '10px' : '6px';

    paper.style.backgroundColor = paperColors[Math.floor(Math.random() * paperColors.length)];

    const angle = Math.random() * 2 * Math.PI; // Full circle for burst
    const distance = Math.random() * 500 + 250; // Burst radius
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const rotate = (Math.random() - 0.2) * 1200; // Random rotation up to ±360deg

    paper.style.setProperty('--dx', `${dx}px`);
    paper.style.setProperty('--dy', `${dy}px`);
    paper.style.setProperty('--rotate', `${rotate}deg`);

    setTimeout(() => {
        paper.remove();
    }, 2200);
}

const button = document.querySelector('.button');
button.addEventListener('click', () => {
    for (let i = 0; i < 60; i++) {
        setTimeout(createPaper, i * 2);
    }
});
