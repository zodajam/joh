const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const glove = new Image();
glove.src = "../src/cursor.png";

document.addEventListener("mousemove", function(event) {
    ctx.drawImage(glove, event.x - 10, event.y - 10, 32, 32);

    setTimeout(function() {
        ctx.clearRect(event.x - 10, event.y - 10, 32, 32);
    }, 100);
});