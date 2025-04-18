import { Environment, Paddle } from '@paddle/paddle-node-sdk';
import { NextResponse } from 'next/server';

const paddle = new Paddle(process.env.PADDLE_SECRET_TOKEN, {
    environment: Environment.sandbox
});

export async function POST(req){
    const reqBody = await req.json();
    const paymentMethodChange = await paddle.subscriptions.getPaymentMethodChangeTransaction(reqBody.subscribedId)

        return NextResponse.json({ paymentMethodChange : paymentMethodChange});
        
    
}
