"use client"
import Link from 'next/link';
import Image from "next/image";
import logoImage from '../assets/gitChargeIconTransperentAddOn.png';
import checkIcon from '../assets/check_icon.png';
import PaymentBtn from '../components/PaymentBtn';





const Payment = () => {



  return (
    <>
      <section className='w-full flex items-center justify-center'>
            <Link href='/'>
             <Image src={logoImage} alt='GitCharge_logo' className='xl:w-[8.4375rem] xl:h-[8.4375rem] w-[8rem] h-[8rem]'/>
             </Link>
         </section>
         <section className='w-full flex flex-col xl:flex-row flex-auto my-2'>
            <div className='xl:w-1/2 w-full flex flex-col h-full justify-center gap-[1rem] px-[2.5rem]'>
               <h1 className='xl:text-3xl text-2xl text-[#000] font-medium'>Pricing</h1>
               <span className='xl:text-[1.3rem] text-[1rem] font-[400] text-wrap leading-[2rem]'>
                  GitCharge is loaded features that make Gitlab code review and exploration awesome. Upgrade to pro features by subscribing for $6.
               </span>
               <span className='xl:text-[1.3rem] tetx-[1rem] font-[400] text-wrap leading-[2rem]'>
               Your subscription helps us continue improving GitCharge as well as updating it to accommodate the frequent changes Gitlab made.
               </span>

             <PaymentBtn/>

            </div>
            <div className='xl:w-1/2 w-full  h-full flex items-center justify-center my-[1.5rem] xl:my-0'>
              <div className='w-full h-[25rem] grid grid-cols-3 grid-rows-5'>
            <div className='w-full h-full border-transparent'></div>
            <div className='w-full h-full border-1 border-[#000] flex items-center justify-center'><span className='font-medium text-base xl:text-lg inline-block'>Free</span></div>
            <div className='w-full h-full border-1 border-[#000] flex items-center justify-center'><span className='font-medium text-base xl:text-lg inline-block'>Pro</span></div>
            <div className='w-full h-full border-1 border-[#000] p-1 flex items-center justify-center'><span className='font-medium text-sm xl:text-base'>Simple code review & exploring</span></div>
            <div className='w-full h-full border-1 border-[#000] flex items-center justify-center'><Image src={checkIcon} className='w-7 h-7' alt="check_icon"/></div>
            <div className='w-full h-full border-1 border-[#000] flex items-center justify-center'><Image src={checkIcon} className='w-7 h-7' alt="check_icon"/></div>
            <div className='w-full h-full border-1 border-[#000] p-1 flex items-center justify-center'><span className='font-medium text-sm xl:text-base'>Quick pull request access</span></div>
            <div className='w-full h-full border-1 border-[#000] flex items-center justify-center'><Image src={checkIcon} className='w-7 h-7' alt="check_icon"/></div>
            <div className='w-full h-full border-1 border-[#000] flex items-center justify-center'><Image src={checkIcon} className='w-7 h-7' alt="check_icon"/></div>
            <div className='w-full h-full border-1 border-[#000] p-1 flex items-center justify-center'><span className='font-medium text-sm xl:text-base'>Custom icons & code fonts</span></div>
            <div className='w-full h-full border-1 border-[#000] flex items-center justify-center'><Image src={checkIcon} className='w-7 h-7' alt="check_icon"/></div>
            <div className='w-full h-full border-1 border-[#000] flex items-center justify-center'><Image src={checkIcon} className='w-7 h-7' alt="check_icon"/></div>
            <div className='w-full h-full border-1 border-[#000] p-1 flex items-center justify-center'><span className='font-medium text-sm xl:text-base'>File search</span></div>
            <div className='w-full h-full border-1 border-[#000] flex items-center justify-center'><Image src={checkIcon} className='w-7 h-7' alt="check_icon"/></div>
            <div className='w-full h-full border-1 border-[#000] flex items-center justify-center'><Image src={checkIcon} className='w-7 h-7' alt="check_icon"/></div>
            <div className='w-full h-full border-1 border-[#000] p-1 flex items-center justify-center'><span className='font-medium text-sm xl:text-base'>Summarize code using AI</span></div>
            <div className='w-full h-full border-1 border-[#000]'></div>
            <div className='w-full h-full border-1 border-[#000] flex items-center justify-center'><Image src={checkIcon} className='w-7 h-7 my-[0.8rem]' alt="check_icon"/></div>
            <div className='w-full h-full border-1 border-[#000] p-1 flex items-center justify-center'><span className='font-medium text-sm xl:text-base'>Bookmark everything</span></div>
            <div className='w-full h-full border-1 border-[#000]'></div>
            <div className='w-full h-full border-1 border-[#000] flex items-center justify-center'><Image src={checkIcon} className='w-7 h-7 my-[0.8rem]' alt="check_icon"/></div>

              </div>
            </div >
         </section>
         
         
    </>
  )
}

export default Payment;