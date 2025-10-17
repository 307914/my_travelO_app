const express = require('express');
const {
  signupHandler,
  loginHandler,
  loginviacookie,
  addToWishlist,
  removeFromwishlist,
  logout,
} = require('../controllers/user.controller');
const authMiddleware = require('../middleware/authmiddleware');

const router = express.Router();

router.post('/signup', signupHandler);

router.post('/login', loginHandler);

router.get('/login', loginviacookie);

router.post('/logout', logout);
router.post('/removefromwishlist', authMiddleware, removeFromwishlist);

router.post('/addtowishlist', authMiddleware, addToWishlist);
module.exports = router;
