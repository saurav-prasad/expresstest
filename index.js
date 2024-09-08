import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import router from './routes/paymentRoutes.js'
import Razorpay from 'razorpay'
import dotenv from 'dotenv'
// config({ path: "./config/config.env" })

const app = express()
const port = 5001
dotenv.config()
// const port = process.env.PORT || 3001

// console.log(process.env.RAZORPAY_KEY_SECRET);


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", router)

app.use('/', (req, res) => {
    res.json({ success: true })
})
app.listen(port, () => {
    console.log("App running at port", port);
})
// console.log(process.env.RAZORPAY_KEY_ID);
// console.log(process.env.RAZORPAY_KEY_SECRET);

// config -> config.env
// PORT = 3000
// RAZORPAY_KEY_ID = "rzp_test_cHPGqZWYooG6s9"
// RAZORPAY_KEY_SECRET = "oOWQjuH4EDAL6DJqjzMqqucb"


export const instance = new Razorpay({
    'key_id': process.env.RAZORPAY_KEY_ID,
    'key_secret': process.env.RAZORPAY_KEY_SECRET,
});
