import { Button } from '@/components/ui/button'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Freetrial = () => {
  return (
    <div>
      <div className="text-center mb-12 sm:mt-20 ">
        <h2 className="sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Start your 14 days free trial
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-lg mx-auto font-bold">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
          
        </p>
            <button
                className="rounded bg-[#23A6F0] text-white md:mr-10 font-bold text-xs sm:text-sm md:text-base px-10 py-3">
                Try it free now
            </button>
          <div className="flex  justify-center">
             <Button size={"icon"} className="rounded-full">
                <FaTwitter className="text-blue-500 w-5 h-5  " />
              </Button>
              <Button size={"icon"} className="rounded-full">
                <FaFacebook className="text-blue-500 w-5 h-5 " />
              </Button>
              <Button size={"icon"} className="rounded-full">
                <FaInstagram className="text-blue-500 w-5 h-5 " />
              </Button>
              <Button size={"icon"} className="rounded-full">
                <FaLinkedin className="text-blue-500 w-5 h-5 " />
              </Button>
            </div>
      </div>
    </div>
  )
}

export default Freetrial
