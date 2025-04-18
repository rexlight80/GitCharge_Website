import Image from "next/image";
import CancelSubBtn from "../components/CancelSubBtn";

const CancelSubscription = () => {

  return (
    <div className="w-full h-full flex flex-col justify-center gap-[2rem] py-[2rem] px-[3rem]">
        <span className="text-[1.5rem] font-[400] text-wrap leading-[2.2rem] ">
          Thanks for subscribing to unlock pro features, please be free to provide valuable insight for the reason for cancellation at our official facebook page, so we can imporve the product to meet your satisfaction. 
        </span> 

       <CancelSubBtn/>
    </div>
  )
}

export default CancelSubscription;