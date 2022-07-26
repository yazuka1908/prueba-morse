const _CHAI = require('chai');
const _ASSERT = _CHAI.assert;
const _MORSESERVICE = require('../src/services/MorseService');

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

describe('TEST LEVEL II - TRANSLATE (MESSAGE MORSE CODE) TO (MESSAGE HUMAN)', () => {
    describe('TEST 1: Decode message morse code to message human', () => {
        it(('Message Human expected: ').concat(MESSAGE_HUMAN_OK).concat(' - Message Human generated: ').concat(translate2Human), () => {
            _ASSERT.equal(translate2Human, MESSAGE_HUMAN_OK);
        });
    });
    describe('TEST 2: Decode message morse code to message human, is not equal', () => {
        it(('Message Human expected: ').concat(MESSAGE_HUMAN_OK).concat(' - Message Human generated: ').concat(translate2HumanJames), () => {
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

const translate2Morsen = _MORSESERVICE.translate2Morse(MESSAGE_HUMAN_OK);
const translate2MorsenJames = _MORSESERVICE.translate2Morse(MESSAGE_HUMAN_JAMES);

describe('TEST LEVEL II - TRANSLATE (MESSAGE HUMAN) TO (MESSAGE MORSE CODE)', () => {
    describe('TEST 1: Decode message human to message morse code', () => {
        it(('Message Morse code expected: ').concat(MORSE_CODE_MELI_OK).concat(' - Message Morse code generated: ').concat(translate2Morsen), () => {
            _ASSERT.equal(translate2Morsen, MORSE_CODE_MELI_OK);
        });
    });
    describe('TEST 2: Decode message human to message morse code, is not equal', () => {
        it(('Message Morse code expected: ').concat(MORSE_CODE_MELI_OK).concat(' - Message Morse code generated: ').concat(translate2MorsenJames), () => {
            _ASSERT.notEqual(translate2MorsenJames, MORSE_CODE_MELI_OK);
        });
    });
    describe('TEST 3: Throw error (Empty message human) ', () => {
        it('Response message on console (IllegalArgumentError: This message is empty): ', () => {
            try {
                _MORSESERVICE.decodeBits2Morse(MESSAGE_HUMAN_EMPTY);
            } catch (error) {
                _ASSERT.equal('This message is empty', error.message);
            }
        });
    });
    describe('TEST 4: Throw error (Invalid message human character) ', () => {
        it('Response message on console (IllegalArgumentError: This message contains invalid characters)', () => {
            try {
                _MORSESERVICE.decodeBits2Morse(MESSAGE_HUMAN_INVALID);
            } catch (error) {
                _ASSERT.equal('This message contains invalid characters', error.message);
            }
        });
    });
});