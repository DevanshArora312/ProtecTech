import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import Radar from '../components/radar';
import { NearbyCard } from '../components/nearby';

enum gender {
    "Male",
    "Female",
}

interface user{
    firstname: string,
    lastname: string,
    email: string,
    mobile: string,
    image: string,
    bookmarkedContact: string[],
    age: number,
    gender: gender,
    isEmployed: boolean,
    employer: string,
    occupation: string,
    maritalStatus: boolean,
    criminalBackground: boolean
}

const Detect = () => {
    const {latitude, longitude} = useParams();

    const numLatitude = Number(latitude);
    const numLongitude = Number(latitude);

    const [users, setUsers] = useState<user[]>([]);
    
    return (
        <div className='flex flex-row h-[85vh] gap-16 items-center justify-center'>
            <div>
                <Radar distance={5} longitude={numLongitude} latitude={numLatitude} setUsers={setUsers}/>
            </div>
            {
                users.length > 0 && 
                <div>
                    <NearbyCard/>
                </div>
            }
        </div>
    )
}

export default Detect