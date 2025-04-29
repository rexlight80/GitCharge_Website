import { Environment, Paddle } from '@paddle/paddle-node-sdk';
import { NextResponse } from 'next/server';

const paddle = new Paddle(process.env.PADDLE_SECRET_TOKEN, {
    environment: Environment.production
});

export async function POST(req){
    const reqBody = await req.json();
     console.log('customerID', reqBody);
     
    let getCustomer =  await paddle.customers.get(reqBody.customerId);

    return NextResponse.json({ customer: getCustomer });

}