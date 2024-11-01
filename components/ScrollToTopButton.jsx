
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BiUpArrowCircle } from "react-icons/bi";


function ScrollToTopButton() {

  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        setScrollToTopButton(true)
      } else {
        setScrollToTopButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: onabort,
      behavior: 'smooth'
    })
  }

  // href='#top' 
  //           style={{textDecoration: 'none'}}

  return (
    <>
      {scrollToTopButton && (
          <button 
            onClick={scrollToTop}
          >
            <span className='fixed bottom-[20px] right-[15px] grid'>
              <BiUpArrowCircle className='text-[40px] text-[#999] font-thin bg-transparent border-transparent' />
            </span>
          </button>
        )}            
    </>
  )
}

export default ScrollToTopButton
