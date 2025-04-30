import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section className='w-full flex flex-col items-center gap-[0.8rem] justify-center'>
        <div className='w-full h-fit'>
            <span className='text-left px-[1rem] font-bold text-[2.5rem]'>Privacy Policy</span>
        </div>
        <span className='font-normal px-[1rem] text-[1.3rem]'>
        This privacy policy will help you understand what information we collect and use at GitCharge, and the choices you have associated with that information. When we refer to “GitCharge,” “we,” “our,” or “us” in this policy, we are referring to the GitCharge website (the “Site”) and GitCharge browser extension (the “Extension”) and the developers of these software (the “Developers”).
        </span>
        <div className='w-full h-fit flex flex-col gap-[0.5rem] mt-[1rem]'>
            <span className='font-medium px-[1rem] text-[1.4rem]'>Information we collect and how we use it</span>
            <span className='font-normal px-[1rem] text-[1.3rem]'>
            We collect information from you as part of certain features provided by the Extension and Site. Paddle, our payment provider, may collect additional information from you to process payment.
            </span>
            <span className='font-normal px-[1rem] text-[1.3rem]'>
            The Extension does not and will never use Google Analytics or any third-party tracking software. The Site does not, but may use Google Analytics and/or third-party tracking software in the future to collect website traffic data that help us improve our service.
            </span>
            <span className='font-normal px-[1rem] text-[1.3rem]'>
            When using the Extension, GitLab personal access tokens and/or GitLab OAuth tokens might be needed to access private repositories. These tokens are stored in the browser&apos;s storage area. The Extension uses these tokens to authenticate the requests with GitLab (https://gitlab.com). We don&apos;t and will never store your GitLab tokens on our servers. You must take necessary safeguard to ensure your GitLab tokens are secure.
            </span>
        </div>
        <div className='w-full h-fit flex flex-col gap-[0.5rem] mt-[1rem]'>
        <span className='font-medium px-[1rem] text-[1.4rem]'>Security</span>
        <span className='font-normal px-[1rem] text-[1.3rem]'>
        We are committed to ensuring that your personal information is secure. We maintain or use third parties to maintain physical, electronic and managerial procedures designed to safeguard the information we collect through the Site. However, no information can be absolutely secure, and we can’t guarantee the security of any information that is the subject of this Privacy Policy or any information that is submitted to us via the Internet.
        </span>
        </div>

        <div className='w-full h-fit flex flex-col gap-[0.5rem] mt-[1rem]'>
        <span className='font-medium px-[1rem] text-[1.4rem]'>Third Parties</span>
        <span className='font-normal px-[1rem] text-[1.3rem]'>
        Third parties may operate or host the Site or the computers that operate the Site, store or process data for us, and provide services related to the information requests that you have submitted or communications we provide to you. We do not sell personally identifiable information collected via the Site to third party marketers.
        </span>
        </div>
        <div className='w-full h-fit flex flex-col gap-[0.5rem] mt-[1rem]'>
        <span className='font-medium px-[1rem] text-[1.4rem]'>Updates</span>
        <span className='font-normal px-[1rem] text-[1.3rem]'>
        We may periodically update this Privacy Policy. For example, we may update this policy in order to describe how new Web features may affect our use of your information and to let you know of new controls and features that we may provide you. We will not apply changes to this policy retroactively to information we have previously collected.
        </span>

        </div>
        <div className='w-full flex flex-col gap-[0.5rem] my-[1rem]'>
          <span className='font-medium px-[1rem] text-[1.4rem]'> Contact</span>
          <span className='font-normal px-[1rem] text-[1.3rem]'>
          If you have any questions or concerns regarding these Terms of Use, please contact us through our <a className='text-blue-700 underline hover:text-black hover:no-underline ease-linear duration-300' target='_blank' href='https://www.facebook.com/profile.php?id=61574003613275'>official facebook page</a>
          </span>
       </div>

    </section>
  )
}

export default PrivacyPolicy