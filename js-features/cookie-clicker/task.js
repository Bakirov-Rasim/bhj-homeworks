const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
function clicks() {
    clicker.textContent++;
    if (clicker.textContent % 2 > 0) {
        this.width = this.width / 2;
    } else {
        this.width = this.width * 2;
    }
};
image.onclick = clicks;
