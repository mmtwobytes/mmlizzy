const XTroid = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const got = require("got");
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
var gis = require('g-i-s');
const fs = require('fs');
const NEED_WORDS = "need some word"
const IMG = "xtroid"
XTroid.addCMD({pattern: 'img ?(.*)', fromMe: true,}, (async (message, match) => { 

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORDS,MessageType.text);
    gis(match[1], async (error, result) => {
        for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
            var get = got(result[i].url, {https: {rejectUnauthorized: false}});
            var stream = get.buffer();
            
            stream.then(async (image) => {
                await message.client.sendMessage(message.jid,image, MessageType.image);
            });
        }

        message.reply(IMG.format((result.length < 5 ? result.length : 5), match[1]));
    });
}));
