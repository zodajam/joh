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