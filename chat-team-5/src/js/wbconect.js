const socket = new WebSocket("wss://zi-node-chat.herokuapp.com");
const outPutList = document.querySelector(".chat-section__messages-list");
const inputLabel = document.querySelector(".chat-section__span");
const input = document.querySelector(".chat-section__input-text");

const pushMessage = message => {
  for (let count = 0; count < message.length; count++) {
    let stringOut = makeMessage(message[count]);
    outPutList.append(stringOut);
    stringOut.scrollIntoView({ block: "center", behavior: "smooth" });
  }
};

// получение сообщения - отобразить данные в div#messages
socket.onmessage = function(event) {
  let message = JSON.parse(event.data);
  if (message.type === "color") {
    changeinputLabel(message.data);
  } else if (message.type === "history") {
    pushMessage(message.data);
  } else if (message.type === "message") {
    let stringOut = makeMessage(message.data);
    outPutList.append(stringOut);
    stringOut.scrollIntoView({ block: "center", behavior: "smooth" });
  }
};

//сделать строку сообщания
const makeMessage = message => {
  let stringOut = document.createElement("li");
  let date = new Date(message.time);
  stringOut.innerHTML =
    `<span style=color:${message.color}>${message.author}</span>` +
    `@` +
    `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:` +
    `${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:` +
    " " +
    `${message.text}`;
  input.value = "";
  input.placeholder = "Send message...";

  return stringOut;
};

const changeinputLabel = color => {
  inputLabel.innerHTML = input.value + " :";
  inputLabel.style = `color: ${color}`;
  input.value = "";
  input.placeholder = "Send message...";
};
//отправляем сообщение

input.addEventListener("keydown", event => {
  if (event.keyCode == 13 && input.value) {
    socket.send(input.value);
  }
});
