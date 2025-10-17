const express = require('express');

const dotenv = require('dotenv');
dotenv.config();
require('./dbconnection');
const hotelRouter = require('./routes/hotelimport.router');
const getHotels = require('./routes/hotel.router');
const categoryAdd = require('./routes/categoryimport.router');
const getCategory = require('./routes/category.router');
const createUser = require('./routes/user.router');
const singleRouter = require('./routes/singlehotel.router');
const whishlistRouter = require('./routes/whishlist.router');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('./errorhandler');

const app = express();
const PORT = 3500;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieparser());
app.use('/api/hotels', hotelRouter);
app.use('/api/gethotels', getHotels);
app.use('/api/categoryadd', categoryAdd);
app.use('/api/getCategory', getCategory);
app.use('/api/singlehotel', singleRouter);
app.use('/api/whishlist', whishlistRouter);

app.use('/user', createUser);

app.use(errorHandler);

app.listen(process.env.PORT || PORT, () => {
  console.log('server is  running');
});
