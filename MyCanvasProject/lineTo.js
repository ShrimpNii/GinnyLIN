function doFirst() {
  //先跟畫面產生關聯，再建事件聆聽功能
  let canvas = document.getElementById("canvasOctagonal");
  let context = canvas.getContext("2d");

  // 畫格線（好畫圖）
  function drawBasicLine() {
    // 設定隔線樣式
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.beginPath(); //開始路徑

    // 水平線
    for (let i = 0; i < canvas.width; i++) {
      let interval = i * 50;
      context.moveTo(0, interval);
      context.lineTo(canvas.width, interval);
      context.fillText(interval, 0, interval);
    }
    context.stroke(); // 畫線

    // 垂直線
    for (let i = 0; i < canvas.height; i++) {
      let interval = i * 50;
      context.moveTo(interval, 0);
      context.lineTo(interval, canvas.height);
      context.fillText(interval, interval, 10);
    }
    context.stroke(); // 畫線
  }
  //   drawBasicLine(); //執行畫隔線

  // 畫八角星形

  // step0 找中心點
  function findCenter() {
    let centerWidth = 10; //設定中心點寬度
    //標中心點
    context.fillStyle = "gray";
    context.fillRect(
      canvas.width / 2 - centerWidth / 2,
      canvas.height / 2 - centerWidth / 2,
      centerWidth,
      centerWidth
    );
  }
  //   findCenter(); // 執行畫中心點

  // step1 畫一個大圓（直徑為八角形的高）
  function drawBigCircle() {
    let x = canvas.width / 2; //設定圓心x座標
    let y = canvas.height / 2; //設定圓心y座標
    let radius = 300; //設定半徑

    context.strokeStyle = "#3CDBD3";
    context.fillStyle = "#00FFF5";
    context.lineWidth = 20;

    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
  }
  drawBigCircle();

  // step2 4條底線(沒有寬度的八角星)
  function drawfourLines(params) {
    context.strokeStyle = "blue";
    context.lineWidth = 2;

    context.beginPath();
    context.moveTo(350, 50);
    context.lineTo(350, 650);
    context.stroke();

    context.beginPath();
    context.moveTo(650, 350);
    context.lineTo(50, 350);
    context.stroke();

    // 斜角線讓它跟圓相接(找到八角星的端點)
    context.beginPath();
    context.moveTo(138, 138);
    context.lineTo(562, 562);
    context.stroke();

    context.beginPath();
    context.moveTo(562, 138);
    context.lineTo(138, 562);
    context.stroke();
  }
  // drawfourLines();

  // step3 利用上一步的線畫出正八角星
  context.strokeStyle = "#ff8360";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(350, 50);
  context.lineTo(138, 562);
  context.lineTo(650, 350);
  context.lineTo(138, 138);
  context.lineTo(350, 650);
  context.lineTo(562, 138);
  context.lineTo(50, 350);
  context.lineTo(562, 562);
  context.closePath();
  //   context.stroke();

  // 畫出角與角連接的座標位置
  function drawdots() {
    let dotWidth = 5; //設定中心點寬度
    //標中心點
    context.fillStyle = "yellow";
    context.fillRect(
      288 - dotWidth / 2,
      200 - dotWidth / 2,
      dotWidth,
      dotWidth
    );
    context.fillRect(
      412 - dotWidth / 2,
      200 - dotWidth / 2,
      dotWidth,
      dotWidth
    );
    context.fillRect(
      412 - dotWidth / 2,
      500 - dotWidth / 2,
      dotWidth,
      dotWidth
    );
    context.fillRect(
      288 - dotWidth / 2,
      500 - dotWidth / 2,
      dotWidth,
      dotWidth
    );

    context.fillRect(
      500 - dotWidth / 2,
      288 - dotWidth / 2,
      dotWidth,
      dotWidth
    );
    context.fillRect(
      200 - dotWidth / 2,
      288 - dotWidth / 2,
      dotWidth,
      dotWidth
    );
    context.fillRect(
      500 - dotWidth / 2,
      412 - dotWidth / 2,
      dotWidth,
      dotWidth
    );
    context.fillRect(
      200 - dotWidth / 2,
      412 - dotWidth / 2,
      dotWidth,
      dotWidth
    );
  }
  //   drawdots();

  // final step 畫出沒有內線的八角星
  context.strokeStyle = "#ff8360";
  context.fillStyle = "#e8e288";
  context.lineWidth = 15;
  context.lineJoin = "round";

  context.beginPath();
  context.moveTo(350, 50);
  context.lineTo(288, 200);
  context.lineTo(138, 138);
  context.lineTo(200, 288);
  context.lineTo(50, 350);
  context.lineTo(200, 412);
  context.lineTo(138, 562);
  context.lineTo(288, 500);
  context.lineTo(350, 650);
  context.lineTo(412, 500);
  context.lineTo(562, 562);
  context.lineTo(500, 412);
  context.lineTo(650, 350);
  context.lineTo(500, 288);
  context.lineTo(562, 138);
  context.lineTo(412, 200);
  context.closePath();

  context.stroke();
  context.fill();

  // 裝飾 畫一個內圓
  function drawInnerCircle() {
    let x = canvas.width / 2; //設定圓心x座標
    let y = canvas.height / 2; //設定圓心y座標
    let radius = 165; //設定半徑

    context.strokeStyle = "#ff8360";
    context.fillStyle = "#FF9F85";
    context.lineWidth = 7;

    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.stroke();
    // context.fill();
  }
  drawInnerCircle();
}
window.addEventListener("load", doFirst);
