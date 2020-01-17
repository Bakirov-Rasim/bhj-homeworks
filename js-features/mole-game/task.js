const killed = document.getElementById("dead");
const missed = document.getElementById("lost");
function clicks() {
    if (this.className.includes("hole_has-mole")) {
        killed.textContent ++;
    }
    else {
        missed.textContent ++;
    }

    if (Number(killed.textContent) === 10) {
        alert("Вы победили");
        killed.textContent = 0;
    }
    else if (missed.textContent === 5) {
        alert("Вы проиграли");
        missed.textContent = 0;
    }
}
hole1.onclick = clicks;
hole2.onclick = clicks;
hole3.onclick = clicks;
hole4.onclick = clicks;
hole5.onclick = clicks;
hole6.onclick = clicks;
hole7.onclick = clicks;
hole8.onclick = clicks;
hole9.onclick = clicks;