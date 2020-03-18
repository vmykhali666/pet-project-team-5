let outPutList = document.querySelector(".chat-section__messages-list");
let socket = new WebSocket("wss://zi-node-chat.herokuapp.com");
const messageArray = [];

//делаем строку на вывод
const pushMessage = message => {
  for (let count = 0; count < message.length; count++) {
    let stringOut = document.createElement("li");
    let date = new Date(message[count].time);
    stringOut.innerHTML =
      `<span style=color:${message[count].color}>${message[count].author}</span>` +
      `@` +
      `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:` +
      `${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      }:` +
      " " +
      `${message[count].text}`;
    outPutList.prepend(stringOut);
  }
};
// получение сообщения - отобразить данные в div#messages
socket.onmessage = function(event) {
  let message = JSON.parse(event.data);

  pushMessage(message.data);
};

const makeMessage = () => {};
