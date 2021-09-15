const imgs = ["1.jpg", "2.jpg", "3.jpg"];

const choseImage = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage);
