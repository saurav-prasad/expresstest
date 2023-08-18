import express from 'express'
import { checkout, paymentVerification } from '../controllers/paymentController.js'


const router = express()
router.route('/checkout').post(checkout)
router.route('/verifypayment').post(paymentVerification)
router.route('/getkey').get((req, res) => res.json({ key: "rzp_test_cHPGqZWYooG6s9" }))
export default router
