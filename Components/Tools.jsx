import React from 'react'
import Image from 'next/image'
import Logo1 from "@/public/logo1.webp"
import Logo2 from "@/public/logo2.webp"
import Logo3 from "@/public/logo3.webp"
import Logo4 from "@/public/logo4.webp"
import Logo5 from "@/public/logo5.webp"
import Logo6 from "@/public/logo6.webp"
import Logo7 from "@/public/logo7.webp"



function Tools() {


      const logos = [ Logo1,Logo2,Logo3,Logo4,Logo5,Logo6,Logo7,Logo1,Logo2,Logo3,Logo4,Logo5,Logo6,Logo7]
  return (
    <>
            <main className='w-full '>

                <div className='p-2' data-aos="fade-right" data-aos-duration="2000" >

                    <p className='text-xl lg:text-4xl text-center '> <span className='text-blue-700 font-bold '>Direct integrations </span> with your favorite tools</p>
                    <p className='text-sm  lg:text-lg text-center '>Easily connect with your 60+ favorite software without needing to have third-party middleware tools.</p>
                </div>


                <div className=' grid lg:grid-cols-7 grid-cols-3 md:grid-cols-5 bg-white justify-items-center p-5  w-[50%] mx-auto   gap-5'>

                  {logos.map((logo,index)=>(

                    <Image key={index} src={logo} height={50} width={50} alt='image'  className="hover:rotate-180 transition-transform duration-500"></Image>
                  ))}


                
                  

                </div>
            </main>
    </>
  )
}

export default Tools



