const _CHAI = require('chai');
const _ASSERT = _CHAI.assert;
const _MORSESERVICE = require('../src/services/MorseService');

//Params
const BITS_MOCK_HOLAMELI = "000000001101101100111000001111110001111110011111100000001110111111110111011100000001100011111100000111111001111110000000110000110111111110111011100000011011100000000000";
const BITS_MOCK_JAMES = "0011001111001111001111000001100111100000111100111100000100000110110110000";
const BITS_MOCK_EMPTY = "";
const BITS_MOCK_CHARACTE_INVALID = "0011001111TT001111001111000RR0011001111000001111001111000001000001101101100-00";
const MORSE_CODE_OK = ".... --- .-.. .- -- . .-.. ..";
//Result
const decodeBits2Morse = _MORSESERVICE.decodeBits2Morse(BITS_MOCK_HOLAMELI);
const decodeBits2MorseJames = _MORSESERVICE.decodeBits2Morse(BITS_MOCK_JAMES);

describe('TEST LEVEL I - DECODE (BITS) TO (MORSE CODE)', () => {
    describe('TEST 1: Decode bits to morse code "HOLA MELI" ', () => {
        it(('Morse code expected: ').concat(MORSE_CODE_OK).concat(' - Morse code generated: ').concat(decodeBits2Morse), () => {
            _ASSERT.equal(decodeBits2Morse, MORSE_CODE_OK);
        });
    });
    describe('TEST 2: Decode bits to morse code "HOLA MELI", is not equal', () => {
        it(('Morse code expected: ').concat(MORSE_CODE_OK).concat(' - Morse code generated: ').concat(decodeBits2MorseJames), () => {
            _ASSERT.notEqual(decodeBits2MorseJames, MORSE_CODE_OK);
        });
    });
    describe('TEST 3: Throw error (Empty bits string) ', () => {
        it('Response message on console (IllegalArgumentError: This message is empty): ', () => {
            try {
                _MORSESERVICE.decodeBits2Morse(BITS_MOCK_EMPTY);
            } catch (error) {
                _ASSERT.equal('This message is empty', error.message);
            }
        });
    });
    describe('TEST 4: Throw error (Invalid bit character) ', () => {
        it('Response message on console (IllegalArgumentError: This message contains invalid characters)', () => {
            try {
                _MORSESERVICE.decodeBits2Morse(BITS_MOCK_CHARACTE_INVALID);
            } catch (error) {
                _ASSERT.equal('This message contains invalid characters', error.message);
            }
        });
    });
});