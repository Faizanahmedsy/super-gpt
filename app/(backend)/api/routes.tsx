import { Server } from "socket.io";

export default function handler(req: any, res: any) {
  if (res.socket.server.io) {
    console.log("socket already exists");
    // return;
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
  }
}
