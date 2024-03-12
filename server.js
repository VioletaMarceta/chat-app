import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {

});

io.on("connection", (socket) => {
    socket.emit("chat-message", "Hello world")

});

httpServer.listen(3000, () => {
    console.log('listening on *:3000');
  });