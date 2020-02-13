const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

const http = require('http');
const socketio = require('socket.io');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket => {
  console.log('Usuário conectado', socket.id);
});

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

const port = process.env.PORT || 3333;

server.listen(port);
