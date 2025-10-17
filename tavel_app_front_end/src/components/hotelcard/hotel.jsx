import { BookmarkCheck, HeartFill, StarFill } from 'react-bootstrap-icons'
import './hotel.css'
import { useLocation, useNavigate, useParams } from 'react-router'
import { useCategory, useDate, useUserdata } from '../../context';
import { useEffect } from 'react';
import { useApi } from '../../useApi';
import { END_POINTS, REQUEST_TYPES } from '../../axiosInstance';
let isPresentItem;
export const Hotel = ({ hotel }) => {
    const { makeRequest } = useApi(END_POINTS.WISHLIST.ADDTOWISHLIST, REQUEST_TYPES.POST);
    const { makeRequest: makerequestRemove } = useApi(END_POINTS.WISHLIST.REMOVEFROMWISHLIST, REQUEST_TYPES.POST);
    const navigate = useNavigate();
    const { order, datedispatch } = useDate();

    const { userdata, isOpenWishlist, setIsOpenWishlist } = useUserdata();
    const { pathname } = useLocation()
    const { name, _id, address, state, rating, category } = hotel
    const isPresent = userdata?.wishlist?.find((prod) => prod._id === _id);


    const handlehotelcard = () => {
        navigate(`/hotels/${name}/${category}/${_id}/reserve`)
    }
    const handleheart = async () => {
        if (userdata) {
            isPresentItem = userdata?.wishlist?.some((prod) => prod._id === _id);
            if (isPresentItem) {
                await makerequestRemove(hotel);
                setIsOpenWishlist(false);
            }
            else {
                await makeRequest(hotel);
                setIsOpenWishlist(true);
            }
        }
        else {
            navigate('/login');
        }
    }
    return (
        <div className="relative card-container cursor-pointer shadow">
            <div className='product' onClick={handlehotelcard}>
                <img className="img" alt="header"
                    src={hotel?.image} />
                <div className='text-container'>
                    <span className='desc'>
                        <span className="city-name">{address},{state}</span>
                        <span className='rating'><StarFill /> <span>{rating}</span></span>
                    </span>
                    <p className='view'>{name}</p>
                    <p className='rs'>₹{hotel?.price} <span className="night">night</span></p>
                    {order ? <span><BookmarkCheck size={20} /></span> : <></>}
                </div>
            </div>
            <div className='absolute heart'>
                <button className={` ${isPresent ? "selected" : ""} button btn-wishlist  d-flex align-center `} onClick={handleheart}>
                    <span>
                        <HeartFill size={25} />
                    </span>
                </button>
            </div>
        </div>
    )
}
