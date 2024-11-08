// components/ProductList.jsx

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Carousel from './Carousel';
import Image from 'next/image';

const ProductList = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <>     
      {products.map((product) => (
        <div key={product.id} id={product.id} className='scroll-m-[-35px]'>
          <div className="hidden lg:flex mt-5 mb-5 justify-center">
            <hr className="h-[9px] w-[50%] lg:w-[99%] rounded-[25px] bg-[#28231d] mt-5 mb-0 lg:mt-1 lg:mb-1" />
          </div>
          <div className="block lg:flex m-1 lg:ml-3">
            <div className="block">
              <div className="flex">
                <div className="p-0.5 rounded-xl">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      className="hidden lg:flex"
                      src={product.src1}
                      alt={product.alt1}
                      width={400}
                      height={0}
                      priority
                    />
                    <Image
                      className="block lg:hidden"
                      src={product.src3}
                      alt={product.alt3}
                      width={1500}
                      height={0}
                      priority
                    />
                  </Link>
                </div>
                <div className="hidden lg:flex p-0.5 rounded-xl">
                  <Link href={product.href2}>
                    <Image
                      src={product.src2}
                      alt={product.alt2}
                      width={400}
                      height={0}
                      priority
                    />
                  </Link>
                </div>
                <div className="hidden lg:flex p-0.5 rounded-xl w-[404px]">
                  <Carousel autoSlide={true} autoSlideInterval={3500}>
                    {product.slides.map((s, i) => (
                      <Image
                        src={s}
                        key={i}
                        alt={"Product Image"}
                        width={product.width}
                        height={0}
                        priority
                      />
                    ))}
                  </Carousel>
                </div>
              </div>
              <div className="hidden lg:flex">
                <div className="ml-10 mt-10 mb-0">
                  <Image
                    src={product.schematicsrc}
                    alt={product.schematicalt}
                    width={product.schemaWidth}
                    height={product.height}
                    priority
                  />
                </div>
              </div>
              <br />
              <br />
            </div>
            <div className="box-content h-auto lg:w-1/4 ml-[5%] mr-5" style={{ fontSize: "12px" }}>
              <p className="text-black font-extrabold">{product.productName}</p> <br />
              <p className="hidden lg:flex text-black">{product.productDesc}</p>
              <p className="block lg:hidden text-black">{product.productDesc2}</p>
            </div>
            <div className="block lg:hidden min-w-max justify-center items-center text-center object-center content-center">
              <div className="mt-[30px] mb-[55px] flex justify-center">
                <Image
                  src={product.schematicsrc2}
                  alt={product.schematicalt2}
                  width={product.width2}
                  height={product.height2}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;
