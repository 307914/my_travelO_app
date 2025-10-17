
import { Star, StarFill } from 'react-bootstrap-icons'
import './price.css'
import { useDate } from '../../context';
import { DateSelector } from '../dateselector/dateselector';
import { Navigate, useNavigate } from 'react-router';


export const Price = ({ singleHotel }) => {
    const { price, rating, _id } = singleHotel;
    const { date, datedispatch } = useDate();
    const navigate = useNavigate();


    const handledate = (event) => {
        datedispatch({ type: "DATE", payload: event.target.value });
    }
    const handleprice = () => {
        navigate(`/payment/${_id}`);
    }

    return (
        <div className="price-container-single d-flex direction-column shadow">
            <div className=" d-flex">
                <p className='day-font d-flex  align-center'>
                    <span className="rupee">Rs. {price}</span> <span className='rating'>night</span>
                </p>
                <span className="star-container"><StarFill size={17} /> <span className='rating'>{rating}</span></span>

            </div>

            <div className='loc-container d-flex'>
                <div className='checkin '>
                    <label>Check In</label>
                    <DateSelector className="date-search" checkInType="in" />
                </div>
                <div className='checkout '>
                    <label>Check Out</label>
                    <DateSelector className="date-search" checkInType="out" />
                </div>
            </div>

            <div className='guests-container'>
                <p>GUESTS</p>
                {date <= 0 ? <input type="number" className="date-search" value={date} placeholder="addguests" onChange={handledate} /> : <span>{date} guests</span>}
            </div>

            <button className='btn-reserve' onClick={handleprice}>
                Reserve
            </button>
            <div className='price-checkout'>
                <div className='cal-container'>
                    <span>Rs. {price} X 2 nights</span>
                    <span>Rs. {price * 2}</span>
                </div>
                <div className='cal-container'>
                    <span>service fees</span>
                    <span>Rs. 200</span>
                </div>
                <span className='border-btm '></span>

                <div className='cal-container'>
                    <span>Total</span>
                    <span>Rs. {price * 2 + 200}</span>
                </div>

            </div>
        </div>
    )
}