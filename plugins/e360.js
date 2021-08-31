const lasiapi = require('textmaker-lasi'); 
const lasibase = require('xtroid-npm');
const XTroid = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const crypto = require('crypto');
let wk = Config.WORKTYPE == 'public' ? false : true



/* ඔව් ඔන්න දැන් දාර පොන්න අවජාතක පැටියෙක් ඇවිල්ල අපි ලියපු ස්ක්‍රිප්ට් උස්සලා අප්පට හමිනෙන්න හදනවා නන් උගේ අම්ම බඩුවක්  */




XTroid.addCMD({pattern: 'eblp ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));


XTroid.addCMD({pattern: 'e2blp ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));


XTroid.addCMD({pattern: 'erain ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));


XTroid.addCMD({pattern: 'ejar ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));


XTroid.addCMD({pattern: 'estar ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));


XTroid.addCMD({pattern: 'ecack ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/writing-on-the-cakes-127.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'esnac ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/text-cake-90.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));


XTroid.addCMD({pattern: 'emoon ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/stars-night-online-1-85.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));


XTroid.addCMD({pattern: 'ewood ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/wooden-3d-text-effect-59.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));


XTroid.addCMD({pattern: 'ebtf ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/write-galaxy-online-18.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));



XTroid.addCMD({pattern: 'ebday ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/colorful-birthday-foil-balloon-text-effects-620.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'egrass ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/dark-green-typography-online-359.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'edrag ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/dragon-steel-text-effect-online-347.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'eglx ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/text-light-galaxy-effectt-345.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'ewing ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/angel-wing-effect-329.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'ebuble ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/create-water-effect-text-online-295.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'e2glx ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/text-galaxy-tree-effect-288.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'eleaf ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/write-letters-on-the-leaves-248.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'ebulb ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));


XTroid.addCMD({pattern: 'ecrown ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/modern-gold-5-215.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'elight ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/color-text-effects-160.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'e2crown ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/modern-gold-157.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'eglight ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/create-word-green-flares-140.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'ecloud ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/cloud-text-effect-139.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'efire ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/dragon-fire-text-effect-111.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));

XTroid.addCMD({pattern: 'efancy ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/colorful-text-effects-93.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));
