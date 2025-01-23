"use client";
import ProductCard from "../Products/page"; // Import the ProductCard component
import ProductHeader from "../Components/ProductHeader";
import React , {useEffect, useState} from "react";
import { eight } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
export default function DisplayedProductsHome() {
  // Select the first 8 products from the list
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() =>{
    async function fetchproduct(){
      const fetchedProduct : Product [] = await client.fetch(eight)
      setProduct(fetchedProduct)
    }
    fetchproduct()
  },[])
  return (

    <div>
      <ProductHeader></ProductHeader>

      <div className="bg-white py-5">
        <div className="w-[100%]  lg:max-w-[1440px]  mx-auto px-4 ">
          
          <div className=" ">
               <div className="flex justify-center items-center text-center">
               <div className=" justify-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 overflow-hidden">
               {product.map((product)=> (
                       <div key={product._id}>
               {product.productImage &&(
                         <Image
                         src={urlFor(product.productImage).url()}
                         alt={product.title}
                         width ={200}
                         height = {300}
                         className="w-full h-48 object-fill"
                         />
                 )}
                 <div className="p-4">
                   <Link href={"/ProductDetails"}>
                     <h3 className="text-lg text-[#252B42] font-bold text-md  truncate hover:text-clip tex">{product.title}</h3>
                   </Link>
                   <p className="text-sm text-[#737373] font-bold text-clip line-clamp-2">{product.description}</p>
                   <div className="flex gap-2 mt-2 justify-center">
                     <span className="text-black font-bold text-sm">
                       ${product.price}</span>
                       {product.discountPercentage > 0 && (
                        <span className="text-green-600 font-semibold text-sm">{product.discountPercentage}% OFF</span>

                       )}
                     
                   </div>
                   <div className="mt-2 flex flex-wrap  gap-2">
                    {product.tags.map((tag,index)=>(
                        <span key={index}
                        className="text-xs bg-slate-300 text-black rounded-full px-2 py-1">{tag}</span>
                    ))}
                   </div>
                     <div className="grid grid-cols-2 gap-2 ">
                                      <Button className=" mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                                       onClick={() => alert('please login')}>
                                       Add To Cart
                                      </Button>
                                      <Link href={`/product/${product.slug.current}`}>
                                        <Button className=" mt-4 w-full bg-gray-400 text-white py-2 rounded-md hover:bg-blue-700"
                                        >
                                        Details
                                        </Button>
                                     </Link>
                                      </div>
                  {/* <Tags></Tags> */}
                 </div>
                 </div>
                 ))}
          
             </div>
             </div>
             
          </div>
      </div>
    </div>
    </div>
  )}