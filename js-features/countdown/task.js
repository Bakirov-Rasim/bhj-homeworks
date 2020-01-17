const timer = document.getElementById("timer");
function timeLeft() {
    timer.textContent--;
    if (timer.textContent < 0) {
        alert ("Вы победили в конкурсе");
        timer.textContent = 59;
    }
}
setInterval (timeLeft, 1000);