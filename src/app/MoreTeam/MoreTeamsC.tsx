"use client";
import React from "react";

import ProductCard from "./MoreTeamCard"; // Import the ProductCard component
import Teamproducts from "../About/TeamData"; // Import the product data

export default function MoreTeamsC() {
  // Select the first 8 products from the list
  const Team = Teamproducts.slice(0, 9);

  return (
    <div>
      
      <div className="bg-white py-10 flex justify-center">
        <div className="w-[100%]  md:w-[75%] lg:max-w-[1440px]  mx-auto px-4 ">
        <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
              </h2>
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
