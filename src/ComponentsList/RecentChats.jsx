import React from 'react'
import Button from '@mui/material/Button'
export default function RecentChats() {
  return (
    <div>
      <div>
        <Button  variant="contained" sx={{
            backgroundColor: '#4F46E5',
            color: 'white',
            width:'223px',
            height: '48px',
            fontSize:"16px",
            fontWeight: '400',
            margin:'16px'
        }}>+ New Chat</Button>
    </div>

      <div className='w-full flex-1'>
        <div className='p-[8px] flex-1'>
          <h1 className='font-normal text-sm text-[#9CA3AF] p-[8px]'>Recent Chats</h1>


          <div className='flex flex-col w-[223px] p-[8px] '>
            <h2 className='font-normal text-sm   text-[#D1D5DB] '>
              API Intergration Help
            </h2>
            <time className='text-xs   font-normal text-[#6B7280]'>
              Yesterday
            </time>
          </div>

          <div className='flex flex-col w-[223px] p-[8px] '>
            <h2 className='font-normal text-sm text-[#D1D5DB]'>
              React Component Debug
            </h2>
            <time className='text-xs font-normal text-[#6B7280]'>
              2 days ago
            </time>
          </div>
        </div>

      </div>
    </div>
  )
}
