"use client";

import React from 'react'
import Image from 'next/image'

const Carousel = () => {
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
        <div>
            <Image 
                src="/VillageScene.jpg"
                alt="Village Scene"
                fill
                className=''
            />
        </div>
      <div className='relative top-60 left-30 flex gap-10 z-50'>
        <div>
            <Image 
                src="/WomanWorking.jpg"
                alt="Woman Working"
                width={400}
                height={600}
            />
        </div>
        <div>
            <Image 
                src="/WomanWorking.jpg"
                alt="Woman Working"
                width={400}
                height={600}
            />
        </div>
      </div>
    </div>
  )
}

export default Carousel
