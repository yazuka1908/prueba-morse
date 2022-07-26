const _PULSE = require('../models/PulseModel');
const _MORSE_DICTIONARY = require('../models/MorseDictionary.js');
const _MORSE_UTL = require('../utilities/MorseUtil.js');

const PULSE = '1'

function decodeBits2Morse(bits) {
    _MORSE_UTL.validateInboundMessage(bits, _MORSE_UTL._PATTERN_VALIDATOR.BIT)
    let pulses = getPulses(bits)
    let averagePulses = getAverageByPulse(pulses, true)
    let message = pulses.map((pulse) => decodePulse(pulse, averagePulses)).join('')
    return message
}

function translate2Human(messageMorse) {
    _MORSE_UTL.validateInboundMessage(messageMorse, _MORSE_UTL._PATTERN_VALIDATOR.MORSE)
    let message = messageMorse.split(' ')
        .map(e => _MORSE_DICTIONARY.MORSE.get(e) || ' ')
        .join('')
    return message
}

function translate2Morse(messageHuman) {
    _MORSE_UTL.validateInboundMessage(messageHuman, _MORSE_UTL._PATTERN_VALIDATOR.HUMAN)
    let message = messageHuman.toUpperCase().split('')
        .map(e => (_MORSE_DICTIONARY.HUMAN.get(e) || '').concat(' '))
        .join('')
    message = message.trim()
    return message
}

function getPulses(inputBites) {
    inputBites = inputBites.substring(inputBites.indexOf(PULSE), inputBites.lastIndexOf(PULSE))
    let sanitizeBites = inputBites.split(/(0+)/).filter((reg) => reg.length > 0)
    let pulses = []
    sanitizeBites.forEach((character) => {
        let current = character.charAt(0)
        pulses.push(new _PULSE.Pulse(current === PULSE, character.length))
    });
    return pulses
}

function getAverageByPulse(pulses) {
    return pulses.reduce((accum, item) => accum + item.count, 0) / pulses.length
}

function decodePulse(pulse, averagePulse) {
    return pulse.is_pulse ? (pulse.count <= averagePulse ? '.' : '-') : (pulse.count <= averagePulse ? '' : ' ')
}

module.exports = {
    decodeBits2Morse,
    translate2Human,
    translate2Morse
}