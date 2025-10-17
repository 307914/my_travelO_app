const HotelModel = require('../model/hotel.model');

const SearchHotel = async (req, res) => {
  try {
    const destination = req.query.destination;
    console.log('the destionation is', destination);

    const data = await HotelModel.find({ city: destination });

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'no data found' });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = SearchHotel;
