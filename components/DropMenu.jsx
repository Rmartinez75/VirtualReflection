
'use client';

import { useState, useEffect, useRef } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { MdArrowDropDown, MdCircle } from "react-icons/md";


function DropMenu() {
  const [products, setProducts] = useState([]); // State to store products
  const [isOpen, setIsOpen] = useState(false); // Track if the dropdown is open or closed
  const [isVestOpen, setIsVestOpen] = useState(false); // Track if the sub-dropdown for Vest is open
  const dropdownRef = useRef(null); // Ref to detect clicks outside

  // Fetch products from JSON file
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json'); // Fetch directly from the JSON file
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle dropdown close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown if clicked outside
        setIsVestOpen(false); // Close the sub-dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}> {/* Main dropdown for Firm-Wear */}
        <DropdownMenuTrigger
          className="flex focus:outline-none lg:hover:text-white"
          onClick={() => setIsOpen(!isOpen)} // Toggle main dropdown
        >
          Firm-Wear
          <MdArrowDropDown className="flex mt-[1px] ml-[10px] text-[20px]" />
        </DropdownMenuTrigger>
        
        <DropdownMenuContent className="lg:mt-[15px] lg:ml-[75px] rounded-[10px] lg:w-[300px] w-[325px] shadow-blacka border-none shadow-2xl bg-[#FFF3F3]">
          {/* Map through the products dynamically */}
          {products.map((product) => (
            <DropdownMenuItem
              key={product.id}
              className="mb-5 justify-around lg:justify-start lg:flex"
              onClick={() => setIsOpen(false)} // Close dropdown when a product is clicked
            >
              <Link href={`/products/${product.id}`} className="lg:flex block hover:bg-gray-400">
                <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-red-600" />
                {product.productName} {/* Display product name dynamically */}
              </Link>
            </DropdownMenuItem>
          ))}

          {/* <DropdownMenuSeparator /> */}
          <div className="flex lg:flex mt-5 mb-5 justify-center">
            <hr className="h-[2px] w-[75%] lg:w-[85%] rounded-[25px] bg-[#28231d] mt-5 mb-0 lg:mt-1 lg:mb-1" />
          </div>
          <DropdownMenuItem className="mb-5 justify-around lg:justify-start lg:flex">
            <Link href="/soon" className="flex hover:bg-gray-400">
              <MdCircle className="hidden lg:flex mt-[5px] mr-4 text-[10px] text-red-600" />
              DataBase
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropMenu;
