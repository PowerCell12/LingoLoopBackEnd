import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import "dotenv/config"
import cors from 'cors';  

const app = express();
const PORT = process.env.PORT || 3030;
import authRouter  from './routes/authRoutes.js';


app.use(cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))



app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use("/auth", authRouter)



// middlewares, depency injections, etc.


mongoose.connect(process.env.MONGODB).then(() => console.log("Connected to DB")).catch(err => console.log(err))
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));