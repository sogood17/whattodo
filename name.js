const form = document.querySelector(".form");
const nameForm = document.querySelector(".form input");
const hello = document.getElementById("hello");
const main = document.querySelector(".mainbox");
const message = document.querySelectorAll(".hidden");

const savedName = localStorage.getItem("name");

function submitName(event) {
  event.preventDefault();
  const nameValue = nameForm.value;
  localStorage.setItem("name", nameValue);
  message[0].classList.remove("hidden");
  message[1].classList.remove("hidden");
  message[2].classList.remove("hidden");
  hello.innerText = `Hello ${nameValue}`;
  main.classList.add("hidden");
}

if (savedName === null) {
  form.addEventListener("submit", submitName);
} else {
  message[0].classList.remove("hidden");
  message[1].classList.remove("hidden");
  message[2].classList.remove("hidden");
  hello.innerText = `Hello ${savedName}`;
  main.classList.add("hidden");
}
