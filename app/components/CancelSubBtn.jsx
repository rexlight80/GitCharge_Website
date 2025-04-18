"use client"
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CancelSubBtn = () => {
    const router = useRouter();

    const handleCancellation = async (e) => {
        e.preventDefault();

        let subscribedId = localStorage.getItem('subscribedId');
        let extensionId = 'jciofgjiocilnhidmconapjaakcjedhc';

        
      
         if(subscribedId !== null){
         
             const res = await axios.post("/api/cancel_sub", JSON.stringify({
                 "effective_from": "immediately",
                 "subscribedId": `${subscribedId}`
             }),{headers: {
                     'Content-Type': 'application/json'
                    }
                }
            )
            
                const result = await res.data;
                localStorage.removeItem('checkoutCompleted');
                localStorage.removeItem('subscribedId');
                router.push('/payment/?reRoute=true&type=cancel');
                
            }
        }

  return (
    <button onClick={(e) => handleCancellation(e)} className='w-[50%] min-w-fit mx-auto group duration-200 ease-linear rounded-full flex items-center justify-center border-[0.15rem] bg-[#F64363] border-[#F64363] cursor-pointer h-fit px-[1rem] py-[0.5rem] hover:bg-transparent'>
    <span className='text-[#fff] group-hover:text-[#000] font-medium duration-200 ease-linear text-xl xl:text-2xl'>Cancel Subscription</span>
   </button>
  )
}

export default CancelSubBtn