import React from 'react'
import pic from "/pic.jpg"
export default function UserIdColumn() {
    return (
        <div className='absolute  bottom-[0] w-[100%] h-[69px] border-t-1 border-[#334155] '>
            <div className='p-[16px] flex items-center gap-3 flex justify-between'>
                <div className='flex gap-3'>
                    <img src={pic} className='w-[32px] h-[32px] rounded-full' alt="" />
                    <div>
                        <p className='text-[#FFFFFF] text-sm'>John Developer</p>
                        <p className='text-[#94A3B8] text-xs'>john@example.com</p>
                    </div>
                </div>
                <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#E5E7EB" class="bi bi-three-dots-vertical"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path> </g></svg>
            </div>
        </div>
    )
}
