const { find } = require('../model/hotel.model');
const usermodel = require('../model/user.model');
const { genToken, verifyToken } = require('../utils/jwtutil');
const { genpassword, verifypassword } = require('../utils/passwordutils');

const signupHandler = async (req, res) => {
  try {
    const { password, ...data } = req.body;
    data.password = await genpassword(password);
    const user = await usermodel.createuser(data);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'error creating a user' });
  }
};

/**
 *
 * @param {*} req
 * @param {import("express").Response} res
 */
const loginHandler = async (req, res) => {
  try {
    const { number, password } = req.body;
    const { password: hashed, ...user } = await usermodel.findUser(number);

    const isverified = await verifypassword(password, hashed);
    if (isverified) {
      const token = genToken(user);
      res.cookie('authToken', token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      });
      const newdata = user;
      res
        .status(200)
        .json({ success: true, message: 'logged in succesfully', newdata });
    } else {
      res.status(403).json({ message: 'invalid password' });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

/**
 *
 * @param {import('express').Request} req
 * @param {*} res
 */
const loginviacookie = async (req, res) => {
  try {
    const token = req.cookies.authToken;

    const data = verifyToken(token);

    const { number } = data;

    const newdata = await usermodel.findUser(number);
    res
      .status(200)
      .json({ success: true, message: 'logged in via cookie', newdata });
  } catch (error) {
    res.status(404).json({ message: 'cannot login. please login again!..' });
  }
};

const addToWishlist = async (req, res) => {
  try {
    const hotel = req.body;
    const data = res.locals.userdata;
    const newdata = await usermodel.addtowishlist(data.number, hotel);
    res
      .status(201)
      .json({ success: true, message: 'added to wishlist', newdata });
  } catch (error) {
    res.status(401).json({ message: 'cannot add to wishlist' });
  }
};

const removeFromwishlist = async (req, res) => {
  try {
    const hotel = req.body;
    const data = res.locals.userdata;
    const newdata = await usermodel.removefromwishlist(data.number, hotel);
    if (newdata) {
      res
        .status(201)
        .json({ success: true, message: 'removed from wishlist', newdata });
    } else {
      res.status(404).json({ message: 'cannot remove from wishlist' });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
/**
 *
 * @param {*} req
 * @param {import('express').Response} res
 */
const logout = async (req, res) => {
  res.clearCookie('authToken');
  res.locals.userdata = null;
  res.status(200).json({ success: true, message: 'logged out successfully' });
};
module.exports = {
  removeFromwishlist,
  addToWishlist,
  logout,
  signupHandler,
  loginviacookie,
  loginHandler,
};
