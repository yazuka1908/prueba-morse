const IllegalArgumentError = require("../exceptions/IllegalArgumentError.js")
const _MORSE_SERVICE = require('../services/MorseService.js')
const _HTTP_STATUS = require('../models/HttpStatus');

exports.decodeBits2Morse = function (req, res, next) {
    try {
        let message = _MORSE_SERVICE.decodeBits2Morse(req.body.text)
        res.status(_HTTP_STATUS.HTTP_STATUS.OK.statusCode).send({ 'message': message })
    } catch (error) {
        if (error instanceof IllegalArgumentError) {
            res.status(_HTTP_STATUS.HTTP_STATUS.BAD_REQUEST.statusCode).send({ error: 'You have entered an invalid input, check the api documentation' })
        } else {
            res.status(_HTTP_STATUS.HTTP_STATUS.INTERNAL_SERVER_ERROR.statusCode).send({ error: 'Critical error, contact the administrator' })
        }
    }
}

exports.translate2Human = function (req, res, next) {
    try {
        let message = _MORSE_SERVICE.translate2Human(req.body.text)
        console.log("translate2Human [message] ==>", message);
        res.status(_HTTP_STATUS.HTTP_STATUS.OK.statusCode).send({ 'message': message });
    } catch (error) {
        if (error instanceof IllegalArgumentError) {
            res.status(_HTTP_STATUS.HTTP_STATUS.BAD_REQUEST.statusCode).send({ error: 'You have entered an invalid input, check the api documentation' })
        } else {
            res.status(_HTTP_STATUS.HTTP_STATUS.INTERNAL_SERVER_ERROR.statusCode).send({ error: 'Critical error, contact the administrator' })
        }
    }
}

exports.translate2Morse = function (req, res, next) {
    try {
        let message = _MORSE_SERVICE.translate2Morse(req.body.text)
        res.status(_HTTP_STATUS.HTTP_STATUS.OK.statusCode).send({ 'message': message })
    } catch (error) {
        if (error instanceof IllegalArgumentError) {
            res.status(_HTTP_STATUS.HTTP_STATUS.BAD_REQUEST.statusCode).send({ error: 'You have entered an invalid input, check the api documentation' })
        } else {
            res.status(_HTTP_STATUS.HTTP_STATUS.INTERNAL_SERVER_ERROR.statusCode).send({ error: 'Critical error, contact the administrator' })
        }
    }
}