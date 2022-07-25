const IllegalArgumentError = require('../exceptions/IllegalArgumentError');
const _CONSTANTS = require('../models/ConstantsModel');
const _PULSE = require('../models/pulseModel');

/*
   * METHOD: Validate In bound Bites
   * DESCRIPTION: Main validations to operate
   * */
function validateInboundBites(inputBites) {
    try {
        if (inputBites.length == 0) {
            throw new IllegalArgumentError('This message is empty');
        }
        if (!_CONSTANTS.BINARY_PATTERN.test(inputBites)) {
            throw new IllegalArgumentError('This message contains invalid characters');
        }  
      return true;    
    } catch (error) {
        console.error("ERROR [validateInboundBites] ===> ", error);
        return false;      
    }
}

function getPulses(inputBites) {
    inputBites = inputBites.substring(inputBites.indexOf(_CONSTANTS.PULSE), inputBites.lastIndexOf(_CONSTANTS.PULSE));
    console.log("inputBites ==>", inputBites);

    let sanitizeBites = inputBites.split(/(0+)/).filter((reg) => reg.length > 0);
    console.log("sanitizeBites ==>", sanitizeBites);

    var pulses = new Array();

    sanitizeBites.forEach((character) => {
        current = character.charAt(0);
        pulses.push(new _PULSE.Pulse(current == _CONSTANTS.PULSE, character.length))
    });
    console.log("pulses ==>", pulses);

    return pulses;
}

function getAverageByPulse(pulses) {
    let averagePulses = pulses.reduce((accum, item) => accum + item.count, 0) / pulses.length;
    return averagePulses;
}

function decodePulse(pulse, averagePulse) {
    return pulse.is_pulse ? pulse.count <= averagePulse ? '.' : '-' : pulse.count <= averagePulse ? '' : ' ';
}

function decodeBits2Morse(bits){
    let decodeMessage = "";
    
    if (validateInboundBites(bits)){
        let pulses = getPulses(bits);
        let averagePulses = getAverageByPulse(pulses, true);
        console.log("averagePulses ==>", averagePulses);
        decodeMessage = pulses.map((pulse) => decodePulse(pulse, averagePulses)).join('');
    }

    return decodeMessage;
}

module.exports = {
    decodeBits2Morse
}