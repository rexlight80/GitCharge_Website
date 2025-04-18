import { Environment, Paddle } from '@paddle/paddle-node-sdk';
import axios from 'axios';
import { NextResponse } from 'next/server';


export async function GET(req){
    
    const res = await axios.get(`https://sandbox-api.paddle.com/subscriptions`, {headers: {Authorization: `Bearer ${process.env.PADDLE_SECRET_TOKEN}`}});
    const result = await res.data;
       return NextResponse.json({ allSub: result.data });
}