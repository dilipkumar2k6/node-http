const net = require('net');

const server = net.createServer();
let counter = 0;
const sockets = {};
server.on('connection', (socket) => {
  socket.id = counter++;

  console.log('Client connected.\n');
  socket.write('Please type your name \n');

  socket.on('data', data => {
    if(!sockets[socket.id]){
      socket.name = data.toString().trim();
      sockets[socket.id] = socket;
      socket.write(`Welcome ${socket.name} \n`);
      return;
    }

    Object.entries(sockets).forEach(([key, cs]) => {
      if (socket.id == key) {
        return
      }
      cs.write(`${socket.name} : `);
      cs.write(data, 'utf-8');
    })
  });

  socket.on('end', () => {
    delete sockets[socket.id]
    console.log('Client disconnected.')
  })

});

server.listen(8181, () => {
  console.log('Server started. \n')
})