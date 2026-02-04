const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = '01010101XYZABCDE';
const letters = katakana.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#e64919'; /* Orange */
    } else {
        ctx.fillStyle = 'rgba(242, 242, 244, 0.15)'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#a0a0a0'; /* Gray */
    }

    ctx.font = 'bold ' + fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 40);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
