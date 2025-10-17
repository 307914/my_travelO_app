
import { Search } from 'react-bootstrap-icons'
import './searchstaywithdate.css'
import { DateSelector } from '../dateselector/dateselector';
import { useCategory, useDate } from '../../context';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
export const SearchStayWithDate = () => {
    const [hotels, setHotels] = useState([]);
    const { destination, date, issearchopen, datedispatch } = useDate();
    const { state } = useCategory();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3500/api/gethotels/categories?category=${state}`);
                setHotels(data);
            } catch (error) {
                console.log("the error is in home", error);
            }
        })()
    }, [state])
    const handleclickfunction = () => {
        datedispatch({ type: "ISSEARCH" });
    }


    useEffect(() => {
        handleclickfunction();
    }, [])

    const handleDestination = (event) => {
        datedispatch({ type: "DESTINATION", payload: event.target.value });
    }


    const handleguests = (event) => {
        datedispatch({ type: "DATE", payload: event.target.value });

    }

    const handleClicked = (address) => {
        datedispatch({ type: "DESTINATION", payload: address });
    }

    const filteredData = hotels.filter(({ address, city, state, country }) =>
        address.toLowerCase().includes(destination?.toLowerCase()) ||
        city.toLowerCase().includes(destination?.toLowerCase()) ||
        country.toLowerCase().includes(destination?.toLowerCase()) ||
        state.toLowerCase().includes(destination?.toLowerCase())
    )

    const handlefunction = () => {
        datedispatch({ type: "IS_SEARCH_MODAL_CLOSE" });
        navigate(`/hotels/${destination}`);
    }

    return (
        <div className="destination-container d-flex align-center">
            <div className='destination-option absolute d-flex align-center'>
                <div className='location-con'>
                    <label className='label'>Where</label>
                    <input className="stay-input" placeholder=' enter location'
                        value={destination}
                        onChange={handleDestination}
                        onFocus={handleclickfunction}
                        autoFocus
                    />
                </div>

                <div className='location-con'>
                    <label className='label'>checkIn</label>
                    <DateSelector checkInType="in" />
                </div>

                <div className='location-con'>
                    <label className='label'>checkOut</label>
                    <DateSelector checkInType="out" />
                </div>

                <div className='location-con'>
                    <label className='label'>No of guests</label>
                    <input className="stay-input"
                        onChange={handleguests}
                        value={date}
                        placeholder=' 2' />
                </div>

                <div className='search-con' onClick={handlefunction}>
                    <Search size={18} className='search-btn' />
                    <span>Search</span>
                </div>
            </div>
            {issearchopen && <div className='search-container absolute'>
                {
                    filteredData && filteredData.map(({ address, city }) => (
                        <p className=' p-address' onClick={() => handleClicked(address)}>{address} ,{city}</p>
                    ))
                }

            </div>}
        </div>
    )
}