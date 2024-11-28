
'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import Image from 'next/image'

import DropMenu from './DropMenu';
import {
    RegisterLink, 
    LoginLink,
    getKindeServerSession,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { MdMenu, MdOutlineShoppingCart, MdCircle } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa";


function NavBar() {
  return (
    <>
        {/* CREATE NAVBAR AND STYLE */}       
        <div className='hidden lg:flex lg:justify-between lg:items-center py-2 lg:sticky w-[100%] top-0 bg-[#28231d] text-[#afaeae] text-[13px] z-50'>
            {/* LOGO AND COMPANY NAME DIV */}
            <div className='text-center ml-[25px] p-[10px]'>
                <Link href={'/'} className='flex gap-2 lg:hover:text-white'>
                    <Image 
                        src='/assets/images/logo5.png' 
                        alt='LOGO' 
                        width={25} 
                        height={20} 
                        className='object-contain'
                    />
                    Metaphysical Abstract Design
                </Link>
            </div>
            {/* DESKTOP NAVBAR OPTIONS */}
            <div className='lg:flex'>
                <ul className='flex'>
                    <li className='mr-[59px] flex'>
                        {/* DROPMENU */}
                        <DropMenu />
                    </li>
                    {/* OPTIONS */}
                    <li className='mr-[59px]'>
                        <Link 
                            href={'/about'}
                            className="lg:hover:text-white"
                        >
                            About
                        </Link>
                    </li>
                    <li className='mr-[59px] flex'>
                        <Link 
                            href={'/'} 
                            className='flex lg:hover:text-white'
                        >
                            Cart
                            <MdOutlineShoppingCart className='mt-[4.5px] ml-[10px]' />
                        </Link>
                    </li>
                    
                    <li className='flex mr-[5px]'>
                        <LoginLink 
                            className='flex lg:hover:text-white'
                        >
                            Login
                            <IoMdLogIn className='mt-[4.5px] ml-[10px]' />
                        </LoginLink>
                    </li>
                    <span className='mr-[5px] ml-[5px]'>&nbsp; or &nbsp;</span>
                    <li className='mr-[50px] flex'>
                        <RegisterLink 
                            className='flex lg:hover:text-white'
                        >
                            Register
                            <FaRegRegistered className='mt-[4.5px] ml-[10px]' />
                        </RegisterLink>
                    </li>
                </ul>
            </div>
        </div>
        
        {/* MOBILE MENU */}
        <div className='flex lg:hidden justify-center p-[10px]'>
            <Link href={'/'} className='flex text-[16px] mb-2'>
                <Image 
                    src='/assets/images/logo5.png' 
                    alt='LOGO' 
                    width={27} 
                    height={20} 
                    className='object-contain mr-2' 
                />
                Metaphysical Abstract Design
            </Link>
        </div>
        <div className="flex lg:hidden justify-center">
            <div className="flex bg-[#28231d] justify-center lg:hidden w-[200px] h-[25px] border-[0.5px] rounded-[25px] border-solid">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex focus:outline-none"><MdMenu className='text-white size-[20px] cursor-pointer'/></DropdownMenuTrigger>
                    <DropdownMenuContent className='w-[375px] border-none rounded-[10px] shadow-black shadow-2xl bg-[#c6bcbc]'>
                        <DropdownMenuItem className='mb-[22px] mt-[5px] justify-around'>
                            <DropMenu />
                        </DropdownMenuItem>
                        <DropdownMenuItem  className='justify-around'>
                            <Link
                                href={'/about'}
                                className='flex mb-[25px]'
                            >
                                About
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='justify-around'>
                            <Link 
                                href={'/'} 
                                className='flex mb-[25px]'
                            >
                                Cart
                                <MdOutlineShoppingCart className='mt-[4px] ml-[10px]' />
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='justify-around'>
                            <LoginLink 
                                className='flex mb-[25px]'
                            >
                                Login
                                <IoMdLogIn className='mt-[4px] ml-[10px]' />
                            </LoginLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='justify-around'>
                            <RegisterLink 
                                className='flex mb-[25px]'
                            >
                                Register
                                <FaRegRegistered className='mt-[4px] ml-[10px]' />
                            </RegisterLink>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>  
        </div>      
    </>
  )
}

export default NavBar
