let url = location.host == 'localhost' ?
  'ws://localhost:8080/ws' : location.host == 'javascript.local' ?
  `ws://javascript.local/article/websocket/chat/ws` : // dev integration with local site
  `wss://javascript.info/article/websocket/chat/ws`; // prod integration with javascript.info

let socket = new WebSocket(url);

// send message from the form
document.forms.publish.onsubmit = function() {
  let outgoingMessage = this.message.value;

  socket.send(outgoingMessage);
  return false;
};

// handle incoming messages
socket.onmessage = function(event) {
  let incomingMessage = event.data;
  showMessage(incomingMessage);
};

socket.onclose = event => console.log(`Closed ${event.code}`);

// show message in div#messages
function showMessage(message) {
  let messageElem = document.createElement('div');
  messageElem.textContent = message;
  document.getElementById('messages').prepend(messageElem);
}