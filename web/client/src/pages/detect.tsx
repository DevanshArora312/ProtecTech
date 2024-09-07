import React from 'react'
import { useParams } from 'react-router-dom';
import Radar from '../components/radar';
import { NearbyCard } from '../components/nearby';
const Detect = () => {
    const {latitude, longitude} = useParams();

    return (
        <div className='flex flex-row h-screen gap-16 items-center justify-center'>
            <div>
                <Radar/>
            </div>
            <div>
                <NearbyCard/>
            </div>
        </div>
    )
}

export default Detect