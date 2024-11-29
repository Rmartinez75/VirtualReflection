
import { Suspense } from "react"

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

import AP2 from "@/public/assets/images/aboutPage/aboutPage_2"
import AP3 from "@/public/assets/images/aboutPage/aboutPage_3"

import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <>
      <Suspense>
        <div style={{background: '#FFF3F3', fontSize: '12px'}}> 
          <div className='flex justify-center items-center mt-20 lg:hidden'>
              <Image 
                  src={'/assets/images/logo.png'}
                  alt='logo'
                  width={75}
                  height={250}
                  priority
              />
          </div>
          <div className='hidden justify-center items-center mt-20 lg:flex'>
              <Image 
                  src={'/assets/images/logo.png'}
                  alt='logo'
                  width={150}
                  height={250}
                  priority
              />
          </div>
          <div className="flex justify-center mt-20"> 
            <div className="w-[100%] m-3 lg:w-[500px]">
                <p>VR: Virtual Reflection, A Metaphysical Abstract Design LLC Development Firm-Wear, Representing The People And Their Virtual Identity.</p>
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <div className="w-[100%] p-3 lg:w-[500px]">
              <AP2 />
            </div>
          </div>
          <div className="flex justify-center mt-20"> 
            <div className="w-[100%] m-3 lg:w-[500px]">
                <p>Virtual Reflection intergrates textiles and technology. Install sensors and gain a broader comprehension of your surroundings and intern yourself.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex lg:hidden">
              <Image 
                src='/assets/images/aboutPage/About_Page_3.ai.svg' 
                alt="Product Image" 
                width={1500} 
                height={0}
                className="w-[400px]"
                priority
              />
            </div>  
            <div className="hidden lg:flex">
              <Image 
                src='/assets/images/aboutPage/About_Page_3.ai.svg' 
                alt="Product Image" 
                width={1500} 
                height={0}
                className="w-[650px]"
                priority
              />
            </div>
          </div>
          <div className="flex justify-center"> 
            <div className="w-[100%] m-3 lg:w-[500px]">
                <p>Easily install or uninstall VR sensors. Installation manuals available for download</p>
            </div>
          </div> 
          <div className="flex justify-center mt-20">
            <div className="w-[100%] p-3 lg:w-[500px]">
              <AP3 />
            </div>
          </div>
          <div className="flex justify-center mt-20"> 
            <div className="w-[100%] m-3 lg:w-[500px]">
                <p>All around you there is information. Collect and analyze with VR Sensors.</p>
            </div>
          </div>
          <div className="flex justify-center text-center mt-64 mb-64 lg:mb-40"> 
            <div className="w-[100%]">
                <RegisterLink>
                  <u>Sign up</u> for more information.
                </RegisterLink>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default page
