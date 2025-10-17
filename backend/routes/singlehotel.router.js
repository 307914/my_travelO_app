const express = require('express');
const singlehotelHandler = require('../controllers/singlehotelcontroller');

const router = express.Router();

router.get('/:id', singlehotelHandler);

module.exports = router;
