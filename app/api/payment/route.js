import { Environment, Paddle } from '@paddle/paddle-node-sdk';
import { NextResponse } from 'next/server';

const paddle = new Paddle(process.env.PADDLE_SECRET_TOKEN, {
    environment: Environment.production
});

export async function GET(req){
   
    const txn = await paddle.transactions.create({
        items: [
            {
                quantity:1,
                price:{
                    name: "Dynamically generated price",
                    description: "Dynamically generated description",
                    billingCycle: {
                        interval: "month",
                        frequency: 1,
                      },
                    unitPrice:{
                        currencyCode:'USD',
                        amount:'599'
                    },
                    product:{
                        name:"Dynamically generated product",
                        description: "Dynamically generated description",
                        taxCategory:'saas'
                    }
                },
                

            }
        ]
    })


    return NextResponse.json({ txn: txn.id });
    

}