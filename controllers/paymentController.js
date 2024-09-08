import { instance } from "../index.js";
import crypto from 'crypto'
import dotenv from 'dotenv'
dotenv.config()
export const checkout = async (req, res) => {
    try {
        console.log("create orderId request", req.body);
        let options = {
            amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
            currency: "INR",
        };
        const order = await instance.orders.create(options);
        console.log("checkout", order);
        res.status(200).json(order)
    } catch (error) {
        console.log(error);
    }
}

export const paymentVerification = (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body

    let body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac('sha256', process.env.VERCEL_RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest('hex');
    console.log("sig received", razorpay_signature);
    console.log("sig generated", expectedSignature);
    let response = { "signatureIsValid": "false" }

    if (expectedSignature === razorpay_signature) {
        response = { "signatureIsValid": "true" }
        console.log("paymentVerification", req.body);
        res.status(200).json(response)
    } else {
        console.log("paymentVerification", req.body);
        res.status(200).json(response)
    }

}
