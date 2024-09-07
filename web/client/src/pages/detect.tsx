import React from 'react'
import { useParams } from 'react-router-dom'
const Detect = () => {
    const {latitude, longitude} = useParams();

    return (
        <div>Detect</div>
    )
}

export default Detect