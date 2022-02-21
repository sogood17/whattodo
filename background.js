const backgroundImg = [
  "img/00.jpg",
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
  "img/06.jpg",
  "img/07.jpg",
  "img/08.jpg",
  "img/09.jpg",
  "img/10.jpg",
];

const random = Math.floor(Math.random() * backgroundImg.length);
const randomImg = backgroundImg[random];
const background = document.createElement("img");
background.src = randomImg;
background.id = "bg";

document.body.appendChild(background);
