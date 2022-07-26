const _MORSESERVICE = require('../src/services/MorseService');

let inputBites = '000000001101101100111000001111110001111110011111100000001110111111110111011100000001100011111100000111111001111110000000110000110111111110111011100000011011100000000000';
console.log('TEST: Service (decodeBits2Morse):', _MORSESERVICE.decodeBits2Morse(inputBites));

let messageMorseCode = ".... --- .-.. .-  -- . .-.. ..";
console.log('TEST: Service (translate2Human):', _MORSESERVICE.translate2Human(messageMorseCode));

let messageHuman = "HOLA MELI";
console.log('TEST: Service (translate2Morse):', _MORSESERVICE.translate2Morse(messageHuman));