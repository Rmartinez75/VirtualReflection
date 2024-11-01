'use client';
// components/Carousel.jsx
import { useEffect, useState, useCallback } from 'react';

function Carousel({ children: slides = [], autoSlide = false, autoSlideInterval }) {
  const [curr, setCurr] = useState(0);

  // Memoize the next function
  const next = useCallback(() => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }, [slides.length]);

  useEffect(() => {
    if (!slides.length) return; // Early return inside useEffect, which is fine
    if (!autoSlide) return; // Return if not autoSliding

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next, slides.length]); // Ensure slides.length is in the dependency array

  // If no slides, render null here
  if (!slides.length) return null;

  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex max-w-[900px] transition-transform ease-out duration-500'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
    </div>
  );
}

export default Carousel;

// 'use client'
// // components/Carousel.jsx
// import { useEffect, useState } from 'react';

// function Carousel({ children: slides = [], autoSlide = false, autoSlideInterval }) {
//   const [curr, setCurr] = useState(0);

//   // Ensure there are slides to display
//   if (!slides.length) return null;

//   const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

//   useEffect(() => {
//     if (!autoSlide) return;
//     const SlideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(SlideInterval);
//   }, [autoSlide, autoSlideInterval, next]);

//   return (
//     <div className='overflow-hidden relative'>
//       <div
//         className='flex max-w-[900px] transition-transform ease-out duration-500'
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides}
//       </div>
//     </div>
//   );
// }

// export default Carousel;
