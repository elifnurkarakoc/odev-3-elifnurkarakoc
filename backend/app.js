import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { updateRedisVotesData, getRedisVotesData } from "./redisService.js";
import redis from "socket.io-redis";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.end("voting app");
});

io.adapter(
  redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_POST,
  })
);

io.on("connection", (socket) => {
  console.log("a user connected");

  getRedisVotesData((data) => {
    socket.emit("joinsuccess", data);
  });

  socket.on("vote", async (data) => {
    let return_Data = await updateRedisVotesData(data);
    io.sockets.emit("vote", data);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
