'use client'
import React, {useState, useEffect} from 'react'
import { initializePaddle } from '@paddle/paddle-js';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import LoadingModal from "../components/LoadingModal";


const PaymentBtn = () => {
const[paddle, setPaddle] = useState();
const[activeSubEmails, setActiveSubEmails] = useState([]);
const searchParams = useSearchParams();
const reRoute = searchParams.get('reRoute');
const reRouteType = searchParams.get('type');
const[isReRoute, setIsReRoute] = useState(reRoute);
const[isReRouteType, setIsReRouteType] = useState(reRouteType);
const[isLoading, setIsLoading] =  useState(false);
const[message, setMessage] = useState({});
//subscribedId: '', email: '', customerId: '', nextBilledAt: '', status: '', transactionId: ''

// useEffect(() => {
//     (async () => {
//       const res = await axios.get('/api/get_allSub');
//       const subData = await res.data;
//      //getActiveSubEmails(subData.allActiveSubs);

//     })()
//   }, [])

  const sendMessageToExtension = async (data) => {
    let extensionId = 'jciofgjiocilnhidmconapjaakcjedhc';
        if(window && window.chrome.runtime){
            window.chrome.runtime.sendMessage(extensionId, {...data},
                function(response) {
                  if (response.listen == 'heard'){
                    console.log('resListen', response.listen);
                }
            });
        }
    }

useEffect(() => {
    initializePaddle({
        checkout:{
            settings:{
                allowLogout: true,
                displayMode: 'overlay',
                // frameTarget: 'checkout-container',
                // frameInitialHeight: '450',
                // frameStyle: 'width: 100%; min-width: 25.75rem; border: none; background-color: #32383F; border-radius: 0.6rem; padding: 0.3rem;',
                theme:'dark',
                successUrl: `${window.location.origin}/payment?reRoute=true`,
                allowedPaymentMethods: ['alipay', 'apple_pay', 'bancontact','card','google_pay', 'ideal','paypal','saved_payment_methods']
            }
        },
        token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
        eventCallback: (event) => {
            checkoutEvent(event);
        }
         
    }).then(paddle => setPaddle(paddle));
}, []);

useEffect(() => {
    if(isReRoute){
        const checkoutData = JSON.parse(localStorage.getItem('checkoutCompleted'));
        setIsLoading(true);
       (async () => {
        if(isReRouteType == 'cancel'){
            const response = await axios.get("/api/webhook");
             const data = await response.data;
             if(Object.values(data).length > 0){
                sendMessageToExtension(data);
                
             }
        }else{
            const res = await fetch('/api/get_allSub');
            const subData = await res.json();
            const subscribedCustomer = subData.allSub.filter(sub => sub.customer_id == checkoutData.customer.id);
            localStorage.setItem('subscribedId', subscribedCustomer[0].id);
            setMessage({subscribedId: `${subscribedCustomer[0].id}`, email: `${checkoutData.customer.email}`, customerId: `${checkoutData.customer.id}`, nextBilledAt: `${subscribedCustomer[0].next_billed_at}`, status: `${subscribedCustomer[0].status}`, transactionId: `${checkoutData.transaction_id}`})
        }
        
       })()
       setIsLoading(false);

        
    }
}, [isReRoute, isReRouteType]);

useEffect(() => {
     if(Object.keys(message)[0] && Object.keys(message)[0].length > 0){
        sendMessageToExtension(message);
         console.log('extMessage', message);
         
     }
}, [message])

// const getActiveSubEmails = (subs) => {
//     subs.forEach(async sub => {
//         const response = await axios.post('/api/get_customer', JSON.stringify({
//             "customerId": `${sub.customerId}`
//         }),{
//             headers: {
//                 'Content-Type': 'application/json'
//                }
//             });
//         const customerData = await response.data;
//         setActiveSubEmails(prev => [...prev, customerData.customer.email])
//     });
// }


const checkoutEvent = async (event) => {
    console.log('checkoutEvent', event);
    
    if(event.name == 'checkout.completed'){
        localStorage.setItem('checkoutCompleted', JSON.stringify(event.data));

            //  if(activeSubs.length > 0){
            //     activeSubs.forEach(activeSub => {
            //         if(activeSub.customerId == event.data.customer.id){
            //             console.log('activeCust', event.data.customer.id);
                        
            //         }
            //     })
            //  }
    
    //    const response = await axios.post('/api/get_customer', JSON.stringify({
    //        "customerId": `${event.data.transaction_id}`
    //    }),{
    //        headers: {
    //            'Content-Type': 'application/json'
    //           }
    //        });
    //    const data = await response.data;
    //    console.log('DATA', data);
       
       
    }
}



const handleCheckout = async (e) => {
     e.preventDefault();

    if(!paddle) return console.log('Paddle not intialized!');

    const response = await fetch("/api/payment");
    const data = await response.json();
    

    paddle.Checkout.open({ 
        transactionId: data.txn
    })
        
}

  return (
    <>
    {
        isLoading &&
        <LoadingModal reRouteType={isReRouteType}/>
    }
    <button onClick={(e) => handleCheckout(e)} className='w-full group duration-200 ease-linear rounded-full flex items-center justify-center border-[0.15rem] bg-[#F64363] border-[#F64363] cursor-pointer h-fit px-[1rem] py-[0.5rem] hover:bg-transparent'>
    <span className='text-[#fff] group-hover:text-[#000] font-medium duration-200 ease-linear text-xl xl:text-2xl'>Subscribe</span>
 </button>
    </>

  )
}

export default PaymentBtn