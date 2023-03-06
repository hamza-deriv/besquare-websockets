// import { WebSocket } from 'ws';

// var message = document.getElementById('message'),
//   handle = document.getElementById('handle'),
//   btn = document.getElementById('send'),
//   output = document.getElementById('output'),
//   feedback = document.getElementbyId('feedback');

let ws = new WebSocket("ws://localhost:8080");

// ws.on('error', console.error);

// ws.on('open', function open() {
//   ws.send('something');
// });

ws.onopen = function () {
  ws.send("Server Started in client");
};

// btn.addEventListener("click", function () {
//     alert('clicked')
// //   message({
// //     message: message.value,
// //     handle: handle.value,
// //   });
// //   message.value = "";
// });

ws.onmessage = function (e) {
    console.log(e)
  ws.send("Message something from client", e);
};

// ws.onclose = function (e) {
//     // console.log(e)
//   ws.send("Server Stopped from client");
// };

ws.onclose = function(event) {
    if (event.wasClean) {
      alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      alert('[close] Connection died');
    }
  };
// ws.on('message', function message(data) {
//   console.log('received: %s', data);
// });
