"use client"
import React from 'react';
import chromeIcon from '../assets/chromeLogo.png';
import edgeIcon from '../assets/edgeLogo.png';
import Image from 'next/image';
import Link from 'next/link';


const DownloadBtn = ({browser}) => {
  
  return (
    <Link target='_blank' href={browser == 'chrome' ? 'https://chromewebstore.google.com/detail/gitcharge/jciofgjiocilnhidmconapjaakcjedhc': 'https://microsoftedge.microsoft.com/addons/detail/gitcharge/ahgfcoomeihgjelddjilmkmopmhpnamg'}>
    <button className='w-full h-fit rounded-full px-[0.5rem] py-[0.3rem] flex flex-row flex-nowrap duration-200 ease-linear justify-center cursor-pointer gap-[1rem] bg-[#90ee90] border-[0.15rem] border-[#90ee90] hover:bg-transparent'>
        {
          browser == 'chrome' ?
          <>
          <Image
            src={chromeIcon}
            alt= 'chrome_icon'
            className='w-11 h-8'
          /> 
        <span className='text-nowrap text-[#000] font-medium text-xl '>Download for Chrome</span>

          </>
          :
          <>
          <Image
          src={edgeIcon}
          alt= 'edge_icon'
          className='w-11 h-8'
          />
        <span className='text-nowrap text-[#000] font-medium text-xl '>Download for Edge</span>
          </>
        }
    </button>
   </Link>
  )
}

export default DownloadBtn