
const XTroid = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const CPK = `
âââ â ðâ¤MY CPACKâ¦ð â ââ
âââââââ âªââ« âââââââ
ââ â*.cup*
âð _.cup your text_
ââ â*.cmt*
âð _.cmt your text_
ââ â*.cfl*
âð _.cfl your text_
ââ â*.cmg*
âð _.cmg your text_
ââ â*.cgl*
âð _.cgl your text_
ââ â*.cstn*
âð _.cstn your text_
ââ â*.crod*
âð _.crod your text_
ââ â*.cgem*
âð _.cgem your text_
ââ â*.cbery*
âð _.cbery your text_
ââ â*.ctrn*
âð _.ctrn your text_
â
â *Cpack V2.0*
ââ¥ *.cdem*
âð _.cdem your text_
ââ¥ *.crob*
âð _.crob your text_
ââ¥ *.cpink*
âð _.cpink your text_
ââ¥ *.csl*
âð _.csl your text_
ââ¥ *.csand*
âð _.csand your text_
ââ¥ *.csun*
âð _.csun your text_
ââ¥ *.cgrass*
âð _.cgrass your text_
ââ¥ *.cchoco*
âð _.cchoco your text_
â
ââ¤â¤â¤â¤ââââ¤â¤â¤â¤â`
const Config = require('../config')
const Ln = "Cpack Logo"
let FM = Config.WORKTYPE == 'public' ? false : true


XTroid.addCMD({pattern: 'cpk', fromMe: FM, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,CPK, MessageType.text);}));
