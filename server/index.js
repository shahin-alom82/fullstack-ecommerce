import express from "express"
import 'dotenv/config'
import userRouter from "./route/userRoutes.js";
import cors from 'cors'
import mongodbConnect from "./config/mongodb.js";

const app = express()
const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.json())
mongodbConnect()

app.get("/", (req, res) => {
      res.send("Orebi server is running...")
});

app.use('/api/user', userRouter)

app.listen(port, () => {
      console.log(`Server is Running on port : ${port}`)
})

