"use client"
import React, { useEffect, useState } from 'react';
import { vitaProduct } from '../../../types/vitaproduct';
import { client } from '@/sanity/lib/client';
import { vitapro } from '@/sanity/lib/queries';
import Swal from 'sweetalert2';
import { addToCart } from '../vitaaction/vitaaction';
import { urlFor } from '@/sanity/lib/image';

const Universe = () => {
  const [product, setneutralProduct] = useState<vitaProduct[]>([])
   
     useEffect(() =>{
       async function fetchproduct(){
         const fetchedProduct : vitaProduct [] = await client.fetch(vitapro)
         setneutralProduct(fetchedProduct)
       }
       fetchproduct()
     },[])
     const handleAddtoCart = (e : React.MouseEvent, product :vitaProduct)=>{
       e.preventDefault();
       Swal.fire({
         position : "top-right",
         icon : "success",
         title : `${product.title} added to your cart`,
         showConfirmButton : false,
         timer : 1000
       })
       addToCart(product)
      
     }
  return (
      <div className="mt-10 w-full h-[810px]  bg-[#23856D] max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-center md:p-20">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 px-5 sm:text-center lg:px-10 mt-8 lg:mt-10">
        {product.map((product) => (
            <div key={product._id}>
          <h5 className="text-white text-sm lg:text-base font-bold mb-3">
            SUMMER 2020
          </h5>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight mb-4">
          {product.title}
          </h2>
          <h4 className="text-white text-sm sm:text-base lg:text-lg leading-6 mb-6">
          {product.description}
          </h4>
          <div className=" flex flex-wrap justify-center gap-4 ">
            
            <button className=" font-bold text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
              $ {product.price}
            </button>
            <button 
             onClick={(e) => handleAddtoCart(e, product)}
             className="bg-[#2DC071] font-bold text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
        
))}
</div>
        {/* Right Side: Image */}
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end ">
          <div className="relative">
             {product.map((product)=> (
                                   <div key={product._id}>
                        {product.productImage &&(
                            <img
                                                   src={urlFor(product.productImage).url()}
                                                   alt={product.title}
                                                   className="w-[90%] max-w-[1440px] sm:max-w-[500px] lg:w-[725px] lg:h-[710px] object-cover ml-18"
                                                   />
                                           )}
                        </div>
            
                     ))}
            
          </div>
        </div>
      </div>
  );
};

export default Universe;