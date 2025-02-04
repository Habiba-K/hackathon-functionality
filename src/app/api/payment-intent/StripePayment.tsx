"use client"

import convertToSubCurrency from '@/lib/ConvertToSubCurrency';
import CheckoutPage from '@/app/Components/CheckoutPage'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from "next/navigation";
import { title } from 'process';
if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined')
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {
    const searchParams = useSearchParams();
    const totaldiscountedprice = searchParams.get("totaldiscountedprice");
    const amount = totaldiscountedprice ? parseFloat(totaldiscountedprice) : 0;
    
    return (
        <div>
            <h1 className='text-6xl font-bold text-center'>Amount : $ {amount}</h1>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: 'payment',
                    amount: convertToSubCurrency(amount),
                    currency: 'usd'
                }}
            >
                <CheckoutPage amount={amount} />
            </Elements>

        </div>
    )
}

export default StripePayment