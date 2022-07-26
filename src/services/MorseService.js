const IllegalArgumentError = require('../exceptions/IllegalArgumentError');
const _CONSTANTS = require('../models/ConstantsModel');
const _PULSE = require('../models/PulseModel');
const _UTL_MORSE = require('../utilities/UtilMorseCode');
const _UTL_ENUM_MORSECODE = require('../utilities/EnumMorseCode');

function decodeBits2Morse(bits) {
    validateInboundBites(bits, _UTL_ENUM_MORSECODE._PATTERN_VALIDATOR.BIT)
    let pulses = getPulses(bits);
    let averagePulses = getAverageByPulse(pulses, true);

    return pulses.map((pulse) => decodePulse(pulse, averagePulses)).join('');
}

function translate2Human(messageMorse) {
    validateInboundBites(messageMorse, _UTL_ENUM_MORSECODE._PATTERN_VALIDATOR.MORSE)

    let morseCodeDictionary = _UTL_MORSE.getMorseCodeDictionary();

    let messageHuman = messageMorse.split(' ')
        .map(morseCode => {
            let objMorseCodeDictionary = morseCodeDictionary.find((reg) => {
                return (morseCode == reg.morseCode) ? reg : "";
            })
            return (objMorseCodeDictionary == null || objMorseCodeDictionary == undefined || objMorseCodeDictionary == "" || objMorseCodeDictionary.length == 0) ? " " : objMorseCodeDictionary.character;
        })
        .join('');

    return messageHuman;
}

function translate2Morse(messageHuman) {
    validateInboundBites(messageHuman, _UTL_ENUM_MORSECODE._PATTERN_VALIDATOR.HUMAN)

    let morseCodeDictionary = _UTL_MORSE.getMorseCodeDictionary();

    let messageMorse = messageHuman.split('')
        .map(character => {
            let objMorseCodeDictionary = morseCodeDictionary.find((reg) => {
                return (character == reg.character) ? reg : "";
            })
            return (objMorseCodeDictionary == null || objMorseCodeDictionary == undefined || objMorseCodeDictionary == "" || objMorseCodeDictionary.length == 0) ? "" : objMorseCodeDictionary.morseCode;
        })
        .join(' ');

    return messageMorse;
}

function validateInboundBites(inputBites, patternValidator) {
    if (inputBites.length == 0) {
        throw new IllegalArgumentError('This message is empty');
    }
    if (!new RegExp(patternValidator).test(inputBites)) {
        throw new IllegalArgumentError('This message contains invalid characters');
    }
}

function getPulses(inputBites) {
    inputBites = inputBites.substring(inputBites.indexOf(_CONSTANTS.PULSE), inputBites.lastIndexOf(_CONSTANTS.PULSE));

    let sanitizeBites = inputBites.split(/(0+)/).filter((reg) => reg.length > 0);

    var pulses = new Array();

    sanitizeBites.forEach((character) => {
        current = character.charAt(0);
        pulses.push(new _PULSE.Pulse(current == _CONSTANTS.PULSE, character.length))
    });

    return pulses;
}

function getAverageByPulse(pulses) {
    let averagePulses = pulses.reduce((accum, item) => accum + item.count, 0) / pulses.length;
    return averagePulses;
}

function decodePulse(pulse, averagePulse) {
    return pulse.is_pulse ? pulse.count <= averagePulse ? '.' : '-' : pulse.count <= averagePulse ? '' : ' ';
}

module.exports = {
    decodeBits2Morse,
    translate2Human,
    translate2Morse
}