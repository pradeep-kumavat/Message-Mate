import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import MessageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToDb from "./db/connectToDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", MessageRoutes); 
app.use("/api/users", userRoutes); 


app.listen(PORT, ()=>{
    connectToDb();
    console.log(`server is listening at ${PORT}`);
});
