// Script para el efecto de lluvia binaria de Matrix
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const columns = Math.floor(width / 20) + 1;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops.push(0);
}

const draw = () => {
    ctx.fillStyle = 'rgba(26, 26, 26, 0.05)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#0f0';
    ctx.font = '15px Roboto Mono';

    for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(48 + Math.floor(Math.random() * 2));
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
};

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    drops.length = 0;
    const newColumns = Math.floor(width / 20) + 1;
    for (let i = 0; i < newColumns; i++) {
        drops.push(0);
    }
});

setInterval(draw, 33);