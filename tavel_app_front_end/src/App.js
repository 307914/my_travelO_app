import { Route, Routes } from 'react-router';
import './App.css';

import { Home } from './pages/home/home';
import { SearchResult, SingleHotel, Wishlist } from './pages';
import { AuthModal, Hotel } from './components';
import { Filter } from './components/filter';
import axios from 'axios';
import { useEffect } from 'react';
import { axiosInstance, END_POINTS } from './axiosInstance';
import { useApi } from './useApi';
import ProtectedComponent from './propected';
import { Payment } from './payment/payment';
import { OrderSummary } from './pages/ordersummary/ordersummary';
import Toast from './toast';

function App() {
  const { makeRequest } = useApi(END_POINTS.USER.LOGINVIACOOKIE);
  useEffect(() => {
    makeRequest();
  }, []);
  return (
    <>
      <Toast />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/hotels/:name/:category/:id/reserve'
          element={<SingleHotel />}
        ></Route>
        <Route path='/hotels/:destination' element={<SearchResult />}></Route>
        <Route path='/filter' element={<Filter />} />
        <Route path='/login' element={<AuthModal />}></Route>
        <Route path='/protected' element={<ProtectedComponent />}>
          <Route path='wishlist' element={<Wishlist />}></Route>
        </Route>
        <Route path='/payment/:id' element={<Payment />}></Route>
        <Route path='/order-summary/:id' element={<OrderSummary />}></Route>
      </Routes>
    </>
  );
}

export default App;
