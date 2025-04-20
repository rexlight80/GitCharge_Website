'use client'
import React from 'react'
import Image from "next/image";
import logoImg from '../assets/gitChargeIconTransperentAddOn.png'
import facebookLogo from '../assets/facebook_logo.png'
import Link from 'next/link';

const Footer = () => {

    const onFaceBookClick = (e) => {
      e.preventDefault();
      window.open('https://www.facebook.com/profile.php?id=61574003613275', '_blank');
    }

  return (
    <div className='w-full h-fit p-[1rem] bg-[#3D153D] flex flex-row mt-auto'>
        <div className='w-1/2 flex flex-row items-center justify-center gap-[1rem]'>
        <Link href='/'>
        <Image src={logoImg} alt='GitCharge_logo' className='xl:w-[6.5rem] xl:h-[6.5rem] w-[5rem] h-[rem]'/>
        </Link>
        <span className='text-[#fff] font-medium xl:text-3xl text-2xl'>GitCharge</span>
        </div>
        <div className='w-1/2 flex flex-col xl:flex-row items-center gap-[1rem]'>
        <div className='flex items-center flex-nowrap gap-[0.5rem]'>
        <span className='text-[#fff] font-medium text-xl xl:text-2xl'>Follow us :</span>
        <Image src={facebookLogo} alt='facebook_logo' className='w-[2rem] h-[2rem] cursor-pointer' onClick={(e) => onFaceBookClick(e)}/>
        </div>
            <div className='flex flex-col gap-[0.2rem] ml-[2.5rem] xl:mx-auto w-fit h-full items-start'>
              <span className='text-[1.3rem] text-gray-400 font-medium'>Other:</span>
              <Link href="/terms-of-service"><span className='font-normal text-[1.1rem] text-[#fff] '>Terms of service</span></Link>
              <Link href="/privacy-policy"><span className='font-normal text-[1.1rem] text-[#fff]'>Privacy Policy</span></Link>
                
            </div>
        </div>
    </div>
  )
}

export default Footer