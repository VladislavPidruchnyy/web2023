const TOKEN = "5727214914:AAHsnmKp2aDW4wr4mYt8QpfSVxKvH_6-FFA"; // токен от BotFather
const CHAT_ID = "-888938826"; // chat_id для телеграм

var form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  data = new FormData(this);
  sendMsg(data);
});

function sendMsg(data) {
  var url = "https://api.telegram.org/bot" + TOKEN + "/sendMessage";
  var body = JSON.stringify({
    chat_id: CHAT_ID,
    parse_mode: "Markdown",
    text: "*Имя:*\n" + data.get("name") + "\n\n*Телефон:*" + data.get("phone"),
  });
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(body);
  // message success
  const success = document.querySelector("#success");
  success.classList.add("show");
  success.classList.add("alert");
  success.classList.remove("hide");
  setTimeout(function () {
    success.classList.add("hide");
    success.classList.remove("show");
  }, 5000);
  form.reset();
}
