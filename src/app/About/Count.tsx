import React from 'react'
import Image from "next/image";
const Clients = () => {
  return (
    <div>
       {/* Counts */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-10 place-items-center place-content-center">
        <div className="h-auto pb-5 lg:pb-0 text-center">
          <h1 className="font-bold text-[#252B42] text-5xl">15K</h1>
          <p className="font-bold text-[#737373] font-sm">Happy Customers</p>
        </div>

        <div className=" h-auto text-center pb-5 lg:pb-0">
        <h1 className="font-bold text-[#252B42] text-5xl">150K</h1>
        <p className="font-bold text-[#737373] font-sm">Monthly Visitors</p>
        </div>

        <div className="h-auto text-center pb-5 lg:pb-0">
        <h1 className="font-bold text-[#252B42] text-5xl">15</h1>
        <p className="font-bold text-[#737373] font-sm">Countries Worldwide</p>
        </div>

        <div className=" h-auto text-center pb-5 lg:pb-0">
        <h1 className="font-bold text-[#252B42] text-5xl">100+</h1>
        <p className="font-bold text-[#737373] font-sm">Top Partners</p>
        </div>
      </div>
    </div>
  )
}

export default Clients
