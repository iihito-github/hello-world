var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;

window.addEventListener('load', init);

var canvas;
var ctx;

function init() {
  canvas = document.getElementById('maincanvas');
  ctx = canvas.getContext('2d');

  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;

  requestAnimationFrame(update);
}

function update() {
  requestAnimationFrame(update);

  render();
}

function render() {
  // 全体をクリア
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //矩形
  ctx.beginPath();
  ctx.fillStyle = 'rgb(192, 80, 77)'; // 赤
  ctx.rect(10, 10, 100, 100);
  ctx.fill();

  //円を書く
  ctx.beginPath();
  ctx.fillStyle = 'rgb(155, 187, 89)'; // 緑
  ctx.arc(45, 95, 35, 0, Math.PI*2, false);
  ctx.fill();

  //円を描く
  ctx.beginPath();
  ctx.fillStyle = 'rgb(128, 100, 162)'; // 紫
  ctx.arc(95, 95, 35, 0, Math.PI*2, false);
  ctx.fill();

  //文字を書く
  ctx.beginPath();
  ctx.fillStyle = 'rgb(0, 0, 0)'; // 黒
  ctx.strokeText("Hello world", 50,50);
  ctx.fill();
}
