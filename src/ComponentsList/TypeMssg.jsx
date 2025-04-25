import React from 'react'
import button from '/button.png'
import Frame5 from '/Frame 5.png'
import button2 from '/button2.png'
export default function TypeMssg() {
    return (
        <div className='absolute bottom-[0] flex flex-col items-center  border-[#374151] border-t-1 w-[100%] gap-0'>
            <div className='w-[96.5%] mt-[17px] bg-[#1F2937]  text-[#D1D5DB] pt-[18px] pb-[18px] pl-[16px] pr-[16px] rounded-lg'>
                <input type="text" placeholder='Type a message...' />

                <img src={button} className='w-[20px] h-[20px] justify-self-end ' alt="" />
            </div>
            <div className='flex justify-between items-center w-[96.5%] pt-[8px] pb-[16px]  text-[#D1D5DB]  rounded-lg'>
                <div className='flex gap-2'>
                    <img src={Frame5} className='w-[12.25px] h-[14px]' alt="" />
                    <img src={button2} className='w-[17.5px] h-[14px]' alt="" />
                </div>
                <button className='text-[#6B7280]'>Press Enter to Send</button>
            </div>
        </div>
    )
}
