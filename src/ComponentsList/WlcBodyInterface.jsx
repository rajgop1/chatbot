import React from 'react'
import Frame1 from '/Frame1.png'
import Frame2 from '/Frame2.png'
import Frame3 from '/Frame3.png'
import Frame4 from '/Frame4.png'
import Frame from '/Frame.png'
import Button from '/button.png'
export default function WlcBodyInterface() {
  return (
    <div className='flex justify-center items-center border-t border-[#334155] bg-[#0F172A] w-full'>
      <div className='w-[672px] flex flex-col  items-center gap-[23px] bg-[#0F172A] mt-[423px] mb-[423px]'>
        <img src={Frame} className='w-[75px] h-[60px]' alt="" />
        <p className=''>
          Welcome to DevChat AI
        </p>
        <p className='w-[583px] text-base text-center text-[#94A3B8]'>
          Your intelligent coding companion. Ask questions, debug code, or discuss software architecture - I'm here to help!
        </p>



        <section className='grid grid-cols-2 gap-[20px] w-full'>
          <button className='rounded-lg flex flex-col gap-[9px] bg-[#1E293B] text-white '>
            <section className='flex items-center gap-2 p-[26px_16px_0px_16px] text-left'>
              <img src={Frame4} className='w-[20] h-[16px]' alt="" />
              <p className='text-normal'>Debug Code</p>
            </section>
            <p className=' p-[0px_16px_26px_16px] text-sm text-[#CBD5E1]'>
              "Help me debug this React useEffect hook..."
            </p>
          </button>


          <button className='rounded-lg flex flex-col gap-[9px] bg-[#1E293B] text-white '>
            <section className='flex items-center gap-2 p-[26px_16px_0px_16px] text-left'>
              <img src={Frame1} className='w-[20] h-[16px]' alt="" />
              <p className='text-normal'>Debug Code</p>
            </section>
            <p className=' p-[0px_16px_26px_16px] text-sm text-[#CBD5E1]'>
              "Help me debug this React useEffect hook..."
            </p>
          </button>

          <button className='rounded-lg flex flex-col gap-[9px] bg-[#1E293B] text-white '>
            <section className='flex items-center gap-2 p-[26px_16px_0px_16px] text-left'>
              <img src={Frame2} className='w-[20] h-[16px]' alt="" />
              <p className='text-normal'>Debug Code</p>
            </section>
            <p className=' p-[0px_16px_26px_16px] text-sm text-[#CBD5E1]'>
              "Help me debug this React useEffect hook..."
            </p>
          </button>

          <button className='rounded-lg flex flex-col gap-[9px] bg-[#1E293B] text-white '>
            <section className='flex items-center gap-2 p-[26px_16px_0px_16px] text-left'>
              <img src={Frame3} className='w-[20] h-[16px]' alt="" />
              <p className='text-normal'>Debug Code</p>
            </section>
            <p className=' p-[0px_16px_26px_16px] text-sm text-[#CBD5E1]'>
              "Help me debug this React useEffect hook..."
            </p>
          </button>
        </section>


        <section className='flex justify-between items-center w-full rounded-lg  h-[58px] mt-[16px] border border-[#334155] bg-[#1E293B] ' >
          <input className='p-[0_21px_0_10px]' type="text" placeholder="Send a message" />
          <img src={Button} className='w-[16px] h-[16px] mr-[21px]' alt="" />
        </section>

      </div>
    </div>
  )
}

