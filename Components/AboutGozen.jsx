import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Gozen from "@/public/gozen-logo.jpg"

function AboutGozen() {
  return (
    <>
            <main className='bg-blue-100 w-full py-10'>


                <div  className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 px-2 py-5 bg-white max-w-5xl mx-auto rounded-lg'>

                    <div className='w-full  lg:w-[450px]' data-aos="fade-right" data-aos-duration="2000">
                        <p className='font-bold text-xl py-5 lg:text-4xl '>What is <span className='text-blue-500'>GoZen?</span></p>

                        <p className='text-gray text-sm md:text-lg py-2'>
                            GoZen is an AI-powered sales and marketing suite that gives
                             you everything you need to grow your business—all in one platform.
                              Seamlessly connect your marketing, sales, and customer support to capture more leads, 
                            close deals faster, and deliver exceptional customer experiences.
                        </p>

                        <p className='text-gray text-sm md:text-lg py-2'>
                            Get a personalized demo to learn more about GoZen,
                             or get started with a full suite of free tools.
                        </p>

                        <div className='flex justify-center items-center gap-5'>

                            <Button className='bg-blue-500 px-4 py-2 lg:px-8 lg:py-5'>Get a Demo</Button>
                            <Button className='text-blue-500 bg-white border-blue-500 px-4 py-2 lg:px-8 lg:py-5' >Get Started for free</Button>

                        </div>
                    </div>


                    <div className='bg-blue-600 w-full py-10  lg:w-[450px] flex lg:items-start justify-center items-center  rounded-2xl' data-aos="fade-left" data-aos-duration="2000">

                        <Image src={Gozen} height={250} width={250} className='rounded-lg' alt='logo'></Image>

                        
                    </div>

                </div>


            </main>
    </>
  )
}

export default AboutGozen