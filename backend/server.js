import path from 'path';
import fs from 'fs';
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
import { initSocket } from "./socket/socket.js"; // Import initSocket, io, and getReceiverSocketId


const __dirname = path.resolve();
dotenv.config();

const app = express(); // Create the main express app
const httpServer = http.createServer(app); // Create HTTP server with the express app

initSocket(httpServer); // Initialize Socket.IO with the httpServer

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Serve frontend build in production
const distPath = path.join(__dirname, "frontend", "dist");
console.log("Static dist path:", distPath);
console.log("Dist exists:", fs.existsSync(distPath));
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// Fallback: for any non-API request, serve index.html if available
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  res.status(404).send("Frontend build not found. Ensure Render Build Command runs 'npm run build' and that files exist in frontend/dist.");
});

console.log("Attempting to start server on port", PORT); // Add this line
httpServer.listen(PORT, () => { // Use httpServer.listen to start the server
  connectToMongoDB();
  console.log(process.env.MONGO_DB_URI);
  console.log(`Server running on port ${PORT}`);
});