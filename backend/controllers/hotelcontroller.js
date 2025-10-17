const HotelModel = require('../model/hotel.model');

const hotelHandler = async (req, res) => {
  try {
    const data = await HotelModel.find({});
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(404).json({ message: 'no hotels found' });
  }
};

const getHotelscategory = async (req, res) => {
  try {
    const newcategory = req.query.category;
    console.log('the newcategory is', newcategory);
    const hotels = await HotelModel.find({ category: newcategory });
    if (hotels) {
      res.status(200).json(hotels);
    } else {
      res.status(404).json({ message: 'no hotels found' });
    }
  } catch (error) {
    res.status(500).json({ messsage: 'error is in gethotels' });
  }
};
module.exports = { hotelHandler, getHotelscategory };
