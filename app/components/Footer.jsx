'use client'
import React from 'react'
import Image from "next/image";
import logoImg from '../assets/gitChargeIconTransperentAddOn.png'
import facebookLogo from '../assets/facebook_logo.png'

const Footer = () => {

    const onFaceBookClick = (e) => {
      e.preventDefault();
      window.open('https://www.facebook.com/profile.php?id=61574003613275', '_blank');
    }

  return (
    <div className='w-full h-fit p-[1rem] bg-[#3D153D] flex flex-row mt-auto'>
        <div className='w-1/2 flex flex-row items-center justify-center gap-[1rem]'>
          <span className='text-[#fff] font-medium text-xl xl:text-2xl'>Follow us :</span>
          <Image src={facebookLogo} alt='facebook_logo' className='w-[2rem] h-[2rem] cursor-pointer' onClick={(e) => onFaceBookClick(e)}/>
        </div>
        <div className='w-1/2 flex flex-row items-center xl:gap-[2rem] gap-[1rem]'>
            <Image src={logoImg} alt='GitCharge_logo' className='xl:w-[6.5rem] xl:h-[6.5rem] w-[5rem] h-[rem]'/>
            <span className='text-[#fff] font-medium xl:text-3xl text-2xl'>GitCharge</span>
        </div>
    </div>
  )
}

export default Footer