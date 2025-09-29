import path from 'path';
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


const __dirname = path.resolve();
dotenv.config();

const app = express(); // Create the main express app
const httpServer = http.createServer(app); // Create HTTP server with the express app

initSocket(httpServer); // Initialize Socket.IO with the httpServer

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Serve frontend build in production (no leading slash in join)
const distPath = path.join(__dirname, "frontend", "dist");
app.use(express.static(distPath));
// Express v5 uses path-to-regexp v6; use "/*" for catch-all instead of "*"
app.get("/*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

console.log("Attempting to start server on port", PORT); // Add this line
httpServer.listen(PORT, () => { // Use httpServer.listen to start the server
  connectToMongoDB();
  console.log(process.env.MONGO_DB_URI);
  console.log(`Server running on port ${PORT}`);
});