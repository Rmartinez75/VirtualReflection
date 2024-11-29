
import {getKindeServerSession, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

import { FaRegRegistered } from "react-icons/fa";
import { RiLogoutCircleLine, RiLoginCircleLine } from "react-icons/ri";

async function Authenticate() {

    const { isAuthenticated, getUser} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser()

    const getUserInitials = () => {
        const firstName = user.given_name[0]
        const lastName = user.family_name[0]
        let intitials = firstName + lastName
        return intitials
    }

  return (
    <>
        {/* Desktop View */}
        <div className="hidden lg:flex">
            {!isUserAuthenticated ? (
                <div className="flex"> 
                    <li className='flex lg:mr-[5px]'>
                        <LoginLink 
                            className='flex lg:hover:text-white'
                        >
                            Login
                            <RiLoginCircleLine className='mt-[4.5px] ml-[10px]' />
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
                </div>
            ) : (
                <div className="flex">
                    <li className='flex mr-[5px]'>
                        <LogoutLink 
                            className='flex lg:hover:text-white'
                        >
                            Logout
                            <RiLogoutCircleLine className='mt-[4.5px] ml-[10px]' />
                        </LogoutLink>
                    </li>
                    <li className='mr-[50px] ml-[113px] border rounded-full w-[40px] text-center'>
                        {getUserInitials()}
                    </li>
                </div>
            )} 
        </div>
        {/* Mobile View */}
        <div className="flex lg:hidden">
            {!isUserAuthenticated ? (
                <div className="flex space-x-10"> 
                    <li className='flex justify-center'>
                        <LoginLink 
                            className='flex'
                        >
                            Login
                            <RiLoginCircleLine className='mt-[4.5px] ml-[10px]' />
                        </LoginLink>
                    </li>
                    {/* <span className='mr-[5px] ml-[5px]'>&nbsp; or &nbsp;</span> */}
                    <li className='flex justify-center'>
                        <RegisterLink 
                            className='flex '
                        >
                            Register
                            <FaRegRegistered className='mt-[4.5px] ml-[10px]' />
                        </RegisterLink>
                    </li>
                </div>
            ) : (
                <div className="flex items-center space-x-[105px]">
                    <li className='flex'>
                        <LogoutLink 
                            className='flex lg:hover:text-white'
                        >
                            Logout
                            <RiLogoutCircleLine className='mt-[4.5px] ml-[10px]' />
                        </LogoutLink>
                    </li>
                    <li className='flex justify-center border rounded-full w-[40px] text-center border-[#28231d]'>
                        {getUserInitials()}
                    </li>
                </div>
            )}         
        </div>
    </>
  )
}

export default Authenticate
