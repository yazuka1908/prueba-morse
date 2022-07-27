const express = require('express');
const router = express.Router();
const _MORSE_CONTROLLER = require('../controllers/MorseController');

router
    .post('/decodeBits', _MORSE_CONTROLLER.decodeBits2Morse)
    .post('/2human', _MORSE_CONTROLLER.translate2Human)
    .post('/2morse', _MORSE_CONTROLLER.translate2Morse);

module.exports = router;