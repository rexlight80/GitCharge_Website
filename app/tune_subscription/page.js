import React from 'react'
import TuneSubBtn from '../components/TuneSubBtn'

const TuneSubscription = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-[2rem] py-[2rem] px-[3rem]">
    <span className="text-[1.5rem] font-[400] text-wrap leading-[2.2rem]">
    Change the payment method that customer use to pay for future subscription renewals and charges. It&apos;s especially important where subscriptions are past due, meaning customers have an outstanding payment.
    </span> 
    <TuneSubBtn/>
    </div>
    )
  }

export default TuneSubscription