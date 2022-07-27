const _CHAI = require('chai');
const _CHAI_HTTP = require('chai-http');
const _HTTP_STATUS = require('../src/models/HttpStatus');
const _URL = 'http://localhost:3000';

_CHAI.should();
_CHAI.use(_CHAI_HTTP);

//* LEVEL III ------------------------->
describe('TEST API REST TRANSLATE DECODE BITS, TEXT HUMAN AND TEXT MORSE CODE', () => {

    describe('TEST (TRANSLATE DECODE BITS) ', () => {
        describe('Test POST [/translate/decodeBits]: ', () => {
            it('it should return message morse code. Response: ".... --- .-.. .- -- . .-.. .."', (done) => {
                let text = "000000001101101100111000001111110001111110011111100000001110111111110111011100000001100011111100000111111001111110000000110000110111111110111011100000011011100000000000";
                let response_ok = ".... --- .-.. .- -- . .-.. ..";

                _CHAI.request(_URL)
                    .post('/translate/decodeBits')
                    .send({ text: text })
                    .end((err, res) => {
                        res.should.have.status(_HTTP_STATUS.HTTP_STATUS.OK.statusCode);
                        res.body.should.be.a('Object');
                        res.body.should.have.property('message');
                        res.body.should.have.property('message').eq(response_ok);
                        done();
                    });
            });

            it('STATUS 400: it should NOT return message morse code, the translator has presented a failure. Caused by: character invalid bits {text:"00000111111TT000-?"}', (done) => {
                let text = "00000000110110110011100000111111TT000";
                let error_400 = "You have entered an invalid input, check the api documentation";

                _CHAI.request(_URL)
                    .post('/translate/decodeBits')
                    .send({ text: text })
                    .end((err, res) => {
                        res.should.have.status(_HTTP_STATUS.HTTP_STATUS.BAD_REQUEST.statusCode);
                        res.body.should.be.a('Object');
                        res.body.should.have.property('error');
                        res.body.should.have.property('error').eq(error_400);
                        done();
                    });
            });

            it('STATUS 400: it should NOT return message morse code, the translator has presented a failure. Caused by: text empty {text:""}', (done) => {
                let text = "";
                let error_400 = "You have entered an invalid input, check the api documentation";                

                _CHAI.request(_URL)
                    .post('/translate/decodeBits')
                    .send({ text: text })
                    .end((err, res) => {
                        res.should.have.status(_HTTP_STATUS.HTTP_STATUS.BAD_REQUEST.statusCode);
                        res.body.should.be.a('Object');
                        res.body.should.have.property('error');
                        res.body.should.have.property('error').eq(error_400);
                        done();
                    });
            });
            
            it('STATUS 500: it should NOT return message morse code, the translator has presented a failure. Caused by: input empty [{}]', (done) => {
                let text = "";
                let error_500 = "Critical error, contact the administrator";

                _CHAI.request(_URL)
                    .post('/translate/decodeBits')
                    .send({})
                    .end((err, res) => {
                        res.should.have.status(_HTTP_STATUS.HTTP_STATUS.INTERNAL_SERVER_ERROR.statusCode);
                        res.body.should.be.a('Object');
                        res.body.should.have.property('error');
                        res.body.should.have.property('error').eq(error_500);
                        done();
                    });
            });
        });
    });

    describe('TEST (TRANSLATE TEXT HUMAN) ', () => {
        describe('Test POST [/translate/2human]": ', () => {
            it('it should return message human. Response: "HOLA MELI"', (done) => {
                let text = ".... --- .-.. .-  -- . .-.. ..";
                let response_ok = "HOLA MELI";

                _CHAI.request(_URL)
                    .post('/translate/2human')
                    .send({ text: text })
                    .end((err, res) => {
                        res.should.have.status(_HTTP_STATUS.HTTP_STATUS.OK.statusCode);
                        res.body.should.be.a('Object');
                        res.body.should.have.property('message');
                        res.body.should.have.property('message').eq(response_ok);
                        done();
                    });
            });

            it('STATUS 400: it should NOT return message human, the translator has presented a failure. Caused by: character invalid morse code {text:".... ---? .-.. .-  --YTT . .-.. .."}', (done) => {
                let text = ".... ---? .-.. .-  --YTT . .-.. ..";
                let error_400 = "You have entered an invalid input, check the api documentation";

                _CHAI.request(_URL)
                    .post('/translate/2human')
                    .send({ text: text })
                    .end((err, res) => {
                        res.should.have.status(_HTTP_STATUS.HTTP_STATUS.BAD_REQUEST.statusCode);
                        res.body.should.be.a('Object');
                        res.body.should.have.property('error');
                        res.body.should.have.property('error').eq(error_400);
                        done();
                    });
            });

            it('STATUS 400: it should NOT return message morse code, the translator has presented a failure. Caused by: text empty {text:""}', (done) => {
                let text = "";
                let error_400 = "You have entered an invalid input, check the api documentation";                

                _CHAI.request(_URL)
                    .post('/translate/2human')
                    .send({ text: text })
                    .end((err, res) => {
                        res.should.have.status(_HTTP_STATUS.HTTP_STATUS.BAD_REQUEST.statusCode);
                        res.body.should.be.a('Object');
                        res.body.should.have.property('error');
                        res.body.should.have.property('error').eq(error_400);
                        done();
                    });
            });
            
            it('STATUS 500: it should NOT return message morse code, the translator has presented a failure. Caused by: input empty [{}]', (done) => {
                let text = "";
                let error_500 = "Critical error, contact the administrator";

                _CHAI.request(_URL)
                    .post('/translate/2human')
                    .send({})
                    .end((err, res) => {
                        res.should.have.status(_HTTP_STATUS.HTTP_STATUS.INTERNAL_SERVER_ERROR.statusCode);
                        res.body.should.be.a('Object');
                        res.body.should.have.property('error');
                        res.body.should.have.property('error').eq(error_500);
                        done();
                    });
            });
        });
    });


    describe('TEST (TRANSLATE TEXT MORSE CODE) ', () => {
        describe('Test POST [/translate/2morse]: ', () => {
            it('it should return message morse code. Response: ".... --- .-.. .-  -- . .-.. .."', (done) => {
                let text = "HOLA MELI";
                let response_ok = ".... --- .-.. .-  -- . .-.. ..";

                _CHAI.request(_URL)
                    .post('/translate/2morse')
                    .send({ text: text })
                    .end((err, res) => {
                        res.should.have.status(_HTTP_STATUS.HTTP_STATUS.OK.statusCode);
                        res.body.should.be.a('Object');
                        res.body.should.have.property('message');
                        res.body.should.have.property('message').eq(response_ok);
                        done();
                    });
            });
            it('STATUS 400: it should NOT return message morse code, the translator has presented a failure. Caused by: character invalid text human {text:"HOLA MELI.?-"}', (done) => {
                let text = "HOLA MELI.?-";
                let error_400 = "You have entered an invalid input, check the api documentation";

                _CHAI.request(_URL)
                    .post('/translate/2morse')
                    .send({ text: text })
                    .end((err, res) => {
                        res.should.have.status(_HTTP_STATUS.HTTP_STATUS.BAD_REQUEST.statusCode);
                        res.body.should.be.a('Object');
                        res.body.should.have.property('error');
                        res.body.should.have.property('error').eq(error_400);
                        done();
                    });
            });

            it('STATUS 400: it should NOT return message morse code, the translator has presented a failure. Caused by: text empty {text:""}', (done) => {
                let text = "";
                let error_400 = "You have entered an invalid input, check the api documentation";                

                _CHAI.request(_URL)
                    .post('/translate/2morse')
                    .send({ text: text })
                    .end((err, res) => {
                        res.should.have.status(_HTTP_STATUS.HTTP_STATUS.BAD_REQUEST.statusCode);
                        res.body.should.be.a('Object');
                        res.body.should.have.property('error');
                        res.body.should.have.property('error').eq(error_400);
                        done();
                    });
            });
            
            it('STATUS 500: it should NOT return message morse code, the translator has presented a failure. Caused by: input empty [{}]', (done) => {
                let text = "";
                let error_500 = "Critical error, contact the administrator";

                _CHAI.request(_URL)
                    .post('/translate/2morse')
                    .send({})
                    .end((err, res) => {
                        res.should.have.status(_HTTP_STATUS.HTTP_STATUS.INTERNAL_SERVER_ERROR.statusCode);
                        res.body.should.be.a('Object');
                        res.body.should.have.property('error');
                        res.body.should.have.property('error').eq(error_500);
                        done();
                    });
            });

        });
    });

});

