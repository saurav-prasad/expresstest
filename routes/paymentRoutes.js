import express from 'express'
import { checkout, paymentVerification } from '../controllers/paymentController.js'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router()
router.route('/checkout').post(checkout)
router.route('/verifypayment').post(paymentVerification)
router.route('/getkey').get((req, res) => {
    try {
        res.json({
            key: process.env.VERCEL_RAZORPAY_KEY_ID

        })
    } catch (error) {
        console.log(error);
    }
})
export default router
