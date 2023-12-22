document.addEventListener("DOMContentLoaded", function () {
  let centeredImage = document.getElementById("centered-image");

  function centerImage() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    let imageWidth = centeredImage.width;
    let imageHeight = centeredImage.height;

    let centerX = (screenWidth - imageWidth) / 2;
    let centerY = (screenHeight - imageHeight) / 2;

    centeredImage.style.position = "absolute";
    centeredImage.style.left = centerX + "px";
    centeredImage.style.top = centerY + "px";
  }

  centerImage();

  window.addEventListener("resize", centerImage);

  document.addEventListener("click", function (event) {
    let x = event.clientX;
    let y = event.clientY;

    alert("Координаты клика: x=" + x + ", y=" + y);
  });
});
