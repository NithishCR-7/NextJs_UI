import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from 'next/image'
import Horn from '@/public/horn.webp'
import Voice from "@/public/voice.webp"
import Store from "@/public/store.webp"
import Increase from "@/public/increase.webp"

function GozenDo() {
  return (
    <>

    <div className='bg-white py-10'>

    <div className='text-center m-5' data-aos="fade-right" data-aos-duration="2000">
        <p className='text-2xl font-bold'>What <span className='text-blue-500'>GoZen</span>  can do for you</p>
        <p className='text-gray-500 m-2'>GoZen has everything you need to increase your revenue. Don’t just take our words,
             we’ll let the product do the talking.</p>
    </div>

    <main className='grid  grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 justify-items-center gap-5 px-2'>

                <Card className='w-full sm:w-[250px]' data-aos="fade-right" data-aos-duration="2000">
       
                    <CardContent>

                        <div className='w-full h-[150px] flex justify-center items-center bg-blue-600'>

                        <Image  src={Horn} height={50} width={50} alt='image'></Image>
                        </div>
                        <h1 className='font-bold text-2xl py-2'>Market Engine</h1>   
                        <p className='text-gray-600 '>From content creation to audience building, 
                            GoZen’s AI-powered marketing products
                             help you generate leads and automate marketing.
                        </p>
                        <hr  className='text-gray-500 py-2'/>

                        <p className='font-bold  py-2'>Popular Features</p>

                        <ul >
                            <li className='py-2'>Marketing automation</li>
                            <li className='py-2'>Gamified lead generation</li>
                            <li className='py-2'>Automated review management</li>
                        </ul>
                    </CardContent>
                   
        </Card>

        {/* card2 */}


                     <Card className='w-full sm:w-[300px]' data-aos="fade-up" data-aos-duration="2000">
       
                    <CardContent>

                        <div className='w-full h-[150px] flex justify-center items-center bg-blue-600'>

                        <Image  src={Increase} height={50} width={50} alt='image'></Image>
                        </div>
                        <h1 className='font-bold text-2xl py-2'>Market Engine</h1>   
                        <p className='text-gray-600 '>From content creation to audience building, 
                            GoZen’s AI-powered marketing products
                             help you generate leads and automate marketing.
                        </p>
                        <hr  className='text-gray-500 py-2'/>

                        <p className='font-bold  py-2'>Popular Features</p>

                        <ul >
                            <li className='py-2'>Marketing automation</li>
                            <li className='py-2'>Gamified lead generation</li>
                            <li className='py-2'>Automated review management</li>
                        </ul>
                    </CardContent>
                   
        </Card>


    {/* card3 */}

                 <Card className='w-full sm:w-[300px]' data-aos="fade-up" data-aos-duration="2000">
       
                    <CardContent>

                        <div className='w-full h-[150px] flex justify-center items-center bg-blue-600'>

                        <Image  src={Voice} height={50} width={50} alt='image'></Image>
                        </div>
                        <h1 className='font-bold text-2xl py-2'>Market Engine</h1>   
                        <p className='text-gray-600 '>From content creation to audience building, 
                            GoZen’s AI-powered marketing products
                             help you generate leads and automate marketing.
                        </p>
                        <hr  className='text-gray-500 py-2'/>

                        <p className='font-bold  py-2'>Popular Features</p>

                        <ul >
                            <li className='py-2'>Marketing automation</li>
                            <li className='py-2'>Gamified lead generation</li>
                            <li className='py-2'>Automated review management</li>
                        </ul>
                    </CardContent>
                   
        </Card>


    {/* card4 */}

                 <Card className='w-full sm:w-[300px]'data-aos="fade-left" data-aos-duration="2000">
       
                    <CardContent>

                        <div className='w-full h-[150px] flex justify-center items-center bg-blue-600'>

                        <Image  src={Store} height={50} width={50} alt='image'></Image>
                        </div>
                        <h1 className='font-bold text-2xl py-2'>Market Engine</h1>   
                        <p className='text-gray-600 '>From content creation to audience building, 
                            GoZen’s AI-powered marketing products
                             help you generate leads and automate marketing.
                        </p>
                        <hr  className='text-gray-500 py-2'/>

                        <p className='font-bold  py-2'>Popular Features</p>

                        <ul >
                            <li className='py-2'>Marketing automation</li>
                            <li className='py-2'>Gamified lead generation</li>
                            <li className='py-2'>Automated review management</li>
                        </ul>
                    </CardContent>
                   
        </Card>

    </main>
</div>

    </>
  )
}

export default GozenDo