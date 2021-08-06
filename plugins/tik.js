const XTroid = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න"



XTroid.addCMD({pattern: 'tik ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
await axios.get(`https://bx-hunter.herokuapp.com/api/download/tiktok?url=http://vt.tiktok.com/ZSJmhusyd/&apikey=Ikyy69`).then(async (ann) => {
        const { vid_wm } = ann.data.video_URL
    const lc = vid_wm

        const profileBuffer = await axios.get(lc, {responseType: 'arraybuffer'})

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {quoted: message.data}, {caption: "x"}) 
    });
    }));
