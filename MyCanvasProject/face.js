function doFirst() {
  //先跟畫面產生關聯，再建事件聆聽功能
  let canvas = document.getElementById("canvasFace");
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

  // 畫臉（喜怒哀樂）

  // prestep1 找中心點
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

  // prestep2 畫出四格的分界
  function CutToFour() {
    context.strokeStyle = "gray";
    context.lineWidth = 3;

    context.beginPath();
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();

    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.stroke();
  }
  //   CutToFour();

  // face1 第一個臉(喜)
  // 給個底色
  context.fillStyle = "#70C2BF";
  context.fillRect(0, 0, 350, 350);

  // 畫臉
  function drawFace() {
    // 耳朵
    context.strokeStyle = "#212529";
    context.fillStyle = "white";
    context.lineWidth = 4;
    context.lineJoin = "round";

    context.beginPath();
    context.moveTo(150, 120);
    context.lineTo(100, 65);
    context.lineTo(90, 140);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(250, 65);
    context.lineTo(200, 120);
    context.lineTo(260, 140);
    context.closePath();
    context.fill();
    context.stroke();

    // 耳洞
    context.fillStyle = "#adb5bd";
    context.beginPath();
    context.ellipse(115, 115, 10, 20, 2.7, 0, 2 * Math.PI);
    context.fill();
    context.beginPath();
    context.ellipse(235, 115, 10, 20, 0.3, 0, 2 * Math.PI);
    context.fill();

    // 臉
    context.strokeStyle = "#212529";
    context.fillStyle = "white";
    context.lineWidth = 4;

    context.beginPath();
    context.ellipse(175, 200, 120, 95, 0, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    // 鼻子
    context.fillStyle = "#212529";
    context.beginPath();
    context.ellipse(176, 188, 10, 6, 3, 0, 2 * Math.PI);
    context.fill();

    // 條紋
    context.strokeStyle = "#dda15e";
    context.lineWidth = 9;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(175, 111);
    context.lineTo(175, 129);
    context.stroke();

    context.beginPath();
    context.moveTo(155, 113);
    context.lineTo(158, 129);
    context.stroke();

    context.beginPath();
    context.moveTo(195, 113);
    context.lineTo(192, 129);
    context.stroke();
  }
  drawFace();

  // 腮紅
  context.fillStyle = "#FFD6BA";
  context.beginPath();
  context.ellipse(103, 210, 30, 32, 2.8, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.ellipse(247, 210, 30, 32, 0.2, 0, 2 * Math.PI);
  context.fill();

  // 鼻子線
  context.fillStyle = "#212529";
  context.strokeStyle = "#212529";

  context.lineWidth = 4;
  context.lineCap = "round";

  context.beginPath();
  context.moveTo(176, 188);
  context.lineTo(179, 235);
  context.stroke();

  // 嘴巴
  context.beginPath();
  context.ellipse(177, 185, 60, 50, 0, 0.8 * Math.PI, 0.2 * Math.PI, true);
  context.stroke();

  // 眼睛
  context.beginPath();
  context.ellipse(150, 180, 7, 9, 0.2, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.ellipse(200, 180, 7, 9, 3.1, 0, 2 * Math.PI);
  context.fill();

  // 第二個臉(怒) 右上 
  context.translate(350, 0); // 設置以右上角為主的新原點

  // 給個底色
  context.fillStyle = "#E0A4A8";
  context.fillRect(0, 0, 350, 350);

  drawFace();

  // 腮紅
  context.fillStyle = "#FF8870";
  context.beginPath();
  context.ellipse(103, 210, 30, 32, 2.8, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.ellipse(247, 210, 30, 32, 0.2, 0, 2 * Math.PI);
  context.fill();

  // 鼻子線
  context.fillStyle = "#212529";
  context.strokeStyle = "#212529";
  context.lineWidth = 4;
  context.lineCap = "round";

  context.beginPath();
  context.moveTo(176, 188);
  context.lineTo(176, 215);
  context.stroke();

  // 嘴巴
  context.beginPath();
  context.ellipse(177, 245, 40, 30, 0, 1.2 * Math.PI, 1.8 * Math.PI);
  context.stroke();

  // 眼睛
  context.beginPath();
  context.ellipse(150, 180, 8, 8, 0, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.ellipse(200, 180, 8, 8, 0, 0, 2 * Math.PI);
  context.fill();

  // 眉毛
  context.beginPath();
  context.moveTo(145, 155);
  context.lineTo(155, 165);
  context.stroke();

  context.beginPath();
  context.moveTo(205, 155);
  context.lineTo(195, 165);
  context.stroke();

  context.translate(-350, 0); // 設回原原點

  // 第三個臉(哀) 左下
  context.translate(0, 350); // 設置以左下角為主的新原點

  // 給個底色
  context.fillStyle = "#707070";
  context.fillRect(0, 0, 350, 350);

  drawFace();
  // 腮紅
  context.fillStyle = "#E5D7EA";
  context.beginPath();
  context.ellipse(103, 210, 30, 32, 2.8, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.ellipse(247, 210, 30, 32, 0.2, 0, 2 * Math.PI);
  context.fill();

  //鼻子線
  context.strokeStyle = "#212529";
  context.lineWidth = 4;
  context.lineCap = "round";

  context.beginPath();
  context.moveTo(176, 188);
  context.lineTo(176, 220);
  context.stroke();

  // 嘴吧
  context.beginPath();
  context.moveTo(176, 220);
  context.lineTo(166, 240);
  context.stroke();

  context.beginPath();
  context.moveTo(176, 220);
  context.lineTo(186, 240);
  context.stroke();

  // 眼淚
  context.fillStyle = "#83c5be";
  context.lineJoin = "round";
  context.beginPath();
  context.moveTo(123, 180);
  context.lineTo(150, 180);
  context.lineTo(155, 270);
  context.lineTo(140, 265);
  context.lineTo(135, 270);
  context.lineTo(130, 266);
  context.lineTo(115, 270);
  context.closePath();
  context.fill();

  context.beginPath();
  context.moveTo(200, 180);
  context.lineTo(228, 180);
  context.lineTo(235, 270);
  context.lineTo(220, 265);
  context.lineTo(215, 270);
  context.lineTo(210, 266);
  context.lineTo(195, 270);
  context.closePath();
  context.fill();

  // 眼睛
  context.strokeStyle = "#212529";
  context.lineWidth = 6;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(115, 180);
  context.lineTo(155, 180);
  context.stroke();

  context.beginPath();
  context.moveTo(195, 180);
  context.lineTo(235, 180);
  context.stroke();

  context.translate(0, -350); // 設回原原點

  // 第四個臉(樂) 右下
  context.translate(350, 350); // 設置以右下角為主的新原點

  // 給個底色
  context.fillStyle = "#DBBF95";
  context.fillRect(0, 0, 350, 350);

  drawFace();

  // 腮紅
  context.fillStyle = "#FFADAD";
  context.beginPath();
  context.ellipse(103, 210, 30, 32, 2.8, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.ellipse(247, 210, 30, 32, 0.2, 0, 2 * Math.PI);
  context.fill();
  
  //鼻子線
  context.strokeStyle = "#212529";
  context.lineWidth = 4;
  context.lineCap = "round";

  context.beginPath();
  context.moveTo(176, 188);
  context.lineTo(176, 240);
  context.stroke();

  //嘴巴
  context.fillStyle = "#FF8870";
  context.strokeStyle = "#212529";
  context.lineWidth = 4;
  context.lineJoin = "round";
  context.beginPath();
  context.ellipse(177, 195, 60, 50, 0, 0.9 * Math.PI, 0.1 * Math.PI, true);
  context.stroke();

  //眼睛
  context.strokeStyle = "#212529";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(120, 180);
  context.lineTo(150, 180);
  context.stroke();
  context.beginPath();
  context.moveTo(123, 170);
  context.lineTo(150, 180);
  context.stroke();
  context.beginPath();
  context.moveTo(123, 190);
  context.lineTo(150, 180);
  context.stroke();

  context.beginPath();
  context.moveTo(200, 180);
  context.lineTo(230, 180);
  context.stroke();
  context.beginPath();
  context.moveTo(227, 170);
  context.lineTo(200, 180);
  context.stroke();
  context.beginPath();
  context.moveTo(227, 190);
  context.lineTo(200, 180);
  context.stroke();

  context.translate(-350, -350); // 設回原原點
}
window.addEventListener("load", doFirst);
