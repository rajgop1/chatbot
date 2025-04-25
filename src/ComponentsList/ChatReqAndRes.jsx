import React from 'react'
import Frame from '/Frame.png'
import div from '/div.png'
import pic from '/pic.jpg'
import TypeMssg from './TypeMssg'
export default function ChatReqAndRes() {
  return (
    <div className='relative flex flex-col text-[16px] w-[73%] font-normal border border-[#334155]  text-white bg-[#0F172A]'>
      <div className=' flex gap-2 p-[16px]'>
        <img src={div} className='w-[32px] h-[32px]' alt="" />
        <p className='text-[#D1D5DB] bg-[#1F2937] pt-[18px] pb-[18px] w-full pl-[16px] pr-[16px] rounded-lg'>
          Hello! I'm your AI development assistant. How can I help you today?
        </p>
      </div>


      <div className='flex mr-[48px] ml-[112px]  gap-2 '>
        <p className='text-[#E5E7EB] justify-end bg-[#4F46E5] pt-[18px] pb-[18px] w-full pl-[16px] pr-[16px] rounded-lg '>
          Can you help me optimize this React component for better performance?
        </p>
        <img src={pic} className='w-[32px] h-[32px] rounded-full' alt="" />
      </div>
      <TypeMssg />
    </div>
  )
}
