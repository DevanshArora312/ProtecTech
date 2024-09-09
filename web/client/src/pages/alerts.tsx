import React, { useEffect } from 'react'
import AlertTable from '../components/alertTable'
import { FullDuplexConnection, socket } from '../socket'
export const Alerts = () => {
  return (
    <div className='w-full flex fex-col items-center justify-center'>
      <AlertTable/>
    </div>
  )
}
