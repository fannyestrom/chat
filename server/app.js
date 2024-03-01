const app = require('express')();
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

app.get('/test', (req, res) => {

  res.send('<h1>Test</h1>')
});

io.on('/connection', (socket) => {
  console.log('connection', connection);
})

server.listen(3000);