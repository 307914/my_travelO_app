const Category = require('../model/category.model');
const HotelModel = require('../model/hotel.model');

const categoryHandler = async (req, res) => {
  const { state } = req.query;
  console.log({ state });
  try {
    let hotels;
    if (state) {
      hotels = await Category.find({ category: state });
    } else {
      hotels = await Category.find({});
    }
    hotels
      ? res.status(200).json(hotels)
      : res.status(404).json({ message: 'data not found' });
  } catch (error) {
    console.log('error is in get category.router', error);
  }
};

module.exports = categoryHandler;
