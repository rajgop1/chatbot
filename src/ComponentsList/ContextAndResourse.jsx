import React from 'react'
import Vector from "/Vector.png"
import { Height } from '@mui/icons-material'

export default function ContextAndResourse() {
  return (
    <div className=' font-normal flex-col text-sm  justify-center  h-screen  w-[17.5%] border-t border-r border-[#334155]  '>
      <h1 className='text-[#D1D5DB] p-[18px_16px_18px_16px]'>Context & Recources</h1>
      <div className='m-[16px] text-[#D1D5DB] flex flex-col gap-[8px] bg-[#374151] rounded-lg p-[12px]'>
        <div>
          <h2 className=''>
            Active Framework
          </h2>
        </div>


        <div className='flex gap-1   items-center text-[#818CF8]'>
          <img src={Vector} srx={{
            width: '16px',
            Height: '16px'
          }} alt="" />
          <p className=' '>
            React 18.2.0
          </p>
        </div>


      </div>


      <div className='m-[16px] text-[#D1D5DB] flex flex-col gap-[8px] bg-[#374151] rounded-lg p-[12px]'>

        <h2 className=''>
          Dependencies
        </h2>
        <div className='flex flex-col gap-1 text-[#9CA3AF] '>
          <p className=' text-xs'>
          react-router-dom@6.8.1
          </p>
          <p className=' text-xs'>
          @mui/material@5.11.8
          </p>
          <p className=' text-xs'>
          redux@4.2.1
          </p>
          
        </div>
      </div>

    </div >
  )
}
