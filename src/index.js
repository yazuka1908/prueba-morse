const _MORSESERVICE = require('../src/services/MorseService');

let inputBites = '000000001101101100111000001111110001111110011111100000001110111111110111011100000001100011111100000111111001111110000000110000110111111110111011100000011011100000000000';
console.log('LOG-LEVEL_I-CodigoMorse:', _MORSESERVICE.decodeBits2Morse(inputBites));

let messageMorseCode = ".... --- .-.. .-  -- . .-.. ..";
console.log('LOG-LEVEL_II-MessageHuman:', _MORSESERVICE.translate2Human(messageMorseCode));

let messageHuman = "HOLA MELI";
console.log('LOG-LEVEL_II-messageMorseCode:', _MORSESERVICE.translate2Morse(messageHuman));