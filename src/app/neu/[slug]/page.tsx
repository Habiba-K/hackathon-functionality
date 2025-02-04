import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { neutralProduct } from "../../../../types/neutralproduct";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Topbar from "@/app/Components/topbar";
import Navbar from "@/app/Navbar/Navbar";
import Arrow from "@/app/ProductDetails/arrow";
import AdditionalDetails from "@/app/ProductDetails/AdditionalDetails";
import Clients from "@/app/Components/Clients";

interface neutralProductPageProps {
    params : Promise<{slug : string}>
}
async function getProduct(slug : string): Promise<neutralProduct | null>{
 return client.fetch(
    groq`*[_type == "neutralsectionproduct" && slug.current == $slug][0]{
    _id ,
    title,
    _type,
    description,
    productImage,
    price,
    tags,
    discountPercentage ,
     rating,
      stock,
      colors,
      sizes,
      quantity
    }`,{slug}
 )   
}

export default async function ProductDetails({params}: neutralProductPageProps) {
   const {slug} = await params;
   const product = await getProduct(slug)

    return (
      <div>
         <Topbar bgColor="bg-[#23856D]"></Topbar>
         <Navbar /> <br /> <br />
            {/* Shop Section */}
      <div className=" mt-5 w-full h-[40px] bg-[#FAFAFA]">
        {/* category */}
        <div className="px-4 md:px-8 text-[#2A254B] ">
          {/* Breadcrumb */}
          <div className=" flex items-center justify-start gap-[5px]">
            <div className="font-bold text-[14px] leading-[24px] text-[#252B42]">
              Home
            </div>
            <Arrow></Arrow>
            <h6 className="font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
              Shop
            </h6>
          </div>
        </div>
      </div>
      
        {/* Product Section */}
        <div className="bg-[#FAFAFA] container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 ">
          {/* Left Section - Image Slider */}
          <div className="flex-1">
            <div className="relative">
              {product?.productImage && (
                      <Image
                      src={urlFor(product.productImage).url()}
                      alt={product.title}
                      className="rounded-lg"
                      width={600}
                      height={400}
                    />
              )}
            
              {/* Arrows */}
              {/* <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button> */}
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex mt-4 gap-4">
              <Image
                src="/images/pdetails1a.jpg"
                alt="Thumbnail 1"
                className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
                width={100}
                height={100}
              />
              <Image
                src="/images/pdetails1b.jpg"
                alt="Thumbnail 2"
                className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
                width={100}
                height={100}
              />
            </div>
          </div>
  
          {/* Right Section - Product Details */}
          <div className="flex-1">
            {/* Product Title and Rating */}
            <h1 className="text-2xl font-normal text-[#252B42]">
            
              {product?.title}
            </h1>
            <div className="flex items-center mt-2">
              <span className="flex items-center text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-300"
                >
                  <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                </svg>
              </span>
              <p className="ml-2 text-sm text-gray-500">({product?.rating} Reviews)</p>
            </div>
  
            {/* Price and Availability */}
            <p className="text-xl font-semibold text-black mt-4">$ {product?.price}</p>
            <p className="text-sm text-gray-500 mt-2">
              Availability:{" "}
              <span className="text-[#23A6F0] font-medium">In Stock</span>
            </p>
  
            {/* Description */}
            <p className="text-gray-700 mt-4">
              {product?.description}
            </p>
  
            {/* Buttons */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
              <button className="px-2 sm:px-6 py-2 bg-[#23A6F0] text-white text-xs sm:text-lg rounded-md hover:bg-blue-600">
                Select Options
              </button>
              <div className="flex items-center gap-4">
                <Button
                  color={"blue"}
                  size={"icon"}
                  className="bg-white rounded-full "
                >
                  <Heart />
                </Button>
  
                <Button size={"icon"} className="bg-white rounded-full">
                  <ShoppingCart />
                </Button>
  
                <Button size={"icon"} className="bg-white rounded-full">
                  <Eye />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <AdditionalDetails></AdditionalDetails>
      
      {/* <BestSellerProducts></BestSellerProducts> */}
      {/* cards */}
      <Clients></Clients>


      </div>
    );
  }