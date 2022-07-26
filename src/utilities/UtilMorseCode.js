const MorseCode = require('../models/MorseCodeModel');

function getMorseCodeDictionary() {
    let lListaMorseCode = [];
    lListaMorseCode.push(new MorseCode("A", ".-"));
    lListaMorseCode.push(new MorseCode("B", "-..."));
    lListaMorseCode.push(new MorseCode("C", "-.-."));
    lListaMorseCode.push(new MorseCode("D", "-.."));
    lListaMorseCode.push(new MorseCode("E", "."));
    lListaMorseCode.push(new MorseCode("F", "..-."));
    lListaMorseCode.push(new MorseCode("G", "--."));
    lListaMorseCode.push(new MorseCode("H", "...."));
    lListaMorseCode.push(new MorseCode("I", ".."));
    lListaMorseCode.push(new MorseCode("J", ".---"));
    lListaMorseCode.push(new MorseCode("K", "-.-"));
    lListaMorseCode.push(new MorseCode("L", ".-.."));
    lListaMorseCode.push(new MorseCode("M", "--"));
    lListaMorseCode.push(new MorseCode("N", "-."));
    lListaMorseCode.push(new MorseCode("O", "---"));
    lListaMorseCode.push(new MorseCode("P", ".--."));
    lListaMorseCode.push(new MorseCode("Q", "--.-"));
    lListaMorseCode.push(new MorseCode("R", ".-."));
    lListaMorseCode.push(new MorseCode("S", "..."));
    lListaMorseCode.push(new MorseCode("T", "-"));
    lListaMorseCode.push(new MorseCode("U", "..-"));
    lListaMorseCode.push(new MorseCode("V", "...-"));
    lListaMorseCode.push(new MorseCode("W", ".--"));
    lListaMorseCode.push(new MorseCode("X", "-..-"));
    lListaMorseCode.push(new MorseCode("Y", "-.--"));
    lListaMorseCode.push(new MorseCode("Z", "--.."));
    lListaMorseCode.push(new MorseCode("0", "-----"));
    lListaMorseCode.push(new MorseCode("1", ".----"));
    lListaMorseCode.push(new MorseCode("2", "..---"));
    lListaMorseCode.push(new MorseCode("3", "...--"));
    lListaMorseCode.push(new MorseCode("4", "....-"));
    lListaMorseCode.push(new MorseCode("5", "....."));
    lListaMorseCode.push(new MorseCode("6", "-...."));
    lListaMorseCode.push(new MorseCode("7", "--..."));
    lListaMorseCode.push(new MorseCode("8", "---.."));
    lListaMorseCode.push(new MorseCode("9", "----."));
    lListaMorseCode.push(new MorseCode("stop", ".-.-.-"));
    return lListaMorseCode;
}

module.exports = {
    getMorseCodeDictionary
}