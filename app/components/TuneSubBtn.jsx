"use client"
import React, {useState, useEffect} from 'react'
import { initializePaddle } from '@paddle/paddle-js';
import axios from 'axios';

const TuneSubBtn = () => {
    const[paddle, setPaddle] = useState();
    
    useEffect(() => {      
        initializePaddle({
            environment:'sandbox',
            token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,  
        }).then(paddle => setPaddle(paddle));
    }, []);

    const handleCheckout = async (e) => {
        e.preventDefault();
        let subscribedId = localStorage.getItem('subscribedId');
        
        if(!paddle) return console.log('Paddle not intialized!'); 
       
        if(subscribedId !== null){
            const res = await axios.post("/api/payment_method_change", JSON.stringify({"subscribedId": `${subscribedId}`}), {headers: {'Content-Type': 'application/json'}});

            const result = await res.data;
  
            paddle.Checkout.open({ 
               transactionId: result.paymentMethodChange.id,
               settings:{
                allowLogout: true,
                displayMode: 'overlay',
                theme:'dark',
                successUrl: `${window.location.origin}`
            }
        });
        }
    }

  return (
  <button onClick={(e) => handleCheckout(e)} className='w-[50%] mx-auto group duration-200 ease-linear rounded-full flex items-center justify-center border-[0.15rem] bg-[#F64363] border-[#F64363] cursor-pointer h-fit px-[1rem] py-[0.5rem] hover:bg-transparent'>
    <span className='text-[#fff] group-hover:text-[#000] font-medium duration-200 ease-linear text-xl xl:text-2xl'>Update payment</span>
  </button>
  )
}

export default TuneSubBtn