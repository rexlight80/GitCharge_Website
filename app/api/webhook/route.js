import { Paddle, Environment, EventName} from "@paddle/paddle-node-sdk";
import axios from "axios";
import { NextResponse } from "next/server";

const paddle = new Paddle(process.env.PADDLE_SECRET_TOKEN, {
    environment: Environment.production
});

let message = { status: ''};


export async function POST(req) {
    const signature = (req.headers.get('paddle-signature')) || '';
    // req.body should be of type `buffer`, convert to string before passing it to `unmarshal`. 
    // If express returned a JSON, remove any other middleware that might have processed raw request to object
    const rawRequestBody = await req.text() || "";
    // Replace `WEBHOOK_SECRET_KEY` with the secret key in notifications from vendor dashboard
    const secretKey = process.env.WEBHOOK_SECRET_KEY || '';

   
    
  
    try {
      if (signature && rawRequestBody) {
        const eventData = await paddle.webhooks.unmarshal(rawRequestBody, secretKey, signature);
        switch (eventData.eventType) {
          // case EventName.SubscriptionActivated:
          //   console.log(`Subscribed activated ${eventData.data.status}`);
          //   responseHook = {...responseHook, subscribedId: `${eventData.data.id}`, customerId: `${eventData.data?.customerId}`, nextBilledAt: `${eventData.data.nextBilledAt}`, status: `${eventData.data.status}`};
          //   break;
          //   case EventName.CustomerCreated:
          //   console.log(`Customer ${eventData.data.email}`);
          //   responseHook = {...responseHook, email: `${eventData.data.email}`};
          //   break;
          //   case EventName.CustomerUpdated:
          //       console.log(`Customer ${eventData.data.email}`);
          //       //responseHook = {...responseHook, email: `${eventData.data.email}`};
          //       break;
          // case EventName.SubscriptionUpdated:
          //   console.log(`Subscription ${eventData.data.id} was updated`);
          //   break;
            case EventName.SubscriptionCanceled:
              console.log(`Subscribed cancelled ${eventData.data.status}`);
            message  = {...message, status: `${eventData.data.status}`}
              break;
          // case EventName.TransactionPaid:
          //   console.log(`Transaction paid ${eventData.data.id}`);
          //   responseHook = {...responseHook, transactionId: `${eventData.data.id}`}

            
          //   break;
          default:
            console.log(eventData.eventType);
        }
      } else {
        console.log('Signature missing in header');
      }
    } catch (err) {
      // Handle signature mismatch or other runtime errors
       return new Response(`Webhook error: ${err}`, {
        status: 400
      })
    }
       return await NextResponse.json({ ok:true });
    }


export async function GET(req){
     try {
          // if(Object.values(responseHook)[1].length > 0){
              
          //     return await NextResponse.json({ ...responseHook });
          // }else if(Object.values(responseHook)[2].length > 0){             
          //     const res = await axios.get(`https://sandbox-api.paddle.com/customers/${Object.values(responseHook)[2]}`, {headers: {Authorization: `Bearer ${process.env.PADDLE_SECRET_TOKEN}`}});
          //     const result = await res.data;
          //     return await NextResponse.json({ ...responseHook, email: result.data.email});
          // }else{
          //    return await NextResponse.json({subscribedId: '', email: '', customerId: '', nextBilledAt: ''});
          // }
          if(Object.values(message)[0].length > 0){
            return await NextResponse.json({ ...message });
          }
        } catch (error) {
             return new Response(`Get error: ${error}`, {
              status: 400
            })
        }
      }