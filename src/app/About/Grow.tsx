  import React from 'react'
  import Image from 'next/image'
  const Grow = () => {
    return (
      <div>
        {/* groW */}
  <section className="relative w-full h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[20px]">
          
          {/* Right Side Blue Section */}
          <div className="max-w-[1440px] md:w-1/2 h-full bg-[#2A7CC7] px-5 lg:px-[50px] py-16  flex flex-col justify-center">
            <div className="flex flex-col gap-[24px]">
              <h5 className="sm:pl-5 md:pl-0 text-center sm:text-start text-white text-lg font-bold leading-[24px] tracking-[0.1px]">WORK WITH US</h5>
              <h2 className="sm:pl-5 md:pl-0 text-center sm:text-start text-white text-4xl font-bold leading-[50px] tracking-[0.2px]">
              Now Let’s grow Yours
              </h2>
              <p className="pl-5 md:pl-0 text-center sm:text-start text-white lg:text-sm text-[12px] lg:w-auto  leading-[20px] tracking-[0.2px]">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
              </p>
              <button className="ml-5 ml:pl-0 w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
                <span className="text-white text-sm font-bold">Button</span>
              </button>
            </div>
          </div>
          {/* Left Side Image */}
          <div className="md:w-1/2 h-full relative">
            <Image
              src="/images/girl.png"
              alt="Testimonial Background"
              fill
              className="absolute  sm:h-[640px] left-[150px] inset-0 object-cover"
            />
          </div>
        
        </section>
      </div>
    )
  }
  
  export default Grow
  