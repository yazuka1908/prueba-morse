const _PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const _MORSE_ROUTER = require('./routes/MorseRouter');
const _BODY_PARSER = require('body-parser');

app.use(express.static("public"))
app.use(_BODY_PARSER.json());                                     
app.use(_BODY_PARSER.urlencoded({extended: true}));               
app.use(_BODY_PARSER.text());                                    
app.use(_BODY_PARSER.json({ type: 'application/json'})); 


app.use('/translate', _MORSE_ROUTER);

const server = app.listen(_PORT, () => {
    console.log(`Server listening on port ${_PORT}`);
});