import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import router from './routes/paymentRoutes.js'
import Razorpay from 'razorpay'


config({ path: "./config/config.env" })
const app = express()
const port = 3000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post("/api/postkey", (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body)
})

app.use("/api", router)

app.use('/', (req, res) => {
    res.json({ success: true })
})
app.listen(port, () => {
    console.log("App running at port", port);
})
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });