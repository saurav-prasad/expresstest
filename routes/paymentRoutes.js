import express from 'express'
import { checkout, paymentVerification } from '../controllers/paymentController.js'


const router = express()
router.route('/checkout').post(checkout)
router.route('/verifypayment').post(paymentVerification)

export default router