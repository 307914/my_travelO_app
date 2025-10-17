import { useEffect, useState } from 'react';
import { END_POINTS, REQUEST_TYPES } from '../../axiosInstance';
import { AuthModal, CategoryCard, Hotel, Navbar, SearchStayWithDate } from '../../components';
import InfiniteScroll from 'react-infinite-scroll-component'
import UseApi from '../../useApi';


import './hone.css'
import axios from 'axios';
import { useAuth, useCategory, useDate, useFilter } from '../../context';
import { Filter } from '../../components/filter';
import { CancelFiltered, HotelBedsAndRooms, HotelFilteredPrice, PropertyTypeData, RatingUtils } from '../../utils';
export const Home = () => {
  const [hasShowMore, setHasShowMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(16);
  const [testData, setTestData] = useState([]);
  const [hotels, setHotels] = useState([]);
  const { state, setState, single, setSingle } = useCategory();
  const { ismodalopen } = useDate();
  const { pricerange, isfilteropen, propertytype, iscancelable, ratingNumber, noOfBathrooms, noOfBeds, noOfBedrooms } = useFilter();

  const { isAuthOpen } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3500/api/gethotels/categories?category=${state}`);
        setTestData(data);
        setHotels(data ? data.slice(0, 16) : []);
      } catch (error) {
        console.log("the error is in home", error);
      }
    })()
  }, [state])

  const fetchMoreData = () => {
    if (hotels.length >= testData.length) {
      setHasShowMore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(hotels.concat(testData.slice(currentIndex, currentIndex + 16)));
        setCurrentIndex(prev => prev + 16);
      }
      else {
        setHotels([]);
      }
    }, 1000)
  }

  const hotelsfiltered = HotelFilteredPrice(hotels, pricerange);
  const hotelsBedsAndRooms = HotelBedsAndRooms(hotelsfiltered, noOfBathrooms, noOfBedrooms, noOfBeds)
  const propertyTypedata = PropertyTypeData(hotelsBedsAndRooms, propertytype);
  const ratingFiltereddata = RatingUtils(propertyTypedata, ratingNumber)
  const cancelfiltereddata = CancelFiltered(ratingFiltereddata, iscancelable);
  return (
    <div className='relative'>
      <Navbar />
      <CategoryCard />
      {hotels && hotels.length > 0 ? (
        <InfiniteScroll
          dataLength={hotels?.length}
          next={fetchMoreData}
          hasMore={hasShowMore}
          loader={hotels?.length > 0 && <h3 className='loading'>Loading...</h3>}
          endMessage={<p className='end-msg'>you have reached the limit</p>}
        >
          <main className='main-method'>
            {cancelfiltereddata && cancelfiltereddata.map((hotel) => <Hotel key={hotel._id} hotel={hotel} />)}
          </main>

        </InfiniteScroll>) : (<></>)}
      {ismodalopen && <SearchStayWithDate />}
      {isAuthOpen && <AuthModal />}
      {isfilteropen && <Filter />}
    </div>
  );
};
