import React from 'react'
import StripePayment from '../api/payment-intent/StripePayment'

const payment = () => {
  return (
    <div>
      <StripePayment></StripePayment>
    </div>
  )
}

export default payment
