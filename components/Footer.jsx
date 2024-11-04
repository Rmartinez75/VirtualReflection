
import Link from 'next/link'

// import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

function Footer() {
  return (
    <>
        <div id='links-section' className='block text-center lg:text-left lg:flex lg:justify-center lg:space-x-[20%] mt-[50px] mb-[50px]'>
            <div className='leading-8 lg:leading-7'>
                <ul>
                    <li>
                        <span className='text-[13px] underline font-bold'>
                            RESOURCES
                        </span>
                    </li>
                    <li className="text-[12px]">
                        <Link 
                            href={'/comingSoon'} 
                            className="" 
                            target='_blank'
                        >
                            Community Database
                        </Link>
                    </li>
                    <li className="text-[12px]">
                        <Link 
                            href={'/comingSoon'} 
                            className="" 
                            target='_blank'
                        >
                            Manuals Download
                        </Link>
                    </li>
                    <li className="text-[12px]">
                        <Link 
                            href={'/comingSoon'} 
                            className="" 
                            target='_blank'
                        >
                            Shipping and Returns
                        </Link>
                    </li>
                    <li className="text-[12px]">
                        <Link 
                            href={'/comingSoon'} 
                            className="" 
                            target='_blank'
                        >
                            Forum
                        </Link>
                    </li>
                    <li className="text-[12px]">
                        <Link 
                            href="/about" 
                            className="" 
                            target='_blank'
                        >
                            About
                        </Link>
                    </li>
                    <li className="text-[12px]">
                        {/* <LoginLink postLoginRedirectURL='/dashboard' className="" target='_blank'>Login</LoginLink> */}
                        login
                    </li>
                    <li className="text-[12px]">
                        <Link 
                            href="/" 
                            className="" 
                            target='_blank'
                        >
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='leading-8 lg:leading-7'>
                <ul>
                    <li>
                        <span className='text-[13px] underline font-bold'>
                            COMMUNITY
                        </span>
                    </li>
                    <li className="text-[12px]">
                        <Link 
                            href="https://www.youtube.com/channel/UC1dHlk59qcgRElbM6BhK-lA" 
                            className="" 
                            target='_blank'
                        >
                            YouTube
                        </Link>
                    </li>
                    <li className="text-[12px]">
                        <Link 
                            href="https://www.instagram.com/madstudi.o/" 
                            className="" 
                            target='_blank'
                        >
                            Instagram
                        </Link>
                    </li>
                    <li className="text-[12px]">
                        <Link 
                            href={'/comingSoon'} 
                            className="" 
                            target='_blank'
                        >
                            Events
                        </Link>
                    </li>
                    <li className="text-[12px]">
                        <Link 
                            href={'/comingSoon'} 
                            className="" 
                            target='_blank'
                        >
                            Press
                        </Link>
                    </li>
                    <li className="text-[12px]">
                        <Link 
                            href={'/comingSoon'} 
                            className="" 
                            target='_blank'
                        >
                            Press
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='leading-8 lg:leading-7'>
                <ul>
                    <li>
                        <span className='text-[13px] underline font-bold'>
                            CONTACT
                        </span>
                    </li>
                    <li className="text-[12px]">
                        <Link 
                            href="madstudio.vr@gmail.com" 
                            className="" 
                            target='_blank'
                        >
                            madstudio.vr@gmail.com
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div 
            id='copyright-section' 
            className='bg-[#28231d] text-white text-[10px] p-5 bottom-0'>
            <span className='flex justify-center'>
                &copy;Copyright Metaphysical Abstract Design
            </span>
        </div>
    </>
  )
}

export default Footer
