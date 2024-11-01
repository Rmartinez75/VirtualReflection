
import Image from 'next/image'
import Link from 'next/link';

// import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

function ComingSoon() {
  return (
    <div style={{background: '#FFF3F3'}}>
      <div className='flex h-screen text-center justify-center items-center text-[11px]' >
        <div className='flex mt-[15%] mb-[15%]'>
          <span className='mt-[35px]'>IN PROGRESS</span>
          <Image src={'/assets/images/logo.png'} width={125} height={75} alt='Image' className='ml-8 mr-8'/>
          <span className='mt-[35px]'>
            COMING SOON... 
            {/* <RegisterLink postLoginRedirectURL='/dashboard'> */}
              <u>
                SIGN UP
              </u>
            {/* </RegisterLink>  */}
            TO GET NOTIFIED
          </span>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon;
