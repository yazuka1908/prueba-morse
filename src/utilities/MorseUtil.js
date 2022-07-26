const IllegalArgumentError = require("../exceptions/IllegalArgumentError.js");

const _PATTERN_VALIDATOR = {
    BIT: /^[01]+$/, // solo permite caracteres 0 y 1
    MORSE: /^[ \\.\\-]+$/, // solo permite caracteres espacio( ), punto(.), guion(-)
    HUMAN: /^[ A-Z0-9]+$/ // solo permite caracteres espacio( ), espacio(A-Z), numeros(0-9)
}

function validateInboundMessage(message, patternValidator) {
    if (message.length === 0) {
        throw new IllegalArgumentError('This message is empty');
    }
    if (!new RegExp(patternValidator).test(message)) {
        throw new IllegalArgumentError('This message contains invalid characters');
    }
}

module.exports = {
    _PATTERN_VALIDATOR,
    validateInboundMessage
}