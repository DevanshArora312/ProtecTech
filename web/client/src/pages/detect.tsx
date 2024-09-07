import React from 'react'
import { useParams } from 'react-router-dom';
import Radar from '../components/radar';
const Detect = () => {
    const {latitude, longitude} = useParams();

    return (
        <div className='flex flex-col h-full items-center justify-center'>
            <Radar/>
        </div>
    )
}

export default Detect