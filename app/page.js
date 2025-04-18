import Image from "next/image";
import logoImg from './assets/gitChargeIconTransperentAddOn.png';
import VideoComponent from "./components/VideoComponent";
import UpgradetoPro from "./components/UpgradetoPro";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useSearchParams } from "next/navigation";

export default function Home() {
  // const searchParams = useSearchParams();
  // const reRoute = searchParams.get('reRoute');
  // const reRouteType = searchParams.get('type');
  // const[isReRoute, setIsReRoute] = useState(reRoute);
  // const[isReRouteType, setIsReRouteType] = useState(reRouteType);
  // const[isLoading, setIsLoading] =  useState(false);

  

//   const sendMessageToExtension = async () => {
//     let extensionId = 'jciofgjiocilnhidmconapjaakcjedhc';
//             setIsLoading(true)
//             const response = await axios.get("/api/webhook");
//             const data = await response.data;
//             console.log('data', data);
            
//             if(Object.values(data)[0].length > 0){
//               if(isReRouteType !==  "cancel"){
//                 localStorage.setItem('subscribedId', Object.values(data)[0]);
//                 localStorage.setItem('subscribedData',  JSON.stringify(data));

//               }

             
//                 if(window && window.chrome.runtime){
//                      console.log('runtime', window.chrome.runtime);
                     
//                     window.chrome.runtime.sendMessage(extensionId, {...data},
//                         function(response) {
//                           if (response.listen == 'heard')
//                             console.log('resListen', response.listen);
                            
//                         });
//                       }
//               }
//               setIsLoading(false);
//             }

//   useEffect(() => {
//     if(isReRoute){
//       sendMessageToExtension();
//     }
// },[isReRoute]);


  return (
    <>
    <section className='w-full flex flex-col items-center gap-[4rem]'>
        {/* {
          isLoading &&
          <LoadingModal reRouteType={isReRouteType}/>
        } */}
            <Image src={logoImg} alt='GitCharge_logo' className='xl:w-[8.4375rem] xl:h-[8.4375rem] w-[8rem] h-[8rem]'/>
            <div className='w-full flex flex-col-reverse xl:flex-row gap-[4rem] items-center justify-between'>
                <div className='xl:w-1/2 w-full flex flex-col gap-[2rem]'>
                <ul className='list-disc mx-auto'>
                    <li className='mt-2 font-medium text-lg'>Simple code review & exploring</li>
                    <li className='mt-2 font-medium text-lg'>Quick pull request access</li>
                    <li className='mt-2 font-medium text-lg'>Custom icons & code fonts</li>
                    <li className='mt-2 font-medium text-lg'>File search</li>
                    <li className='mt-2 font-medium text-lg'>Summarize code using AI</li>
                    <li className='mt-2 font-medium text-lg'>Bookmark everything</li>
                </ul>
                 <UpgradetoPro/>
                </div>
                
                <VideoComponent src='/extPaySummary.mp4'/>
            

            </div>

        </section>
        <section className='flex flex-col justify-center my-[3rem] gap-[1rem] px-[1.5rem]'>
            <h1 className='font-medium underline text-[2.4rem] '>About</h1>
             <span className='text-[1.6rem] font-[400] text-wrap leading-[2.5rem]'>Gitcharge is an extension that is loaded with features that make Gitlab code review and exploration awesome. It help developers to improve their gitlab workflow and provides features such as pull request review, summarize code using AI, custom code fonts and others bring the Gitlab experience to another level.</span>
        </section>

        <section className='w-full flex flex-col justify-center my-[2rem] gap-[1rem] px-[1.5rem]'>
            <h1 className='font-medium underline text-[2.4rem] '>Features</h1>
             <div className='w-full flex flex-col gap-[2rem] my-[1rem]'>
                <div className='w-full flex flex-col xl:flex-row gap-[4rem] justify-between'>
                    <div className='flex flex-col gap-[1rem] '>
                      <h1 className='text-[1.6rem] font-[400] text-wrap leading-[2.5rem]'>Fast IDE-like code tree:</h1>
                      <span className='font-[350] text-xl text-wrap'>Browse repository and related files easily and efficiently through tree structure.</span>
                    </div>
                    <VideoComponent src='/treeStruc.mp4'/>
                    
                </div>

                <div className='w-full flex flex-col xl:flex-row gap-[4rem] justify-between'>
                    <div className='flex flex-col gap-[1rem]'>
                      <h1 className='text-[1.6rem] font-[400] text-wrap leading-[2.5rem]'>Bookmark everything:</h1>
                      <span className='font-[350] text-xl text-wrap'>Bookmark everything such as repos, individual files, merge request and issues.</span>
                    </div>
                
                <VideoComponent src='/bookMarkExt.mp4'/>

                
                    
                </div>

                <div className='w-full flex flex-col xl:flex-row gap-[4rem] justify-between'>
                    <div className='flex flex-col gap-[1rem]'>
                      <h1 className='text-[1.6rem] font-[400] text-wrap leading-[2.5rem]'>Quick pull request access:</h1>
                      <span className='font-[350] text-xl text-wrap'>Quick access to list of different state of pull requests in a popup.</span>
                    </div>
                
                <VideoComponent src='/pullReqExt2.mp4'/>

                    
                </div>

                <div className='w-full flex flex-col xl:flex-row gap-[4rem] justify-between'>
                    <div className='flex flex-col gap-[1rem]'>
                      <h1 className='text-[1.6rem] font-[400] text-wrap leading-[2.5rem]'>Summarize code:</h1>
                      <span className='font-[350] text-xl text-wrap'>Summarize and explain code down to the key points using AI.</span>
                    </div>
                <VideoComponent src='/summarizeExt2.mp4'/>

                    
                </div>

                <div className='w-full flex flex-col xl:flex-row gap-[4rem] justify-between'>
                    <div className='flex flex-col gap-[1rem]'>
                      <h1 className='text-[1.6rem] font-[400] text-wrap leading-[2.5rem]'>Custom icons, code fonts & font size:</h1>
                      <span className='font-[350] text-xl text-wrap'>Customize font, size of code and file icons from provided options.</span>
                    </div>
               
                <VideoComponent src='/extCodeFont.mp4'/>

                    
                </div>

                <div className='w-full flex flex-col xl:flex-row gap-[4rem] justify-between'>
                    <div className='flex flex-col gap-[1rem]'>
                      <h1 className='text-[1.6rem] font-[400] text-wrap leading-[2.5rem]'>File Search:</h1>
                      <span className='font-[350] text-xl text-wrap'>It provides feauture for searching a particular file.</span>
                    </div>
               
                <VideoComponent src='/searchExt2.mp4'/>

                    
                </div>

                <div className='w-full flex flex-col xl:flex-row gap-[4rem] justify-between'>
                    <div className='flex flex-col gap-[1rem]'>
                      <h1 className='text-[1.6rem] font-[400] text-wrap leading-[2.5rem]'>Authentication:</h1>
                      <span className='font-[350] text-xl text-wrap'>
                        GitCharge uses Gitlab API to retrieve repository metadata to display in the sidebar. By default, it makes unauthenticated requests to Gitlab. However, Gitlab requires authentication if you access a private repository or exceed the rate limit.
                        You can authenticate with Gitlab by:
                        </span>

                        <span className='font-[350] text-xl text-wrap'>
                        1. Manually input GitHub Personal Access Token:
                        </span>

                        <span className='font-[350] text-xl text-wrap'>
                        You can create either a fine-grained token or classic token, then paste it into the token textbox in the extension's Settings screen.
                         </span>
                        
                    </div>

                <VideoComponent src='/accessToken.mp4'/>

                    
                </div>

             </div>
        </section>
    </>
  );
}
