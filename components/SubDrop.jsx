
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from "next/link";

  import { MdCircle, MdArrowDropDown } from "react-icons/md";
  import { PiArrowLineDownRightFill } from "react-icons/pi";
  

function SubDrop() {
  return (
    <>
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className='flex focus:outline-none lg:mb-5 lg:ml-[7px] hover:bg-gray-500'>
                    <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-red-600" />
                    Vest
                    <PiArrowLineDownRightFill className="hidden lg:flex lg:ml-[75px] mt-1" />
                    <MdArrowDropDown className='flex lg:hidden mt-[1px] ml-[10px] text-[20px]' />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='lg:ml-[450px] w-[275px] rounded-[10px] border-none shadow-black shadow-2xl lg:bg-[#FFF3F3] bg-[#c6bcbc]'>
                    <DropdownMenuItem className="lg:justify-start justify-around">
                        <Link href={'/'} className='flex hover:bg-gray-500'>
                            <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-gray-600" />
                            VR: Air Canvas
                        </Link>                    
                    </DropdownMenuItem>
                    <DropdownMenuItem className="lg:justify-start justify-around">
                        <Link 
                            href={'/'} 
                            className='flex hover:bg-gray-500'>
                            <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-gray-600" />
                            VR: Air Exporer
                        </Link>                      
                    </DropdownMenuItem>
                    <DropdownMenuItem className="lg:justify-start justify-around">
                        <Link 
                            href={'/'} 
                            className='flex hover:bg-gray-500'>
                            <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-gray-600" />
                            VR: Air Carbon
                        </Link>                      
                    </DropdownMenuItem>
                    <DropdownMenuItem className="lg:justify-start justify-around">
                        <Link 
                            href={'/'} 
                            className='flex hover:bg-gray-500'>
                            <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-gray-600" />
                            VR: Air Golden Leaf
                        </Link>                     
                    </DropdownMenuItem>
                    <DropdownMenuItem className="lg:justify-start justify-around">
                        <Link 
                            href={'/'} 
                            className='flex hover:bg-gray-500'>
                            <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-gray-600" />
                            VR: Air Bubble Black
                        </Link>                     
                    </DropdownMenuItem>
                    <DropdownMenuItem className="lg:justify-start justify-around">
                        <Link 
                            href={'/'} 
                            className='flex hover:bg-gray-500'>
                            <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-gray-600" />
                            VR: Terrain 1S
                        </Link>                     
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </>
  )
}

export default SubDrop