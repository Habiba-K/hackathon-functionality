"use client";
import Image from "next/image";
import { addToCart } from "../neuaction/neuaction"
import { useEffect, useState } from "react";
import { neutralProduct } from "../../../types/neutralproduct";
import { client } from "@/sanity/lib/client";
import { neupro } from "@/sanity/lib/queries";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
const Neutraluniverse = () => {

  // Select the first 8 products from the list
   const [product, setneutralProduct] = useState<neutralProduct[]>([])
 
   useEffect(() =>{
     async function fetchproduct(){
       const fetchedProduct : neutralProduct [] = await client.fetch(neupro)
       setneutralProduct(fetchedProduct)
     }
     fetchproduct()
   },[])
   const handleAddtoCart = (e : React.MouseEvent, product :neutralProduct)=>{
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
    <section className="flex flex-cols-2 md:flex-rows justify-center">
      <div className="md:grid md:grid-cols-2 items-center md:text-start  py-8  sm:py-16 xl:px-32">
        
      {product.map((product)=> (
                       <div key={product._id}>
            {product.productImage &&(
                <Image
                                       src={urlFor(product.productImage).url()}
                                       alt={product.title}
                                       width ={400}
                                       height = {400}
                                       className="rounded-lg"
                                       />
                               )}
            </div>

         ))}
                 <div>
          <div className="w-full pl-5 sm:pl-0  sm:text-center md:text-start lg:px-10 mt-8 lg:mt-10">
          {product.map((p) => (
            <div key={p._id}>
            <h5  className="text-[#BDBDBD] text-sm lg:text-base font-bold mb-3">
            SUMMER 2020
            </h5>
            <h2 className=" text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight mb-4">
          
              <h2  className="text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight mb-4">
                {p.title}
              </h2>
            
            </h2>
           
              <h4 className="text-sm sm:text-base lg:text-lg leading-6 mb-6">
                {p.description}
              </h4>
           
            <div className=" flex flex-wrap  gap-4 ">
            <button 
            onClick={(e) => handleAddtoCart(e, p)} 
            className="bg-[#2DC071] font-bold text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
                Buy Now
              </button>
              <Link href={`/neu/${p.slug.current}`}>
              <button className="border-2 border-emerald-400 font-bold  px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
                Read More
              </button>
              </Link>
            </div>
            </div>
          ))}
          </div>
         
        </div>
         </div>
       


      
    </section>
  );
};
export default Neutraluniverse;
