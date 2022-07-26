const _PATTERN_VALIDATOR = {
    BIT: /^[01]+$/, // solo permite caracteres 0 y 1
    MORSE: /^[ \\.\\-]+$/, // solo permite caracteres espacio( ), punto(.), guion(-)
    HUMAN: /^[ A-Z0-9]+$/ // solo permite caracteres espacio( ), espacio(A-Z), numeros(0-9)
}


module.exports = {
    _PATTERN_VALIDATOR
}