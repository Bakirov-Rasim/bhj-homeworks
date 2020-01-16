const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
function clicks() {
    console.log(clicker.textContent++);
};
image.onclick = clicks;