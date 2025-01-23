import React from 'react'
import Image from "next/image";
const Clients = () => {
  return (
    <div>
       {/* clients */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 p-10 place-items-center place-content-center">
        {/* Product 1 */}
        <div className="h-auto pb-10 md:pb-0">
          <Image
            src={"/images/client1.png"}
            height={150}
            width={150}
            alt="chair"
            className=" object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>

        {/* Product 2 */}
        <div className=" h-auto pb-10 md:pb-0">
          <Image
            src={"/images/client2.png"}
            height={150}
            width={150}
            alt="vase"
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>

        {/* Product 3 */}
        <div className=" h-auto pb-10 md:pb-0">
          <Image
            src={"/images/client3.png"}
            height={150}
            width={150}
            alt="silky vase"
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>

        {/* Product 4 */}
        <div className=" h-auto pb-10 md:pb-0">
          <Image
            src={"/images/client4.png"}
            height={150}
            width={150}
            alt="lamp"
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
        <div className="h-auto pb-10 md:pb-0">
          <Image
            src={"/images/client5.png"}
            height={150}
            width={150}
            alt="lamp"
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
        <div className="h-auto pb-10 md:pb-0">
          <Image
            src={"/images/client6.png"}
            height={150}
            width={150}
            alt="lamp"
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
      </div>
    </div>
  )
}

export default Clients
