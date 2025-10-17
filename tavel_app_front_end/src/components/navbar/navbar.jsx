import { BoxArrowRight, Cart, Person, Search } from 'react-bootstrap-icons';
import './navbar.css';
import { useAuth, useCategory, useDate } from '../../context';
import { Link, Navigate, useNavigate } from 'react-router';
import { useApi } from '../../useApi';
import { END_POINTS, REQUEST_TYPES } from '../../axiosInstance';
export const Navbar = () => {
  const { single, setSingle } = useCategory();
  const { makeRequest } = useApi(END_POINTS.USER.LOGOUT, REQUEST_TYPES.POST);
  const {
    ismodalopen,
    checkInDate,
    date,
    checkOutDate,
    destination,
    datedispatch,
  } = useDate();
  const navigate = useNavigate();

  const { isAuthOpen, authDispatch } = useAuth();

  const handlesearch = () => {
    datedispatch({ type: 'IS_SEARCH_MODAL' });
  };

  const handleauth = () => {
    authDispatch({
      type: "IS_AUTHOPEN"
    })
  }
  const handlelogout = () => {
    makeRequest();
  }
  const handlewishlist = () => {
    navigate('/protected/wishlist');
  }
  return (
    <header className='heading d-flex gap-bolder align-center'>
      <h1 className='heading-title'>
        <Link className='travel' to='/'>
          TravelO
        </Link>
      </h1>

      <div
        className='form-container search-location-container d-flex align-items-center shadow'
        onClick={handlesearch}
      >
        <span className='form-option'>{destination || 'Any Where'}</span>
        <span className='border-right-1px'></span>
        <span className='form-option'>
          {checkInDate && checkOutDate
            ? `${checkInDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
            })} -${checkOutDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
            })}`
            : 'Any week'}
        </span>
        <span className='border-right-1px'></span>
        <span className='form-option'>
          {date && date > 0 ? `${date} guests` : `Add guests`}
        </span>
        <span className='search'>
          <Search size={18} className='search-btn' />
        </span>
      </div>
      <div className='wishlist-logout-container'>
        <div onClick={handlewishlist}>
          <Cart size={25} />
        </div>

        <button style={{ border: "none" }} className="travel-logout-container" onClick={handlelogout}>
          <BoxArrowRight size={25} />
        </button>

        <nav className='nav' onClick={handleauth}>
          <div className='nav-con'>
            <span className='material-symbols-outlined profile-option menu cursor-pointer'>
              menu
            </span>
            <Person className='profile-option person cursor-point'></Person>
          </div>
        </nav>
      </div>
    </header>
  );
};
