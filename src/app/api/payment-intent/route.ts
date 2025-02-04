import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';
const STRIPE_SECRET_KEY = "sk_test_51QlTdOFxYyGNwRV3YqVse3SsGM4mnOwCpy5dhJlcB8WXUo713sKyUY3fjR2cWQRswvGfvr9tj9S7avVwyIsUSF0t00OEuRGL7S";
const stripe = new Stripe(STRIPE_SECRET_KEY);
require('dotenv').config();
export async function POST(request: NextRequest) {
    try {
        const { amount } = await request.json();

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            automatic_payment_methods: { enabled: true },
            // automatic_payment_methods: ['card_present'], 
        })

        return NextResponse.json({ clientSecret: paymentIntent.client_secret })

    }
    catch (err: unknown) {
        if (err instanceof Error) {
            return NextResponse.json({
                status: 500,
                body: { error: err.message }
            })
        }
    }
}