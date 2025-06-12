const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = 50, y = 200;
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") x += 10;
    if (event.key === "ArrowLeft") x -= 10;
    if (event.key === "ArrowUp") y -= 10;
    if (event.key === "ArrowDown") y += 10;
    draw();
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "gold";
    ctx.fillRect(x, y, 40, 40);
    ctx.fillStyle = "white";
    ctx.fillText("靠近書架互動：詩詞填空", 10, 20);
}
draw();
