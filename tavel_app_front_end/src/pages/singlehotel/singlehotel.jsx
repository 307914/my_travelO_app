import { useParams } from 'react-router'
import './singlehotel.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { HotelDetails, HotelImages, Navbar, Price } from '../../components';
import { useCategory } from '../../context';

export const SingleHotel = () => {
    const { id } = useParams();
    const [singleHotel, setSingleHotel] = useState({});

    useEffect(() => {
        (async () => {

            try {
                const { data } = await axios.get(`http://localhost:3500/api/singlehotel/${id}`);
                setSingleHotel(data);

            } catch (error) {
                console.log("error is in singlehotel", error);
            }
        })()

    }, [id])
    const { name, city } = singleHotel;
    return (
        <>
            <Navbar />
            <main className='main-container-hotel'>
                <p className='p-name'>{name}, {city}</p>
                <HotelImages singleHotel={singleHotel} />
                <div className='d-flex details-data'>
                    <HotelDetails singleHotel={singleHotel} />
                    <Price singleHotel={singleHotel} />
                </div>
            </main>


        </>
    )
}