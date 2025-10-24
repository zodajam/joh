setInterval(function() {
    if(document.getElementById("start-btn").style.visibility === "visible") {
        document.getElementById("start-btn").style.visibility = "hidden";
    } else {
        document.getElementById("start-btn").style.visibility = "visible";
    }
}, 1000);

const startWindow = document.getElementById("start");

function main() {
    let currentTop = parseInt(window.getComputedStyle(startWindow).top);
    startWindow.style.top = (currentTop - 10) + "px";

    if(currentTop < -980) { cancelAnimationFrame(startWindowAnimation); return;}

    startWindowAnimation = requestAnimationFrame(main);
}

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