import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

//middleware
app.use(
    cors({
        orgin: "http://localhost:5173",
    })
);
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes/" , noteRoutes);


connectDB().then(() => {
app.listen(port , () => {
    console.log("Server Started at the PORT:", port);
})
});
