const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
  socket.send('New user joined the chat');
});

socket.addEventListener('message', async(event) => {
  const message = await event.data.text().then(txt=> txt)  
  const chatWindow = document.getElementById('chat-window');
  const newMessage = document.createElement('div');
  newMessage.innerText = message;
  chatWindow.appendChild(newMessage);
  chatWindow.scrollTop = chatWindow.scrollHeight;
});

socket.addEventListener('close', () => {
  // update UI to indicate user has left the chat
});

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = messageInput.value;
  socket.send(message);
  messageInput.value = '';
});