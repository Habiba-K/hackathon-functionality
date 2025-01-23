"use client";
import React from "react";

import ProductCard from "./Card"; // Import the ProductCard component
import Bestproducts from "./BestProductsdata"; // Import the product data
import ProductHeader from "../Components/ProductHeader";

export default function DisplayedProductsHome() {
  // Select the first 8 products from the list
  const displayedProducts = Bestproducts.slice(0, 8);

  return (
    <div>
      
      <div className="bg-[#FAFAFA] py-10">
        <div className="w-[100%]  md:w-[95%] lg:max-w-[1440px]  mx-auto px-4 ">
        <div className="text-start">
            <h2 className="text-lg md:text-2xl font-bold mb-2">
            BESTSELLER PRODUCTS
            </h2>
      </div>
          {/* Products Grid - 2 rows and 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 overflow-hidden ">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
