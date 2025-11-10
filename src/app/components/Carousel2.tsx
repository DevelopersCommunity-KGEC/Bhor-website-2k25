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
    </div>
  )
}

export default Carousel
