const express = require('express');
const HotelModel = require('../model/hotel.model');
const {
  hotelHandler,
  getHotelscategory,
} = require('../controllers/hotelcontroller');
const SearchHotel = require('../controllers/searchhotels');

const router = express.Router();

router.get('/', hotelHandler);

router.get('/categories', getHotelscategory);

router.get('/search', SearchHotel);

module.exports = router;
