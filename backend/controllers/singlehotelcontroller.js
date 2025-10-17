const HotelModel = require('../model/hotel.model');

const singlehotelHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await HotelModel.findById(id);
    if (!data) {
      res.status(404).json({ message: 'hotel not found' });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.log('the error is in single hotel', error);
  }
};

module.exports = singlehotelHandler;
