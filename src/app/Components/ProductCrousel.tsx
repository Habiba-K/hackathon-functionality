"use client";
import ProductCard from "../Products/page"; // Import the ProductCard component
import ProductHeader from "../Components/ProductHeader";
import React , {useEffect, useState} from "react";
import { allProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { title } from "process";
import Swal from "sweetalert2"
import { addToCart } from "../actions/action";

export default function ProductCrousel() {
  // Select the first 8 products from the list
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() =>{
    async function fetchproduct(){
      const fetchedProduct : Product [] = await client.fetch(allProducts)
      setProduct(fetchedProduct)
    }
    fetchproduct()
  },[])
  const handleAddtoCart = (e : React.MouseEvent, product :Product)=>{
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

    <div>
      <ProductHeader></ProductHeader>

      <div className="bg-white py-10">
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
                     <h3 className="text-lg text-[#252B42] font-bold text-md  truncate hover:text-clip tex">{product.title}</h3>
                   <p className="text-sm text-[#737373] font-bold text-clip line-clamp-2">{product.description}</p>
                   <div className="flex gap-2 mt-2 justify-center">
                     <span className="text-black font-bold text-sm">
                       $ {product.price}</span>
                       {product.dicountPercentage > 0 && (
                        <span className="text-green-600 font-semibold text-sm">{product.dicountPercentage}% OFF</span>

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
                   onClick={(e) => handleAddtoCart(e,product)}
                   >
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

 {/* card summary */}
    {/* <div className='mt-8 bg-slate-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-lg font-black text-red-800'>Cart Summary</h2>
        {cart.length > 0 ?(
             <ul className='space-y-4'>
                {cart.map((item,index) => (
                    <li
                        key={index}
                        className='flex justify-between items-center bg-white shadow-sm p-4 rounded-md'>
                            <div>
                                <p className='font-medium text-slate-900'>{item.title}</p>
                                <p className='text-sm text-blue-600'>${item.price.toFixed(2)}</p>
                            </div>
                            <Image
                                src={item.productImage ? urlFor(item.productImage).url() : ''}
                                alt={item.title}
                                width={50}
                                height={50}
                                className='rounded-md'/>
                            
                        </li>
                        
                ))}
             </ul>
        ) :(
            <p className='text-black text-center'> Your Cart is Empty Please Add Products</p>
        )};
    </div>  */}
    </div>
  )}