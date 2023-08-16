import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

config({ path: "./config/config.env" })
const app = express()
const port = 3000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/api/getkey", (req, res) => res.status(200).json({ key: process.env.RAZORPAY_KEY_ID }))
app.post("/api/postkey", (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body)
})


app.use("/", (req, res) => {
    res.sendFile('index.html' , { root : './'});
})
app.listen(port, () => {
    console.log("App running at port", port);
})