
'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

import SubDrop from "./SubDrop";

import { MdArrowDropDown, MdCircle } from "react-icons/md";

function DropMenu() {
  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className='flex focus:outline-none lg:hover:text-white'>
              Firm-Wear
              <MdArrowDropDown className='flex mt-[1px] ml-[10px] text-[20px]' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='lg:mt-[15px] lg:ml-[75px] rounded-[10px] lg:w-[200px] w-[325px] shadow-blacka border-none shadow-2xl bg-[#FFF3F3]'>
              <span  className='justify-around lg:justify-start flex lg:mb-0 mt-2 mb-5'>
              <SubDrop/>
              </span>
              <DropdownMenuItem className='mb-5 justify-around lg:justify-start lg:flex'>
                  <Link 
                      href={'/'} 
                      className="lg:flex block hover:bg-gray-500">
                      <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-red-600" />
                      Pants
                  </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='mb-5 justify-around lg:justify-start lg:flex'>
                  <Link 
                    href={'/'} 
                    className="flex hover:bg-gray-500">
                      <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-red-600" />
                      Shorts
                  </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='mb-5 justify-around lg:justify-start lg:flex'>
                  <Link 
                    href={'/'} 
                    className="flex hover:bg-gray-500">
                      <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-red-600" />
                      Sheath Warmer
                  </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='mb-5 justify-around lg:justify-start lg:flex'>
                  <Link 
                    href={'/comingSoon'} 
                    className="flex hover:bg-gray-500">
                      <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-red-600" />
                      DataBase
                  </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default DropMenu
