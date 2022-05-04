const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // html element 생성(html에 직접 작성하는 것이 아니라 js가 만들어 주는 것)

bgImage.src = `img/${choseImage}`;
bgImage.id = "background_img";

document.body.appendChild(bgImage);
