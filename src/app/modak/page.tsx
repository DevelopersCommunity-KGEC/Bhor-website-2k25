'use client'
import React,{useState} from 'react'

function page() {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <div className='w-full h-screen flex justify-center items-center bg-green-400 gap-10'>
        <div className='w-[40%] h-[600px] flex justify-center items-center bg-green-400' onClick={() => setOpen(!open)}>
            <div className={`h-[100%] w-[50%] bg-blue-200 rounded-tl-full border-2 border-zinc-600 origin-left transition-transform duration-1200 ease-in-out ${
          open ? "rotate-y-[80deg]" : "rotate-y-0"
        }`}
        style={{ transformStyle: "preserve-3d" }} >

            </div>
            <div className={`h-[100%] w-[50%] bg-blue-200 rounded-tr-full border-2 border-zinc-600 origin-right transition-transform duration-1200 ease-in-out ${
          open ? "rotate-y-[-80deg]" : "rotate-y-0"
        }`}
        style={{ transformStyle: "preserve-3d" }}>

            </div>
        </div>
        <div className='w-[40%] h-[600px] flex justify-center items-center bg-blue-600'>xyz</div>
      </div>
    </div>
    
  )
}
export default page