import React from 'react'
import { MapPreviewCard } from '../components/mapPreview';
import { useParams } from 'react-router-dom';
const Trace = () => {
    const {latitude, longitude} = useParams();

  return (
    <div className='w-full h-[85vh] flex flex-col items-center justify-center'>
        <MapPreviewCard longitude={latitude} latitude={longitude}/>
    </div>
  )
}

export default Trace