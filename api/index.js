import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8800 

dotenv.config();

app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});


//middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(cors);

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err,req,res,next)=>{
  const errStatus = err.status || 500;
  const errMsg = err.message || 500;

  return res.status(errStatus).json({
    success:false,
    status:errStatus,
    message:errMsg
  });
});

app.listen(port, () => {
  connect();
  console.log("Connected to backend");
});
