const canvas = document.getElementById('test-Canvas');
const context = canvas.getContext('2d');

canvas.addEventListener('mousemove', function(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    context.beginPath();
    context.arc(x, y, 5, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
});

const circleButton = document.getElementById("btnCircle");
circleButton.addEventListener("click", function() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    context.beginPath();
    context.arc(x, y, 30, 0, 2 * Math.PI);
    context.fillStyle = "blue";
    context.fill();
});

const squareButton = document.getElementById("btnSquare");
squareButton.addEventListener("click", function() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    context.beginPath();
    context.rect(x, y, 50, 50);
    context.fillStyle = 'green';
    context.fill();
});

