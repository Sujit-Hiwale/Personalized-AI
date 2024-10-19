const express = require('express');
const {
  getAlphabetAdventure,
  getDailyChallenge,
} = require('../controllers/adventureController');

const router = express.Router();

router.get('/alphabet-adventure', getAlphabetAdventure);
router.get('/daily-challenge', getDailyChallenge);

module.exports = router;
