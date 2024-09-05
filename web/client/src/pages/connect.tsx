import React from 'react'
import { CCTVcard } from '../components/cctvCard';
import { AskAiCard } from '../components/AskAi';
export const Connect = () => {
  const port = 5000
  const ip = '0.0.0.0';
  return (
    <div className='w-full'>
      <div className='w-full flex flex-row items-center justify-center gap-10'>
        <CCTVcard ip={ip} port={port}/>
        <AskAiCard />
      </div>
    </div>
  )
}
