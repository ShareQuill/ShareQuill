require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, { path: '/chat' });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const messageSchema = new mongoose.Schema({
  username: String,
  message: String,
});

const Message = mongoose.model('Message', messageSchema);

socketUserMapping = {}

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username;
  socketUserMapping[username] = socket;
  next();
})

io.on('connection', (socket) => {
  socket.emit('socketid', socket.id);
  createSendMessageListener(socket);
  createDisconnectListener(socket);
  console.log(socket.id);
  console.log("Created a new socket");
  return {
    statusCode: 200,
  };
});

function createSendMessageListener(socket) {
  socket.on('send-message', ({ destId, payload }) => {
    destSocket = socketUserMapping[destId]
    if (!destSocket) {
      console.log("Unknown dest id. Ignoring message.");
      return;
    }
    console.log(payload);
    destSocket.emit('stream-message', payload)
  });
}

function createDisconnectListener(socket) {
  socket.on('disconnect', (reason) => {
    for (const [userid, socketObject] of Object.entries(socketUserMapping)) {
      if (socketObject.id !== socket.id) continue;
      delete socketUserMapping[socket];
      break;
    }
  });
}

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());

app.post('/api/messages', (req, res) => {
  const { username, message } = req.body;
  const newMessage = new Message({ username, message });

  newMessage.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'Message saved successfully' });
    }
  });
});
