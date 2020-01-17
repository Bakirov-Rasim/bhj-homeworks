const killed = document.getElementById("dead");
const missed = document.getElementById("lost");

document.onclick = function (item) {

    if (item.target.className.includes("hole_has-mole")) {
        killed.textContent++;
    }
    else {
        missed.textContent++;
    }

    if (Number(killed.textContent) === 10) {
        alert("Вы победили");
        reset();
    }
    else if (Number(missed.textContent) === 5) {
        alert("Вы проиграли");
        reset();
    }
    function reset() {
        killed.textContent = 0;
        missed.textContent = 0;
    }
}