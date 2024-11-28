
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

import Image from 'next/image'
import Link from 'next/link';

const DashboardPage = async () => {
    const{getUser} = getKindeServerSession();
    const user = await getUser();
  return (
    <div style={{background: '#FFF3F3'}}>
      <div className='flex h-screen text-center justify-center items-center text-[11px]' >
        <div className='block lg:flex mt-[15%] mb-[15%]'>
          <span className='mt-[35px]'>IN PROGRESS</span>
          <div className='flex justify-center'>
          <Image src={'/assets/images/logo.png'} width={125} height={75} alt='Image' className=' m-8 lg:m-0 lg:ml-8 lg:mr-8'/>
          </div>
          <span className='mt-[35px]'>
            COMING SOON... 
            <RegisterLink postLoginRedirectURL='/dashboard'>
              <u>
                SIGN UP
              </u>
            </RegisterLink> 
            &nbsp;TO GET NOTIFIED
          </span>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;
