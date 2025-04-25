import React from 'react'
import Button from '@mui/material/Button'
export default function () {
  return (
    <div>
      <div>
        <Button  variant="contained" sx={{
            backgroundColor: '#4F46E5',
            color: 'white',
            width:'255px',
            height: '48px',
            fontSize:"16px",
            fontWeight: '400',
            margin:'16px'
        }}>+ New Chat</Button>
    </div>
         <p className='p-[14px_0_14px_8px] text-[#94A3B8]'>No chat history yet</p>
    </div>
  )
}
