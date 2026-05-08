import React from 'react'
import Image from 'next/image'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Stack1 from "@/public/stack1.webp"
import Stack2 from "@/public/stack2.webp"
import Stack3 from "@/public/stack3.webp"

function GrowthStack() {

        const cards = [

            {
                image:Stack1,

                bg:"bg-blue-500",
                
                title:"Subscribe to a single product or the bundle",
                desc:"Select a single product or the unified bundle according to your needs",
                animation:"fade-right"
            },

            {
                image:Stack2,
                 bg:"bg-blue-100",
                title:"Automate marketing, sales, and customer support",
                desc:"Scale your business by automating your marketing, inbound sales, and customer support tasks.",
                animation:"fade-up"
            },
            {
                image:Stack3,
                 bg:"bg-purple-300",
                title:"Crush your sales quota",
                desc:"Crush your sales quota with 3X more conversions. Crush your sales quota with 3X more conversions.",
                animation:"fade-left"
            }


        ]





  return (
    <>


    <main className='mx-auto my-10 bg-blue-50 w-full px-5 py-10'>

        <p className='text-center text-lg text-blue-600 pt-5' data-aos='fade-right' data-aos-duration="2000">How you can use GoZen</p>

        <p className='text-center text-4xl py-5'  data-aos='fade-right' data-aos-duration="2000">Your growth stack, <span className='text-blue-600'>Unified </span> </p>

    <div className='flex flex-col md:flex-row justify-evenly items-center  gap-5 '>

    {/* <div className='mx-auto grid px-2  grid-cols-1 gap-36 md:grid-cols-2 lg:grid-cols-3'> */}
    
        {cards.map((card,index)=>(

            //   <Card className={`lg:w-[400px] bg-${card.bg}`} key={index}>
            <Card className='lg:w-[300px] shadow-xl' key={index} data-aos={`${card.animation}`}>
            
            
            <CardContent>
              <Image className={`${card.bg} w-full`}  src={card.image} alt={card.title} />
                <p className=' text-xl font-extrabold px-2 py-4'>{card.title}</p>
                <p className='text-lg text-gray-600 px-2 py-4'>{card.desc}</p>

            </CardContent>
            
            </Card>
        ))}

    </div>

    </main> 
      
    </>
  )
}

export default GrowthStack