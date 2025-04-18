"use client"
import React from 'react';
import crownIcon from '../assets/crown_icon.png';
import Image from 'next/image';
import Link from 'next/link';


const UpgradetoPro = () => {
  return (
    <Link href='/payment'>
    <button className='w-full h-fit rounded-full p-[0.5rem] flex flex-row flex-nowrap duration-200 ease-linear justify-center cursor-pointer gap-[1rem] bg-[#90ee90] border-[0.15rem] border-[#90ee90] hover:bg-transparent'>
        <Image
          src={crownIcon}
          alt= 'pro_icon'
          className='w-8 h-8'
        />
        <span className='text-nowrap text-[#000] font-medium text-xl '>Upgrade to pro</span>
    </button>
   </Link>
  )
}

export default UpgradetoPro