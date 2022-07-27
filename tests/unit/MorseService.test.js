const _CHAI = require('chai');
const _ASSERT = _CHAI.assert;
const _MORSESERVICE = require('../../src/services/MorseService');

//* LEVEL I ------------------------->
//Params
const BITS_MOCK_HOLAMELI = "000000001101101100111000001111110001111110011111100000001110111111110111011100000001100011111100000111111001111110000000110000110111111110111011100000011011100000000000";
const BITS_MOCK_JAMES = "0011001111001111001111000001100111100000111100111100000100000110110110000";
const BITS_MOCK_EMPTY = "";
const BITS_MOCK_CHARACTE_INVALID = "0011001111TT001111001111000RR0011001111000001111001111000001000001101101100-00";
const MORSE_CODE_OK = ".... --- .-.. .- -- . .-.. ..";
//Result
const decodeBits2Morse = _MORSESERVICE.decodeBits2Morse(BITS_MOCK_HOLAMELI);
const decodeBits2MorseJames = _MORSESERVICE.decodeBits2Morse(BITS_MOCK_JAMES);

describe('TEST SERVICE (decodeBits2Morse) - DECODE (BITS) TO (MORSE CODE)', () => {
    describe('TEST 1: Decode bits to morse code "HOLA MELI" ', () => {
        it(`Morse code expected: ${MORSE_CODE_OK} - Morse code generated: ${decodeBits2Morse}`, () => {
            _ASSERT.equal(decodeBits2Morse, MORSE_CODE_OK);
        });
    });
    describe('TEST 2: Decode bits to morse code "HOLA MELI", is not equal', () => {
        it(`Morse code expected: ${MORSE_CODE_OK} - Morse code generated: ${decodeBits2MorseJames}`, () => {
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

//* LEVEL II ------------------------->
//Params
const MORSE_CODE_MELI_OK = ".... --- .-.. .-  -- . .-.. ..";
const MORSE_CODE_MELI_JAMES = ".--- .- -- . ...";
const MORSE_CODE_MELI_EMPTY = "";
const MORSE_CODE_MELI_INVALID = ".... --- .-.. G.-  -- . .-.. ..=?";

const MESSAGE_HUMAN_OK = "HOLA MELI";
const MESSAGE_HUMAN_JAMES = "JAMES";
const MESSAGE_HUMAN_EMPTY = "";
const MESSAGE_HUMAN_INVALID = "HOLA MELI _¿=";
//Result
const translate2Human = _MORSESERVICE.translate2Human(MORSE_CODE_MELI_OK);
const translate2HumanJames = _MORSESERVICE.translate2Human(MORSE_CODE_MELI_JAMES);

describe('TEST SERVICE (translate2Human) - TRANSLATE (MESSAGE MORSE CODE) TO (MESSAGE HUMAN)', () => {
    describe('TEST 1: Decode message morse code to message human', () => {
        it(`Message Human expected: ${MESSAGE_HUMAN_OK} - Message Human generated: ${translate2Human}`, () => {
            _ASSERT.equal(translate2Human, MESSAGE_HUMAN_OK);
        });
    });
    describe('TEST 2: Decode message morse code to message human, is not equal', () => {
        it(`Message Human expected: ${MESSAGE_HUMAN_OK} - Message Human generated: ${translate2HumanJames}`, () => {
            _ASSERT.notEqual(translate2HumanJames, MESSAGE_HUMAN_OK);
        });
    });
    describe('TEST 3: Throw error (Empty message morse code human) ', () => {
        it('Response message on console (IllegalArgumentError: This message is empty): ', () => {
            try {
                _MORSESERVICE.translate2Human(MORSE_CODE_MELI_EMPTY);
            } catch (error) {
                _ASSERT.equal('This message is empty', error.message);
            }
        });
    });
    describe('TEST 4: Throw error (Invalid message morse code character) ', () => {
        it('Response message on console (IllegalArgumentError: This message contains invalid characters)', () => {
            try {
                _MORSESERVICE.translate2Human(MORSE_CODE_MELI_INVALID);
            } catch (error) {
                _ASSERT.equal('This message contains invalid characters', error.message);
            }
        });
    });
});

const translate2Morse = _MORSESERVICE.translate2Morse(MESSAGE_HUMAN_OK);
const translate2MorseJames = _MORSESERVICE.translate2Morse(MESSAGE_HUMAN_JAMES);

describe('TEST SERVICE (translate2Morse) - TRANSLATE (MESSAGE HUMAN) TO (MESSAGE MORSE CODE)', () => {
    describe('TEST 1: Decode message human to message morse code', () => {
        it(`Message Morse code expected: ${MORSE_CODE_MELI_OK} - Message Morse code generated: ${translate2Morse}`, () => {
            _ASSERT.equal(translate2Morse, MORSE_CODE_MELI_OK);
        });
    });
    describe('TEST 2: Decode message human to message morse code, is not equal', () => {
        it(`Message Morse code expected: ${MORSE_CODE_MELI_OK} - Message Morse code generated: ${translate2MorseJames}`, () => {
            _ASSERT.notEqual(translate2MorseJames, MORSE_CODE_MELI_OK);
        });
    });
    describe('TEST 3: Throw error (Empty message human) ', () => {
        it('Response message on console (IllegalArgumentError: This message is empty): ', () => {
            try {
                _MORSESERVICE.translate2Morse(MESSAGE_HUMAN_EMPTY);
            } catch (error) {
                _ASSERT.equal('This message is empty', error.message);
            }
        });
    });
    describe('TEST 4: Throw error (Invalid message human character) ', () => {
        it('Response message on console (IllegalArgumentError: This message contains invalid characters)', () => {
            try {
                _MORSESERVICE.translate2Morse(MESSAGE_HUMAN_INVALID);
            } catch (error) {
                _ASSERT.equal('This message contains invalid characters', error.message);
            }
        });
    });
});