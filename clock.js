const time = document.querySelector("#time");

function current() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  time.innerText = `${hour}:${minute}:${second}`;
}
current();
setInterval(current, 1000);
