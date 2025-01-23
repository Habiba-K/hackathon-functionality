"use client";
import React from "react";

import ProductCard from "./TeamCard"; // Import the ProductCard component
import Teamproducts from "./TeamData"; // Import the product data

export default function Teams() {
  // Select the first 8 products from the list
  const Team = Teamproducts.slice(0, 3);

  return (
    <div>
      
      <div className="bg-white py-10 flex justify-center">
        <div className="w-[100%]  md:w-[75%] lg:max-w-[1440px]  mx-auto px-4 ">
        <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          {/* Products Grid - 2 rows and 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 overflow-hidden ">
            {Team.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
