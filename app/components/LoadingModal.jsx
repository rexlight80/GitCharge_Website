import Image from 'next/image'
import React from 'react'
import loadingIcon from '../assets/loading.gif'


const LoadingModal = ({reRouteType}) => {
  return (
    <div className='w-fit h-fit absolute top-[50%] left-[50%] shadow-2xl border-1 border-[#fff] rounded-4xl bg-[#FF851A]'>
        <div className='w-full h-full relative rounded-4xl flex flex-col items-center'>
         <span className="absolute inline-flex h-full w-full animate-ping rounded-4xl bg-[#FF851A] opacity-75"></span>
        <span className='text-[1rem] font-bold text-[#fff] my-[0.6rem] mx-[0.8rem]'>{`${reRouteType !== null && reRouteType == 'cancel' ? 'Cancelling':'Activating'} Subscription...`}</span>

        </div>
    </div>

  )
}

export default LoadingModal