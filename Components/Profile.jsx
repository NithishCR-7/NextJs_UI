import React from 'react'
import { Button } from './ui/button'
import { FaStar } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import Gozen from "@/public/gozen-logo.jpg"
import Image from 'next/image';
import StarBucks from "@/public/startbucks.webp"
import Tesla from "@/public/tesla.jpg"
import Visa from "@/public/visa.jpg"
import Wallmart from "@/public/wallmart.webp"

function Profile() {
  return (
    <>
       <section className='mt-10'>

            <main className='flex flex-wrap flex-col md:flex-row justify-center items-center gap-10'>


                    <div className='flex flex-col justify-center items-start gap-y-5 w-full px-3 md:w-[40%]' data-aos="fade-right" >


                        <div className='font-extrabold text-2xl lg:text-4xl  md:leading-11'>
                            <p>
                                Join 
                                <span className='bg-blue-600   text-white p-2 mx-2 rounded-xl '>50,000+</span>
                                  companies driving exponential growth
                            </p>
                        </div>

                        <div className='font-bold font-sans text-sm md:text-xl'>
                            <p>
                                One suite for all your sales and marketing needs.
                                 GoZen offers a comprehensive AI-powered unified 
                                 suite of products for inbound growth, lead capturing,
                                  audience building, outreach, and building AI agents.
                            </p>
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-2'>

                            <Button className='text-white  bg-blue-600 p-3 md:py-7 md:px-10' > Try it for Free </Button>
                            <Button className='text-white  bg-blue-400 p-3 md:py-7 md:px-10'>Get a Demo</Button>
                            
                        </div>

                        <div className='flex justify-center items-center gap-2'>

                            
                                <div className='flex justify-center items-center gap-2'>
                                    <span className='bg-blue-200 text-blue-900 p-2 rounded-full'><FaStar /></span>
                                    <p>2,000+ 5 star Reviews</p>
                                </div>

                                <div className='flex justify-center items-center gap-2'>
                                    <span  className='bg-blue-200 text-blue-900 p-2 rounded-full'  ><FaCreditCard/></span>
                                    <p>No Credit card required</p>
                                </div>



                        </div>
                    </div>


                    <div className='w-full  md:w-[40%] shadow-2xl h-[100%] ' data-aos="fade-left">
                        <Image src={Gozen} alt='gozen'></Image>
                    </div>

                    

                        


            </main>

            <div className='text-center text-xl md:text-4xl font-bold mt-10' data-aos="fade-up" data-aos-duration="2000">
                40+ countries served. 50,000+ Businesses trust us.
            </div>


            <div className='flex flex-col md:flex-row justify-evenly items-center gap-5 mt-10' >

                <Image data-aos="fade-up" data-aos-duration="1000"  src={StarBucks} height={150} width={150} alt='starbucks'></Image>
                <Image  data-aos="fade-up" data-aos-duration="1500"   src={Tesla} height={150} width={150} alt='tesla'></Image>
                <Image  data-aos="fade-up" data-aos-duration="2000" src={Visa} height={150} width={150} alt='visa'></Image>
                <Image  data-aos="fade-up" data-aos-duration="2000" src={Wallmart} height={150} width={150} alt='wallmart'></Image>
                <Image  data-aos="fade-up" data-aos-duration="2000" src={StarBucks} height={150} width={150} alt='starbucks'></Image>

                 
            </div>

    </section>
    </>
  )
}

export default Profile