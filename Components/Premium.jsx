import React from 'react'
import Image from 'next/image'
import Gozen from '@/public/gozen-logo.jpg'
import Plan from "@/public/gozen-price.webp"


import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Premium() {
  return (
    <>

        <main className='bg-blue-950 w-full py-10 '>
            <div  className='text-center' data-aos="fade-right" data-aos-duration="2000">
                <p className='text-white font-bold text-xl' >One single comprehensive suite</p>
                <p className='text-white font-bold text-3xl py-3'>120% increase in revenue with 30% of your monthly spending</p>
            </div>


         
            <div className=' bg-blue-100 rounded-lg  w-[95%] md:w-[85%] lg:[70%] p-10 mx-auto my-5 flex flex-col lg:flex-row justify-center items-center gap-5'>

                    <Image src={Plan} height={350} width={350} alt='plan'  className='w-[250px] md:w-[320px] lg:w-[350px] h-auto' data-aos="fade-right" data-aos-duration="2000"></Image>


                     <Card className='w-[100%] md:w-[60%] h-[400px] lg:w-[350px] lg:h-[400px] flex flex-col overflow-hidden' data-aos="fade-left" data-aos-duration="2000" >

                            
                            <CardContent>

                                    <p><span className='font-bold text-4xl'>$99</span>/month</p>
                                    <p className='text-blue-800'>with Gozen image</p>
                                 

                            </CardContent>

                            <CardFooter className='bg-blue-600 p-0 flex-1 '>
                                <div className='flex flex-1 justify-center items-center'>
                                    <Image src={Gozen} height={350} width={200} alt='gozen' className='w-[120px] md:w-[160px] lg:w-[200px] h-auto rounded-lg'></Image>
                                </div>
                            </CardFooter>
                     </Card>

                    

            </div>
        
        </main>
    
    
    </>
  )
}

export default Premium