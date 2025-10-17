import { useEffect, useState } from 'react';
import { useDate } from '../../context';
import './ordersummary.css';
import { Link, useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { Hotel, Navbar } from '../../components';
export const OrderSummary = () => {
    const { datedispatch } = useDate();
    const navigate = useNavigate();
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
    useEffect(() => {
        datedispatch({
            type: "ORDER"
        })
        datedispatch({
            type: "CLEAR_DATES"
        })
    }, [])

    const handleshopingreturnbtn = () => {
        navigate('/');
    }
    return (
        <div>
            <Navbar />
            <h1 className="booked-tag">Bookings</h1>
            <div className='hotel-div'><Hotel hotel={singleHotel} /></div>
            <button onClick={handleshopingreturnbtn} className='button btn-shoping'>
                continue to shoping
            </button>
        </div>
    )
}