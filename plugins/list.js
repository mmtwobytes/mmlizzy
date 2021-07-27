

const XTroid = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const Config = require('../config');

XTroid.addCMD({pattern: 'lll', fromMe: true, deleteCommand: true,}, (async (message, match) => {

var rows = [

 {title: 'Row 1', description: "Hello it's description 1", rowId:"rowid1"},

 {title: 'Row 2', description: "Hello it's description 2", rowId:"rowid2"}

]

var sections = [{title: "Section 1", rows: rows}]

var button = {

 buttonText: 'Click Me!',

 description: "Hello it's list message",

 sections: sections,

 listType: 1

}
var id = '94702102324@s.whatsapp.net'
await message.client.sendMessage(id, button, MessageType.listMessage)

    }));
