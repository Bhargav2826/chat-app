import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import http from "http"; // Import http for creating the server
// import {Server} from "socket.io"; // No longer needed here
// import cors from "cors";   

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { initSocket, io, getReceiverSocketId } from "./socket/socket.js"; // Import initSocket, io, and getReceiverSocketId

dotenv.config();

const app = express(); // Create the main express app
const httpServer = http.createServer(app); // Create HTTP server with the express app

initSocket(httpServer); // Initialize Socket.IO with the httpServer

// const httpServer = http.createServer(app); // Remove duplicate creation
// const io = new Server(httpServer, { // Remove duplicate creation
//   cors: {
//     origin: ["http://localhost:3000"], 
//     methods: ["GET", "POST"],
//   },
// });

// export const getReceiverSocketId = (receiverID) => { // This is already in socket.js
//   return userSocketMap[receiverID];
// };

// const userSocketMap = {}; // userId: socketId // This is already in socket.js

// io.on("connection", (socket) => { // This is already in socket.js
//   console.log("a user connected", socket.id);

//   const userId = socket.handshake.query.userId;
//   if (userId) userSocketMap[userId] = socket.id;

//   io.emit("getOnlineUsers", Object.keys(userSocketMap));

//   socket.on("disconnect", () => {
//     console.log("user disconnected", socket.id);
//     delete userSocketMap[userId];
//     io.emit("getOnlineUsers", Object.keys(userSocketMap));
//   });
// });

// export { app, io, httpServer }; // This is already handled by socket.js export
// export { io }; // We will use the io exported from socket.js directly

const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

httpServer.listen(PORT, () => { // Use httpServer.listen to start the server
  connectToMongoDB();
  console.log(process.env.MONGO_DB_URI);
  console.log(`Server running on port ${PORT}`);
});