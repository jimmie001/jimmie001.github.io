const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let x = 50, y = 200;
const target = { x: 700, y: 200, w: 50, h: 100 };

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") x += 10;
  if (event.key === "ArrowLeft") x -= 10;
  if (event.key === "ArrowUp") y -= 10;
  if (event.key === "ArrowDown") y += 10;
  checkInteraction();
  draw();
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#6b4f2c";
  ctx.fillRect(target.x, target.y, target.w, target.h);
  ctx.fillStyle = "white";
  ctx.fillText("互動點", target.x + 5, target.y - 10);
  ctx.fillStyle = "gold";
  ctx.fillRect(x, y, 40, 40);
  ctx.fillText("靠近互動點開始任務", 10, 20);
}

function checkInteraction() {
  if (Math.abs(x - target.x) < 50 && Math.abs(y - target.y) < 80) {
    showTask();
  }
}

function showTask() {
  const box = document.getElementById("taskBox");
  const title = document.getElementById("taskTitle");
  const content = document.getElementById("taskContent");
  const choices = document.getElementById("choices");
  const message = document.getElementById("message");
  box.classList.remove("hidden");

  const task = Math.random() > 0.5 ? "poem" : "history";
  if (task === "poem") {
    title.innerText = "詩詞任務";
    content.innerText = "煮豆燃豆萁，＿＿豆在釜中泣";
    choices.innerHTML = `
      <button onclick="correct()">豆在釜中泣</button>
      <button onclick="wrong()">豆上火焰紅</button>
    `;
  } else {
    title.innerText = "歷史任務";
    content.innerText = "秦始皇統一了哪項制度？";
    choices.innerHTML = `
      <button onclick="correct()">度量衡</button>
      <button onclick="wrong()">唐詩格式</button>
    `;
  }
  message.innerText = "";
}

function correct() {
  const message = document.getElementById("message");
  message.innerText = "答對了！3 秒後前往下一關...";
  setTimeout(() => {
    location.href = 'mission2.html';
  }, 3000);
}

function wrong() {
  const message = document.getElementById("message");
  message.innerText = "答錯了，再試一次！";
}

function closeTask() {
  document.getElementById("taskBox").classList.add("hidden");
}

draw();
