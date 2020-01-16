const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
function clicks() {
    console.log(clicker.textContent++);
    if (clicker.textContent % 2 > 0) {
        image.width = image.width / 2;
    } else {
        image.width = image.width * 2;
    }
};
image.onclick = clicks;