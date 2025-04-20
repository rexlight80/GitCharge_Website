import React from 'react'

const TermsOfService = () => {
  return (
    <section className='w-full flex flex-col items-center gap-[0.8rem] justify-center'>
        <div className='w-full h-fit'>
            <span className='text-left px-[1rem] font-bold text-[2.5rem]'>Terms of Use</span>
        </div>
       
      <span className='font-normal px-[1rem] text-[1.3rem]'>
       When we refer to “GitCharge,” “we,” “our,” or “us” in this policy, GitCharge browser extension (the “Extension”) and the developer of these software (the “Developer”). We make available the Site and Extension subject to the terms of use (“Terms of Use”) set forth below.
       </span>

       <span className='font-normal px-[1rem] text-[1.3rem]'>
       Please read these Terms of Use carefully before accessing or using GitCharge. By accessing or using any part of GitCharge, you agree to become bound by these Terms of Use. If you do not agree to all the terms of the Terms of Use, then you may not access or use GitCharge.
       </span>

       <span className='font-normal px-[1rem] text-[1.3rem]'>
       We may update the Terms of Use from time to time. Please regularly check the Site for information about revisions to the Terms of Use. By continuing to use GitCharge or provide us information through your use GitCharge after we make a change to the Terms of Use, you accept the updated provisions in the Terms of Use.
       </span>

       <div className='w-full flex flex-col gap-[0.5rem] mt-[1rem]'>
          <span className='font-medium px-[1rem] text-[1.4rem]'> Subscription</span>
          <span className='font-normal px-[1rem] text-[1.3rem]'>
          GitCharge offers both monthly subscription plans. The monthly plan requires payment on a monthly basis, while the annual plan requires payment on a yearly basis. By subscribing to GitCharge, you acknowledge and agree that your subscription will automatically renew at the end of each billing cycle (monthly) unless you cancel your subscription before the renewal date.
          </span>
          <span className='font-normal px-[1rem] text-[1.3rem]'>
          You have the right to cancel your subscription immediately at any time. You can do that through the chrome extension. Please note that there are no refunds for cancellations made after the subscription has been renewed. When you cancel, your subscription will end immediately, and you will not be charged for any subsequent billing cycles.
          </span>

       </div>

       <div className='w-full flex flex-col gap-[0.5rem] my-[1rem]'>
          <span className='font-medium px-[1rem] text-[1.4rem]'> Contact</span>
          <span className='font-normal px-[1rem] text-[1.3rem]'>
          If you have any questions or concerns regarding these Terms of Use, please contact us through our <a className='text-blue-700 underline hover:text-black hover:no-underline ease-linear duration-300 ' href='https://www.facebook.com/profile.php?id=61574003613275'>official facebook page</a>
          </span>
       </div>
      

    </section>
  )
}

export default TermsOfService