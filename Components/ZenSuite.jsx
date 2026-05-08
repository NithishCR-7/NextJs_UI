import React from 'react'
import { Button } from './ui/button'

function ZenSuite() {
  return (
    <>
        <main className='bg-white w-full py-10 px-2'>


                {/* <div className='grid  grid-cols-1 md:grid-cols-2 justify-items-center bg-white   w-full lg:w-[70%] rounded-lg mx-auto gap-5'> */}
                   
  <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center bg-blue-100 w-[90%] lg:w-[70%] rounded-lg mx-auto gap-5 p-5 md:py-10'>  

                    <div className='w-full lg:w-[400px] h-auto p-5' data-aos="fade-right" data-aos-duration="2000" >
                        <p className='font-bold text-4xl'><span className='text-blue-700'>Zen</span> Suite</p>

                        <p className='text-[15px]  md:text-xl py-5'>
                            The starter version of every GoZen product is bundled into a single suite,
                             designed for businesses of all sizes. Capture leads, nurture them, provide AI-powered support,
                             and engage them through targeted outreach–all using one unified platform.
                        </p>

                        <Button className='text-white font-bold text-xl bg-blue-700 w-full text-center py-5'>Try Bundle for Free</Button>

                        
                    </div>

                    <div className='lg:w-[400px] w-full h-auto  flex flex-col gap-5 justify-evenly items-center' data-aos="fade-left" data-aos-duration="2000">

                      <div className='flex justify-evenly items-center gap-10' >
                        <span data-aos="fade-left" data-aos-duration="2000" className='bg-white p-5 rounded-lg'>📢</span>
                        <span data-aos="fade-up" data-aos-duration="2000"  className='bg-white p-5 rounded-lg'>📢</span>
                        <span data-aos="fade-left" data-aos-duration="2000" className='bg-white p-5 rounded-lg'>📢</span>
                     </div>

                     <div className='flex justify-evenly items-center gap-10'>

                        <span  data-aos="fade-left" data-aos-duration="2000" className='bg-white p-5 rounded-lg'>📧</span>
                        <span data-aos="fade-up" data-aos-duration="2000" className='bg-white p-5 rounded-lg'>📧</span>
                        <span data-aos="fade-left" data-aos-duration="2000" className='bg-white p-5 rounded-lg'>📧</span>
                    </div>

                    <div className='flex justify-evenly items-center gap-10'>

                        <span  data-aos="fade-left" data-aos-duration="2000" className='bg-white p-5 rounded-lg'>📊</span>
                        <span data-aos="fade-up" data-aos-duration="2000" className='bg-white p-5 rounded-lg'>📊</span>
                        <span data-aos="fade-left" data-aos-duration="2000" className='bg-white p-5 rounded-lg'>📊</span>
                    </div>

                        

                    </div>

                </div>

        </main>
    </>
  )
}

export default ZenSuite