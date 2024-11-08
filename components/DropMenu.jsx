'use client'

import { useState, useRef, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import SubDrop from "./SubDrop";
import { MdArrowDropDown, MdCircle } from "react-icons/md";

function DropMenu() {
  const [isOpen, setIsOpen] = useState(false); // Track if the dropdown is open or closed
  const dropdownRef = useRef(null); // Ref to detect clicks outside

  // Handle dropdown close when clicking outside
  useEffect(() => {
    // Function to handle click outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown if clicked outside
      }
    };

    // Add event listener on mount and remove on unmount
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when an item is clicked
  const handleItemClick = () => {
    setIsOpen(false); // Close the dropdown when an item is selected
  };

  return (
    <>
      <div ref={dropdownRef}>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}> {/* Bind dropdown state */}
          <DropdownMenuTrigger
            className="flex focus:outline-none lg:hover:text-white"
            onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on trigger click
          >
            Firm-Wear
            <MdArrowDropDown className="flex mt-[1px] ml-[10px] text-[20px]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="lg:mt-[15px] lg:ml-[75px] rounded-[10px] lg:w-[200px] w-[325px] shadow-blacka border-none shadow-2xl bg-[#FFF3F3]">
            <span className="justify-around lg:justify-start flex lg:mb-0 mt-2 mb-5">
              <SubDrop />
            </span>
            <DropdownMenuItem className="mb-5 justify-around lg:justify-start lg:flex" onClick={handleItemClick}>
              <Link href="/" className="lg:flex block hover:bg-gray-500">
                <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-red-600" />
                Pants
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="mb-5 justify-around lg:justify-start lg:flex" onClick={handleItemClick}>
              <Link href="/" className="flex hover:bg-gray-500">
                <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-red-600" />
                Shorts
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="mb-5 justify-around lg:justify-start lg:flex" onClick={handleItemClick}>
              <Link href="/" className="flex hover:bg-gray-500">
                <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-red-600" />
                Sheath Warmer
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="mb-5 justify-around lg:justify-start lg:flex" onClick={handleItemClick}>
              <Link href="/comingSoon" className="flex hover:bg-gray-500">
                <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-red-600" />
                DataBase
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

export default DropMenu;
