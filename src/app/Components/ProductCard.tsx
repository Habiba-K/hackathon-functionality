"use client"

import Link from "next/link";
import Tags from "./tags";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";

interface ProductCardProps {
  product: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  
  function truncateDescription(description: string): import("react").ReactNode | Iterable<import("react").ReactNode> {
    throw new Error("Function not implemented.");
  }

  return (

    <div className="flex justify-center items-center text-center">
      <div className=" justify-center relative aspect-square">
      {product.map((product)=> (
              <div key={product._id}>
      {product.productImage &&(
                <img
                src={urlFor(product.productImage).url()}
                alt={product.title}
                className="lg:w-[239px] lg:h-[327px] object-contain"
                />
        )}
        <div className="p-4">
          <Link href={"/ProductDetails"}>
            <h3 className="text-lg text-[#252B42] font-bold text-md  truncate hover:text-clip tex">{product.title}</h3>
          </Link>
          {/* <p className="text-sm text-[#737373] font-bold line-clamp-2 ">{product.description}</p> */}
          <div className="flex gap-2 mt-2 justify-center">
            <span className="text-[#BDBDBD] font-bold text-sm">
              {product.price}
            </span>
            <span className="text-green-600 font-semibold text-sm">{product.dicountPercentage}</span>
          </div>
         <Tags></Tags>
        </div>
        </div>
        ))}
 
    </div>
    </div>
    
  );
};
export default ProductCard;

// import React , {useEffect , useState} from 'react';
// import sanityClient from "@sanity/client";
// import Image from "next/image";

// const sanity = sanityClient ({
//     projectId : "h0mm5gyt",
//     dataset : "production",
//     apiVersion : "2025-01-19",
//     useCdn : true
// });

// interface Product {
//     _id : string;
//     title : string;
//     price : number;
//     description : string;
//     discountPercentage : number;
//     imageUrl : string;
//     productImage: {
//         assests : {
//             _ref:  string;
//         };
//     };
//     tags : string [];
// }

// const ProductCards : React.FC = () => {
//     const [products, setProducts] = useState <Product[]>([]);
//     const [cart, setCart] = useState <Product[]>([]);
//     const fetchProducts = async ()  => {
//         try {
//             const query = `
//             *[type == "product"]{
//             _id,
//             title,
//             price,
//             decription,
//             discountPercentage,
//             "imageUrl" : productImage.assest - > url,
//             tags 
//             }
//             `;
//             const data = await sanity.fetch(query);
//             setProducts(data);

//         }catch(error){
//             console.error("Error Fetching Products: ", error);
//         }
//     };
//     const addToCart = (product : Product) => {
//         setCart((preCart) => [...preCart, product] );
//         alert(`${product.title} has been added to your Cart!`);
//     } ;

//     useEffect(() => {
//         fetchProducts();
//     },[]);

//     function truncateDescription(description: string): React.ReactNode | Iterable<React.ReactNode> {
//         throw new Error('Function not implemented.');
//     }

//     return (
//         <div className='p-4'>
//             <h2 className='text-center text-slate-800 mt-4 mb-4'></h2>
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  overflow-hidden'>
//                 {products.map((product) =>(
//                     <div key={product._id}
//                     className='bg-white shadow-md rounded-lgp-4 hover:shadow-lg transition-shadow duration-300'>
//                         <Image
//                             src={product.imageUrl}
//                             alt={product.title}
//                             className="lg:w-[239px] lg:h-[327px] object-contain"
//                         />
//                         <div className='mt-4'>
//                             <h2 className='text-lg text-[#252B42] font-bold text-md  truncate hover:text-clip'>{product.title}</h2>
//                              <p className='text-sm text-[#737373] font-bold'>{truncateDescription(product.description)}</p>
//                              <div className="flex gap-2 mt-2 justify-center">
//                                 <span className="text-[#BDBDBD] font-bold text-sm">
//                                 {product.price}
//                                 </span>
//                                 {product.discountPercentage > 0 && (
//                                 <span className="text-green-600 font-semibold text-sm">{product.discountPercentage} % OFF</span>
//                                 )}
//                                 </div>
//                         </div>
//                         <div className='mt-2 flex flex-wrap gap-2'>
//                         {product.tags.map((tag,index) =>(
//                             <span key = {index}
//                              className='text-xs bg-slate-400 text-black rounded-full x-2 py-1'>
//                                 {tag}

//                             </span>
//                         ))}
//                         </div>

//                         {/*Add to cart functionality */}
//                         <button className='mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700'
//                         onClick={() => addToCart(product)}>
//                             Add To Cart
//                         </button>
//                     </div>
//                 ))}
//             </div>


// {/* card summary */}
//     <div className='mt-8 bg-slate-100 p-6 rounded-lg shadow-md'>
//         <h2 className='text-lg font-black text-red-800'>Cart Summary</h2>
//         {cart.length > 0 ?(
//              <ul className='space-y-4'>
//                 {cart.map((item,index) => (
//                     <li
//                         key={index}
//                         className='flex justify-between items-center bg-white shadow-sm p-4 rounded-md'>
//                             <div>
//                                 <p className='font-medium text-slate-900'>{item.title}</p>
//                                 <p className='text-sm text-blue-600'>${item.price.toFixed(2)}</p>
//                                 <Image
//                                 src={item.imageUrl}
//                                 alt={item.title}
//                                 width={50}
//                                 height={50}
//                                 className='rounded-md'></Image>
//                             </div>
//                         </li>
                        
//                 ))}
//              </ul>
//         ) :(
//             <p className='text-black text-center'> Your Cart is Empty Please Add Products</p>
//         )}
//     </div>
// </div>
//     )
// }


