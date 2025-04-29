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
                priceId: process.env.PADDLE_PRICE_ID
            }
        ]
    })


    return NextResponse.json({ txn: txn.id });
    

}