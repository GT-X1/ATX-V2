 /*
 © 2021 ATX, INC.
*/

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    rugaapi,
    GroupSettingChange
} = require('@adiwajshing/baileys')



/******COMIENZO DE LA ENTRADA DEL ARCHIVO******/

const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')

const { wait, pegatinas, musica, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
/******FIN DE ENTRADA DE ARCHIVO******/



/******COMIENZO DE LA ENTRADA DEL PAQUETE NPM******/

const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
/*const tiktod = require('tiktok-scraper')*/
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')

const speed = require('performance-now')



/******FIN DE ENTRADA DEL PAQUETE NPM******/


const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))


/******FIN DE ENTRADA JSON******/

/******COMIENZO DE LA ENTRADA JSON******/


const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
/******FIN DE ENTRADA JSON******/



/******INICIO DE LA ENTRADA DEL MENÚ******/

const { help } = require('./src/help')




/*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################*/

/*MIS LLAMADOS*/


const { ues } = require('./UES/ues')

const { ls } = require('./atx/ls')




const { atx } = require('./atx/atx')

const { webs } = require('./atx/webs')

const { apps } = require('./atx/apps')

const { gits } = require('./atx/gits')

const { cmtermux } = require('./atx/cmtermux')

const { nicks } = require('./atx/nicks')

const { bins } = require('./atx/bins')

const { cbins } = require('./atx/cbins')

/*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################*/







/*CASE NSFWMENU EN SRC NSFWMENU*/

const { nsfwmenu } = require('./src/nsfwmenu')


/* DESMENU EN SRC DESMENU*/

const { desmenu } = require('./src/desmenu')

/* VERSION EN SRC VERSION */

const { version } = require('./src/version')


/*CASE JUEGOS EN SRC JUEGOS*/

const { juegos } = require('./src/juegos')


/*CASE SHANTERA EN SHANTERA*/

const { shantera } = require('./src/shantera')


/*CASE ANTIMENU EN SRC ANTIMENU*/

const { antimenu } = require('./src/antimenu')


/*CASE WELMENU EN SRC WELMENU */

const { welmenu } = require('./src/welmenu')


/*CASE OTAK EN OTAK*/

const { otak } = require('./src/otak')





/*TARJETA DE CONTACTOOO

/******CARGA DE ENTRADA VCARD******/
const vcard = 'BEGIN:VCARD\n' // Tarjeta de contacto
            + 'VERSION:3.0\n' 
            + 'FN:𐧶 𝑨𝒇𝒌-1 .\n' // Nombre
            + 'ORG:𐧶 𝑨𝒇𝒌-1 .;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=48459077200:+48 45 907 72 00\n' // ID de WhatsApp + número de teléfono
            + 'END:VCARD'
/******FIN DE ENTRADA VCARD******/



/* CAMBIO DE PREFIJOOO*/

prefix = '.'
blocked = []


/******CONFIGURACION DE CARGA******/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	author,
	pack
} = settingan



/******INICIO DE FUNCIONES ENTRADA******/


/******ARCHIVOS ANTILINK POR ATX******/

const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))

/******FIN DE ARCHIVOS ANTILINK POR ATX******/




/*CODIGO DESCONOCIDO 2 ??? */

const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }
	
const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }

function addMetadata(packname, author) {	
	if (!packname) packname = 'ATX'; if (!author) author = 'ATX';	
	author = author.REPLACE(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 
	
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}





 /*FUNCION QR MENSAJE*/
 
async function starts() {
	const client = new WAConnection()
	client.version = [2, 2119, 6]
        client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color(' Escanea el codigo QR rapido!!! '),color('[','white'), color('!','red'), color(']','white'))
	})

	fs.existsSync('./Nazwa.json') && client.loadAuthInfo('./Nazwa.json')
	client.on('connecting', () => {
		start('2', 'Desconectado')
	})
	client.on('open', () => {
		success('2', 'Conectado by ATX')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)




			/* MENSAJE BIENVENIDA*/

			if (anu.action == 'add') {
				num = anu.participants[0]
				teks = `Bienvenid@ ${num.split('@')[0]} \n a *${mdata.subject}* ᵉˡ ᵐᵉʲᵒʳ ᵍʳᵘᵖᵒ\nUᶰ ᵍᵘˢᵗᵒ ᶜᵒᶰᵒᶜᵉʳᵗᵉ😀\n\nOʲᶤᵗᵒ ˢᶤᵍᵘᵉ ˡᵃˢ ʳᵉᵍˡᵃˢ ᵈᵉˡ ᵍʳᵘᵖᵒ ˢᶤ ᶰᵒ, ᵖᵃ ᶠᵘᵉʳᵃ 🧐\n\nPᵃʳᵃ ᵘᵗᶤˡᶤᶻᵃʳ ᵉˡ ᵇᵒᵗ ʳᵉᵍᶤˢᵗʳᵃᵗᵉ ᶜᵒᶰ ᵉˡ ᶜᵒᵐᵃᶰᵈᵒ ${prefix}ᵈᵃᶠᵗᵃʳ ʸ ᵗᵘ ᶰᵒᵐᵇʳᵉ\n\nPᵃʳᵃ ᵛᵉʳ ˡᵒˢ ᵈᵉᵐᵃˢ ᶜᵒᵐᵃᶰᵈᵒˢ ᵘᵗᶤˡᶤᶻᵃ ${prefix}ʰᵉˡᵖ\n\nby ATX`
                          client.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `NOOOO ˢᵉ ᶰᵒˢ ᶠᵘᵉ ᵘᶰ ᵘˢᵘᵃʳᶤᵒ 😎 @${num.split('@')[0]}`
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})





		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (smsatx) => {
		try {
                        if (!smsatx.hasNewMessage) return
                        smsatx = JSON.parse(JSON.stringify(smsatx)).messages[0]
			if (!smsatx.message) return
			if (smsatx.key && smsatx.key.remoteJid == 'status@broadcast') return
			if (smsatx.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(smsatx.message)
			const from = smsatx.key.remoteJid
			const type = Object.keys(smsatx.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Guayaquil').format('HH:mm:ss')
			const date = moment.tz('America/Guayaquil').format('DD/MM/YY')
			body = (type === 'conversation' && smsatx.message.conversation.startsWith(prefix)) ? smsatx.message.conversation : (type == 'imageMessage') && smsatx.message.imageMessage.caption.startsWith(prefix) ? smsatx.message.imageMessage.caption : (type == 'videoMessage') && smsatx.message.videoMessage.caption.startsWith(prefix) ? smsatx.message.videoMessage.caption : (type == 'extendedTextMessage') && smsatx.message.extendedTextMessage.text.startsWith(prefix) ? smsatx.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? smsatx.message.conversation : (type === 'extendedTextMessage') ? smsatx.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined
			const isCmd = body.startsWith(prefix)





			/*MENSAJES BOTTT */

			mess = {
				wait: 'Pʳᵒᶜᵉˢᵃᶰᵈᵒ ˢᵒˡᶤᶜᶤᵗᵘᵈ 😎\n\n❗Nᵒ ʰᵃᶜᵉʳ ˢᵖᵃᵐ👏❗\n\nву ATX',
				success: '✔️ Lᶤˢᵗᵒ ✔️',
                                levelon: '*Nᶤᵛᵉˡ ᵃᶜᵗᶤᵛᵃᵈᵒ* ❬ ✅ ❭',
				leveloff: '*Nᶤᵛᵉˡ ᵈᵉˢᵃᶜᵗᶤᵛᵃᵈᵒ*  ❬ ✅ ❭  ',
				levelnoton: '*Nᶤᵛᵉˡ ᶰᵒ ᵃᶜᵗᶤᵛᵃᵈᵒ* ❬ ❎ ❭ ',
				levelnol: '*Nᶤᵛᵉˡ* 0 ',
				error: {
					stick: 'Fᵃˡˡᵒ, ˢᵉ ᵖʳᵒᵈᵘʲᵒ ᵘᶰ ᵉʳʳᵒʳ ᵃˡ ᶜᵒᶰᵛᵉʳᵗᶤʳ ˡᵃ ᶤᵐᵃᵍᵉᶰ ᵉᶰ ᵘᶰ ˢᵗᶤᶜᵏᵉʳ [❎]',
					Iv: '❌ Lᶤᶰᵏ ᶤᶰᵛᵃˡᶤᵈᵒ ❌'
				},
				only: {	
					group: 'Eˢᵗᵉ ᶜᵒᵐᵃᶰᵈᵒ ᵉˢ ˢᵒˡᵒ ᵖᵃʳᵃ ᵍʳᵘᵖᵒˢ [❗]',
					ownerG: 'Eˢᵗᵉ ᶜᵒᵐᵃᶰᵈᵒ ˢᵒˡᵒ ᵖᵘᵉᵈᵉ ˢᵉʳ ᵘᵗᶤˡᶤᶻᵃᵈᵒ ᵖᵒʳ ᵘᶰ ᵃᵈᵐᶤᶰ ᵈᵉˡ ᵍʳᵘᵖᵒ [❗]',
					ownerB: 'Eˢᵗᵉ ᶜᵒᵐᵃᶰᵈᵒ ˢᵒˡᵒ ˡᵒ ᵘˢᵃ ATX [❗]',
					admin: 'Eˢᵗᵉ ᶜᵒᵐᵃᶰᵈᵒ ˢᵒˡᵒ ᵖᵘᵉᵈᵉ ˢᵉʳ ᵘᵗᶤˡᶤᶻᵃᵈᵒ ᵖᵒʳ ᵃᵈᵐᶤᶰᶤˢᵗʳᵃᵈᵒʳᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ [❗]',
					Badmin: 'Eˢᵗᵉ ᶜᵒᵐᵃᶰᵈᵒ ˢᵒˡᵒ ˢᵉ ᵖᵘᵉᵈᵉ ᵘˢᵃʳ ᶜᵘᵃᶰᵈᵒ ᵉˡ ᵇᵒᵗ ˢᵉ ᶜᵒᶰᵛᶤᵉʳᵗᵉ ᵉᶰ ᵃᵈᵐᶤᶰᶤˢᵗʳᵃᵈᵒʳ [❗]',
                                        pegatina: 'Pʳᵒᶜᵉˢᵃᶰᵈᵒ ᵗᵘ ˢᵗᶤᶜᵏᵉʳ 👏\n\n*Rᵉᶜᵘᵉʳᵈᵃ ˡᵒˢ ˢᵗᶤᶜᵏᵉʳˢᵍᶤᶠ ˢᵒᶰ ᵈᵉ 6 ˢᵉᵍᵘᶰᵈᵒˢ❗*\n\nву ATX',
					attp: '*Eˢᵗᵒ ᵖᵘᵉᵈᵉ ᵈᵉᵐᵒʳᵃʳ ᵘᶰᵒˢ ᵐᶤᶰᵘᵗᵒˢ*\n\nву ATX',
					imgs: '*Cᵒᶰᵛᶤʳᵗᶤᵉᶰᵈᵒ ᵗᵘ Sᵗᶤᶜᵏᵉʳ ᵃ Iᵐᵃᵍᵉᶰ 🔄*\n\nᵇʸ ATX',
					mpcancion: '*Cᵒᶰᵛᶤʳᵗᶤᵉᶰᵈᵒ ᵈᵉ MP4 ᵃ MP3 🔄*\n\nву ATX',
					mpa: '*Eˢᵗᵒʸ ᵈᵉᶜᵃʳᵍᵃᶰᵈᵒ ᵗᵘ ᶜᵃᶰᶜᶤᵒᶰ 🔄*\n\nAᵍᵘᵃʳᵈᵉ ᵘᶰ ᵐᵒᵐᵉᶰᵗᵒ, ᵖᵒʳ ᶠᵃᵛᵒʳ\n\nву ATX',
                                        ˣᶰ: '*Eˢᵗᵒʸ ᵈᵉˢᶜᵃʳᵍᵃᶰᵈᵒ ᵗᵘ ᵛᶤᵈᵉᵒ 🔄*\n\nAᵍᵘᵃʳᵈᵉ ᵘᶰ ᵐᵒᵐᵉᶰᵗᵒ, ᵖᵒʳ ᶠᵃᵛᵒʳ\n\nву ATX',
					mpv: '*Eˢᵗᵒʸ ᵈᵉˢᶜᵃʳᵍᵃᶰᵈᵒ ᵗᵘ ᵛᶤᵈᵉᵒ 🔄*\n\nAᵍᵘᵃʳᵈᵉ ᵘᶰ ᵐᵒᵐᵉᶰᵗᵒ, ᵖᵒʳ ᶠᵃᵛᵒʳ\n\nву ATX',
					insta: '*Eˢᵗᵒʸ ᵈᵉˢᶜᵃʳᵍᵃᶰᵈᵒ ᵗᵘ ᵖᵒˢᵗ 🔄*\n\nAᵍᵘᵃʳᵈᵉ ᵘᶰ ᵐᵒᵐᵉᶰᵗᵒ, ᵖᵒʳ ᶠᵃᵛᵒʳ\n\nву ATX',
					musica: '*Rᵉᶜᵘᵉʳᵈᵃ ᶜᵒˡᵒᶜᵃʳ ᵇᶤᵉᶰ ᵉˡ ᶰᵒᵐᵇʳᵉ ᵈᵉ ˡᵃ ᶜᵃᶰᶜᶤᵒᶰ ᵒ ᵉˡ ˡᶤᶰᵏ ᵈᵉˡ ᵛᶤᵈᵉᵒ ᵈᵉ ʸᵒᵘᵗᵘᵇᵉ❗*\n\n*Sᶤ ᵉˡ ᶜᵒᵐᵃᶰᵈᵒ *ᵖˡᵃʸ ᶰᵒ ᶠᵘᶰᶜᶤᵒᶰᵃ ᵘᵗᶤˡᶤᶻᵃ ᵉˡ ᶜᵒᵐᵃᶰᵈᵒ *ᵖˡᵃʸ2*\n\nву ATX',
					musica2: '*Rᵉᶜᵘᵉʳᵈᵃ ᶜᵒˡᵒᶜᵃʳ ᵇᶤᵉᶰ ᵉˡ ᶰᵒᵐᵇʳᵉ ᵈᵉ ˡᵃ ᶜᵃᶰᶜᶤᵒᶰ ᵒ ᵉˡ ˡᶤᶰᵏ ᵈᵉˡ ᵛᶤᵈᵉᵒ ᵈᵉ ʸᵒᵘᵗᵘᵇᵉ❗*\n\n*Sᶤ ᵉˡ ᶜᵒᵐᵃᶰᵈᵒ *ᵖˡᵃʸ2 ᶰᵒ ᶠᵘᶰᶜᶤᵒᶰᵃ ᵘᵗᶤˡᶤᶻᵃ ᵉˡ ᶜᵒᵐᵃᶰᵈᵒ *ᵖˡᵃʸ*\n\nву ATX',
					daftarB: `「NO ESTAS REGISTRADO」\n\nPA NO APARECES EN MI BASE DE DATOS ✋🥸🤚\n\nPᵃʳᵃ ᵖᵒᵈᵉʳ ᵘˢᵃʳᵐᵉ ᵉˢᶜʳᶤᵇᵉ ᵉˡ ˢᶤᵍᵘᵉᶰᵗᵉ ᶜᵒᵐᵃᶰᵈᵒ\n\nCᵒᵐᵃᶰᵈᵒ: ${prefix}ᵈᵃᶠᵗᵃʳ Nᵒᵐᵇʳᵉ\nEʲᵉᵐᵖˡᵒ: ${prefix}ᵈᵃᶠᵗᵃʳ ATX`,
				}
			}





			/* CODIGO DESCONOCIDO????*/

			const botNumber = client.user.jid
			const ownerNumber = ["593997889284@s.whatsapp.net"] // replace this with your number
			const nomorOwner = [ownerNumber]
	                const isGroup = from.endsWith('@g.us')
			
			const sender = isGroup ? smsatx.participant : smsatx.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
                        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false

			const isOwner = ownerNumber.includes(sender)
                        const isUser = user.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '593997889284@s.whatsapp.net'
                        /******Entrada ApiKey******/
                        const BarBarKey = 'Mn2Bf58QHQ8kABoLq80g'
                        /******Fin de la entrada de ApiKey******/

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:smsatx})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: smsatx, contextInfo: {"mentionedJid": memberr}})
			}





           //CASE ANTILINK FUNCION ACTIVADORA*/

	        if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('Eʳᵉˢ ᵘᶰ ᵃᵈᵐᶤᶰᶤˢᵗʳᵃᵈᵒʳ ᵈᵉˡ ᵍʳᵘᵖᵒ, ᵃˢᶤ ᵠᵘᵉ ᶰᵒ ᵗᵉ ᵖʳᵒʰᶤᵇᶤʳᵉ ᵉˡ ᵘˢᵒ ᵈᵉ ᵉᶰˡᵃᶜᵉˢ :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Lᶤᶰᵏ Dᵉᵗᵉᶜᵗᵃᵈᵒ ${sender.split("@")[0]} Uˢᵗᵉᵈ ˢᵉʳᵃ ᵉˣᵖᵘˡˢᵃᵈᵒ ᵈᵉˡ ᵍʳᵘᵖᵒ`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Aᵈᶤᵒˢᶤᵗᵒ...")
		}, 0)
	}





	
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			
			
			
			
			
			
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mSMS\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mSMS\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))






       /******ENTRADA FIN DE FUNCIONES******/
			function addMetadata(packname, author) {	
				if (!packname) packname = 'ATX'; if (!author) author = 'ATX';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {






        /*CASE MENU EN HELP*/

		case 'help':
		case 'menu':   
                client.sendMessage(from, help(prefix, sender), text, {quoted: smsatx})
		break

					
					
					
					
					
					
					
					
					

/*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################*/

		/* MIS CASES*/

                case 'ues':
                client.sendMessage(from, ues(prefix, sender), text, {quoted: smsatx})
                break


                case 'ls':
                client.sendMessage(from, ls(prefix, sender), text, {quoted: smsatx})
                break



					

                case 'atx':
                client.sendMessage(from, atx(prefix, sender), text, {quoted: smsatx})
                break
					

                case 'webs':
                client.sendMessage(from, webs(prefix, sender), text, {quoted: smsatx})
                break


                case 'apps':
                client.sendMessage(from, apps(prefix, sender), text, {quoted: smsatx})
                break


                case 'gits':
                client.sendMessage(from, gits(prefix, sender), text, {quoted: smsatx})
                break


                case 'cmtermux':
                client.sendMessage(from, cmtermux(prefix, sender), text, {quoted: smsatx})
                break


                case 'nicks':
                client.sendMessage(from, nicks(prefix, sender), text, {quoted: smsatx})
                break


                case 'bins':
                client.sendMessage(from, bins(prefix, sender), text, {quoted: smsatx})
                break


                case 'cbins':
                client.sendMessage(from, cbins(prefix, sender), text, {quoted: smsatx})
                break


/*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################*/


					
					
					
					
					
					
					
					
					
		/*CASE OTAK PARTE 2 AUDIO LLAMADO*/

                case 'otak':
		client.sendMessage(from, otak(prefix, sender), text, {quoted: smsatx})
		break





		/*CASE JUEGOS PARTE 2 JUEGOS LLAMADO*/

		case 'juegos':
		client.sendMessage(from, juegos(prefix, sender), text, {quoted: smsatx})
		break





		/*CASE IDIOMA EN BAHASAAA*/

		case 'idioma':
		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: smsatx})
		break





		/*CASE NSFWMENU EN NSFWMENU*/

		case 'nsfwmenu':
		client.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: smsatx})
		break




		/*CASE DESMENU EN DESMENU*/

		case 'desmenu':
		client.sendMessage(from, desmenu(prefix, sender), text, {quoted: smsatx})
		break



		/*CASE VERSION EN VERSION*/

		case 'versión':
		case 'version':
		client.sendMessage(from, version(prefix, sender), text, {quoted: smsatx})
		break




		/*CASE ANTIMENU EN ANTIMENU*/

		case 'antimenu':
		client.sendMessage(from, antimenu(prefix, sender), text, {quoted: smsatx})
		break



		/*CASE WELMENU EN WELMENU*/

                case 'welmenu':
		client.sendMessage(from, welmenu(prefix, sender), text, {quoted: smsatx})
		break




		/*CASE SHANTERA EN SHANTERA*/

		case 'shantera':
		client.sendMessage(from, shantera(prefix, sender), text, {quoted: smsatx})
		break
					
		/*case 'virtex':
	       case 'troleo':
               client.sendMessage(from, virtex(prefix, sender), text, {quoted: smsatx})
               break*/




               /*CASE DEMOTE*/

                            case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (smsatx.message.extendedTextMessage === undefined || smsatx.message.extendedTextMessage === null) return reply('Eᵗᶤᵠᵘᵉᵗᵃ ᵃˡ ᵘˢᵘᵃʳᶤᵒ ᵠᵘᵉ ᵠᵘᶤᵉʳᵉˢ ᵠᵘᶤᵗᵃʳˡᵉ ᵃᵈᵐᶤᶰ')
					mentioned = smsatx.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Pᵉᵈᶤᵈᵒ ʳᵉᶜᶤᵇᶤᵈᵒ✅\n\nRᵉᵗᶤʳᵃᶰᵈᵒ ᶜᵃʳᵍᵒ ᶜᵒᵐᵒ ᵃᵈᵐᶤᶰᶤˢᵗʳᵃᵈᵒʳ :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Pᵉᵈᶤᵈᵒ ʳᵉᶜᶤᵇᶤᵈᵒ✅\n\nRᵉᵗᶤʳᵃᶰᵈᵒ ᶜᵃʳᵍᵒ ᶜᵒᵐᵒ ᵃᵈᵐᶤᶰᶤˢᵗʳᵃᵈᵒʳ @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break





					/*CASE PROMOTE*/

                 case 'promote':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (smsatx.message.extendedTextMessage === undefined || smsatx.message.extendedTextMessage === null) return reply('¡Eᵗᶤᵠᵘᵉᵗᵃ ᵃˡ ᶠᵘᵗᵘʳᵒ ᵃᵈᵐᶤᶰ!')
					mentioned = smsatx.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pᵉᵈᶤᵈᵒ ʳᵉᶜᶤᵇᶤᵈᵒ✅\n\nAᵍʳᵉᵍᵃᶰᵈᵒ ᶜᵃʳᵍᵒ ᶜᵒᵐᵒ ᵃᵈᵐᶤᶰᶤˢᵗʳᵃᵈᵒʳ :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Pᵉᵈᶤᵈᵒ ʳᵉᶜᶤᵇᶤᵈᵒ✅\n\nAᵍʳᵉᵍᵃᶰᵈᵒ ᶜᵃʳᵍᵒ ᶜᵒᵐᵒ ᵃᵈᵐᶤᶰᶤˢᵗʳᵃᵈᵒʳ : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break





/******JUEGOS ATX******/
				
				/*CASE RANK GAY?*/	
case 'gay':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(5)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
gay = random
if (gay < 20 ) {ga = 'Usted es hetero 🤪🤙'} else if (gay == 21 ) {ga = 'Mas o menos 🤔'} else if (gay == 23 ) {ga = 'Mas o menos 🤔'} else if (gay == 24 ) {ga = 'Mas o menos 🤔'} else if (gay == 25 ) {ga = 'Mas o menos 🤔'} else if (gay == 26 ) {ga = 'Mas o menos 🤔'} else if (gay == 27 ) {ga = 'Mas o menos 🤔'} else if (gay == 28 ) {ga = 'Mas o menos 🤔'} else if (gay == 29 ) {ga = 'Mas o menos 🤔'} else if (gay == 30 ) {ga = 'Mas o menos 🤔'} else if (gay == 31 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 32 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 33 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 34 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 35 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 36 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 37 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 38 ) {ga = 'TTengo mi dudas 😑'} else if (gay == 39 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 40 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 41 ) {ga = 'Tengo razon? 😏'} else if (gay == 42 ) {ga = 'Tengo razon? 😏'} else if (gay == 43 ) {ga = 'Tengo razon? 😏'} else if (gay == 44 ) {ga = 'Tengo razon? 😏'} else if (gay == 45 ) {ga = 'Tengo razon? 😏'} else if (gay == 46 ) {ga = 'Tengo razon? 😏'} else if (gay == 47 ) {ga = 'Tengo razon? 😏'} else if (gay == 48 ) {ga = 'Tengo razon? 😏'} else if (gay == 49 ) {ga = 'Tengo razon? 😏'} else if (gay == 50 ) {ga = 'Eres o no? 🧐'} else if (gay > 51) {ga = 'Usted es gay 🥸'}
hasil = `${rate}Usted es ${random}% gay\n\n${ga}`
reply(hasil)
break





/*CASE JUEGOS CUTIES?*/

case 'cuties':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(9)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
cuties = random
if (cuties < 20 ) {cu = 'Mi loco usted va para el cielo 👏'} else if (cuties == 21 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 23 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 24 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 25 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 26 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 27 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 28 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 29 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 30 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 31 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 32 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 33 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 34 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 35 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 36 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 37 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 38 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 39 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 40 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 41 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 42 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 43 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 44 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 45 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 46 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 47 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 48 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 49 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 50 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties > 51) {cu = 'Señores un autentico FAN DE CUTIES esta en el grupo 🥸'}
hasil = `${rate}Resultado ${random}% fan de cuties\n\n${cu}`
reply(hasil)
break
		



		/*CASE JUEGO RANK FACHEROS*/		  
case 'rankfacheros':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'Tᵒᵖ 5 ˡᵒˢ ᵐᵃˢ ᶠᵃᶜʰᵉʳᵒˢ ᵈᵉˡ ᵍʳᵘᵖᵒ😎\n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hᵘᵇᵒ ᵘᶰ ᵉʳʳᵒʳ ᶤᶰᵗᵉᶰᵗᵃˡᵒ ᶰᵘᵉᵛᵃᵐᵉᶰᵗᵉ :/')
}
break				




				
				/*CASE WAMEEE*/

       				case 'wa.me':
				  case 'wame':
  client.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Sᵒˡᶤᶜᶤᵗᵃᵈᵒ ᵖᵒʳ_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSᵘ ˡᶤᶰᵏ ᵈᵉ Wʰᵃᵗˢᵃᵖᵖ : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}?text=Hola%20te%20contacto%20a%20traves%20del%20bot%20ATX*\n\n*O (Mᵃᶰᵈᵃˡᵉ ᵃᵐᵒʳ )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: smsatx } )
				break
				if (data.error) return reply(data.error)
				reply(data.result)
				break






	/** CASE CREADOR */

	case 'creador':
	    case 'owner':
                case 'creator':
                client.sendMessage(from, {displayname: "𐧶 𝑨𝒇𝒌-1 .", vcard: vcard}, MessageType.contact, { quoted: smsatx})
		client.sendMessage(from, 'Aʳʳᶤᵇᵃ ᵉˢᵗᵃ ᵉˡ ᶰᵘᵐᵉʳᵒ ᵈᵉˡ ᶜʳᵉᵃᵈᵒʳ ᵈᵉˡ ᵇᵒᵗ <ATX> \n\n O puedes contactarlo y enviarle un mensaje desde el siguiente enlace:\n http://Contac.ATX@is.gd/Flgs1F',MessageType.text, { quoted: smsatx} )
                const none = fs.readFileSync('./mp3/grito.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: smsatx, mimetype: 'audio/mp4', ptt:true})
                break




    /*CASE HIDETAG*/

	case 'hidetag':
                client.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: smsatx
                }
              await client.sendMessage(from, options, text)
               break




               /*CASE YTMP 3*/

                                case 'ytmp3':
					if (args.length < 1) return reply('Donde esta la URL?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					reply(mess.only.mpa)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/yta2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*DESCARGA EXITOSA ✅*\n◉ *Título* : ${anu.title}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: smsatx, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: smsatx})
					break





				/*CASE YTMP 4*/

				case 'ytmp4':
					if (args.length < 1) return reply('Donde esta la URL?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					reply(mess.only.mpv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*DESCARGA EXITOSA ✅*\n◉ *Título* : ${anu.title}\n\n*ESPERE ENVIANDO SU ARCHIVO MP4 ⚠*`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: smsatx, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: smsatx})
					break





					/*CASE TTSSS*/

			        case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, 'Cᵘᵃˡ ᵉˢ ᵉˡ ᶜᵒᵈᶤᵍᵒ ᵈᵉ ᶤᵈᶤᵒᵐᵃ?\n\nPᵃʳᵃ ˢᵃᵇᵉʳ ᵉˡ ᶜᵒᵈᶤᵍᵒ ᵈᵉ ᶤᵈᶤᵒᵐᵃ ᶜᵒˡᵒᵠᵘᵉ ᵉˡ ᶜᵒᵐᵃᶰᵈᵒ ᶤᵈᶤᵒᵐᵃ', text, {quoted: smsatx})
                                   if (!isUser) return reply(mess.only.daftarB)
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Y ᵉˡ ᵗᵉˣᵗᵒ?', text, {quoted: smsatx})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Tᵉˣᵗᵒ ᵈᵉᵐᵃˢᶤᵃᵈᵒ ˡᵃʳᵍᵒ')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('???')
							client.sendMessage(from, buff, audio, {quoted: smsatx, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break



					/*CASE LISTADMINS*/

                case 'listadmins':
				case 'adminlist':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista De Nefastos Del Grupo*${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break






			case 'setprefix':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`El prefijo se ha cambiado correctamente a : ${prefix}`)
					break




					/*CASE TODOS*/

			case 'todos':
			case 'tagall':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 MENCIONANDO 〙✪══\n╠➥'+teks+'╚═〘 by ATX 〙', members_id, true)
					break








				case 'bc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !smsatx.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(smsatx).replace('quotedM','m')).message.extendedTextMessage.contextInfo : smsatx
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISIÓN 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 ATX 」*\n\n${body.slice(4)}`)
						}
						reply('Transmisión exitosa')
					}
					break





					case 'bcgc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !smsatx.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(smsatx).replace('quotedM','m')).message.extendedTextMessage.contextInfo : smsatx
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 GRUPO BC 」*\n*Grupo* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Grupo de transmisión exitoso')
					}
					




					
                     case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Chao Pa👋', text) // ur cods
					}, 0)
                     break
       /*case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `El NEFASTO de este grupo es :@${from.split("-")[0]}`, 
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: smsatx } )
				break*/





				/*CASE KICK */

					case 'kick':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (smsatx.message.extendedTextMessage === undefined || smsatx.message.extendedTextMessage === null) return reply('Eᵗᶤᵠᵘᵉᵗᵃ ᵃˡ ᵘˢᵘᵃʳᶤᵒ ᵃ ᵉˡᶤᵐᶤᶰᵃr')
					mentioned = smsatx.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Oʳᵈᵉᶰ ʳᵉᶜᶤᵇᶤᵈᵃ, ᵃᵈᶤᵒˢ 👋 :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pᵉᵈᶤᵈᵒ ʳᵉᶜᶤᵇᶤᵈᵒ, ᶜʰᵃᵒ 👋 : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					client.sendMessage(mentioned, 'Cʰᵃᵒ...', text)
					}
					break





                  /*CASE ANTILINK ACTIVACION*/

                                        case 'antilink':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Cᵒˡᵒᵠᵘᵉ *ᵃᶰᵗᶤᵐᵉᶰᵘ ᵖᵃʳᵃ ᵛᵉʳ ˡᵒˢ ᶜᵒᵐᵃᶰᵈᵒˢ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Cᵒˡᵒᵠᵘᵉ *ᵃᶰᵗᶤᵐᵉᶰᵘ ᵖᵃʳᵃ ᵛᵉʳ ˡᵒˢ ᶜᵒᵐᵃᶰᵈᵒˢ')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Lᵃ ᶠᵘᶰᶜᶤᵒᶰ ᵈᵉ ᵃᶰᵗᶤˡᶤᶰᵏ ᵉˢᵗᵃ ʰᵃᵇᶤˡᶤᵗᵃᵈᵃ ᵉᶰ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ❬ ✅ ❭ ')
						client.sendMessage(from,`Aᵗᵉᶰᶜᶤᵒᶰ ᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵐᶤᵉᵐᵇʳᵒˢ ᵃᶜᵗᶤᵛᵒˢ ᵈᵉ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ 📣\n\nEˡ ᵃᶰᵗᶤˡᶤᶰᵏ ᵉˢᵗᵃ ᵃᶜᵗᶤᵛᵒ\n\nY ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶤᶰˢ ᵈᵉ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ᵖᵒᵈʳᵃᶰ ᵖᵃˢᵃʳ ᵉˡ ᵉᶰˡᵃᶜᵉ\n\nSᶤ ᵃˡᵍᵘᶰ ᵖᵃʳᵗᶤᶜᶤᵖᵃᶰᵗᵉ ᵠᵘᵉ ᶰᵒ ˢᵉᵃ ᵃᵈᵐᶤᶰ ᵉᶰᵛᶤᵃ ᵘᶰ ᵉᶰˡᵃᶜᵉ ᵈᵉ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ᵘ ᵒᵗʳᵒ ᵍʳᵘᵖᵒ ˢᵉʳᵃ ᵉˣᵖᵘˡˢᵃᵈᵒ ᵈᵉ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ᵈᵉ ᶤᶰᵐᵉᵈᶤᵃᵗᵒ\n Bʸ Bᵒᵗ ATX`, text)
					} else if (Number(args[0]) === 0) {
						antilink.splice(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Lᵃ ᶠᵘᶰᶜᶤᵒᶰ ᵈᵉ ᵃᶰᵗᶤˡᶤᶰᵏ ᵉˢᵗᵃ ᵈᵉˢʰᵃᵇᶤˡᶤᵗᵃᵈᵃ ᵉᶰ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ❬ ✅ ❭')
					} else {
						reply('Cᵒˡᵒᵠᵘᵉ *ᵃᶰᵗᶤᵐᵉᶰᵘ ᵖᵃʳᵃ ᵛᵉʳ ˡᵒˢ ᶜᵒᵐᵃᶰᵈᵒˢ')
					}
					break





					/*CASE LINKGC*/

			        case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				    client.updatePresence(from, Presence.composing) 
				    if (!isGroup) return reply(mess.only.group)
                                     if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await client.groupInviteCode (from)
					yeh = `Aᵠᵘᶤ ᵉˢᵗᵃ ᵉˡ ˡᶤᶰᵏ ᵈᵉˡ ᵍʳᵘᵖᵒ 🤑\n\nhttps://chat.whatsapp.com/${linkgc}\n\nLᶤᶰᵏ Dᵉˡ Gʳᵘᵖᵒ *${groupName}*`
					client.sendMessage(from, yeh, text, {quoted: smsatx, detectLinks: false})
					break





					/*CASE QRCODEEE*/

                case 'qrcode':
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: smsatx})
				break




			/*CASE CLOSEGC */
		          		
			case 'closegc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = smsatx.participant
					const close = {
					text: `Gʳᵘᵖᵒ ᶜᵉʳʳᵃᵈᵒ ᵖᵒʳ ᵉˡ ᵃᵈᵐᶤᶰᶤˢᵗʳᵃᵈᵒʳ @${nomor.split("@s.whatsapp.net")[0]}\nAʰᵒʳᵃ *ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶤᶰᶤˢᵗʳᵃᵈᵒʳᵉˢ* ᵖᵘᵉᵈᵉ ᵉᶰᵛᶤᵃʳ ᵐᵉᶰˢᵃʲᵉˢ`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break





				/*CASE OPENGC */

                case 'opengc':
                case 'bukagc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Gʳᵘᵖᵒ ᵃᵇᶤᵉʳᵗᵒ ᵖᵒʳ ᵉˡ ᵃᵈᵐᶤᶰᶤˢᵗʳᵃᵈᵒʳ @${sender.split("@")[0]}\nAʰᵒʳᵃ *ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶤᶜᶤᵖᵃᶰᵗᵉˢ* ᵖᵘᵉᵈᵉᶰ ᵉᶰᵛᶤᵃʳ ᵐᵉᶰˢᵃʲᵉˢ`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessage(from, open, text, {quoted: smsatx})
					break




				/**CASE ATTPPP*/

				                case 'attp':
						if (!isUser) return reply(mess.only.daftarB)
					        if (args.length < 1) return reply(`¿Dᵒᶰᵈᵉ ᵉˢᵗᵃ ᵉˡ ᵗᵉˣᵗᵒ?\n*Eʲᵉᵐᵖˡᵒ:* ${prefix}ᵃᵗᵗᵖ ATX`)
						reply(mess.only.attp)
					        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						client.sendMessage(from, attp2, MessageType.sticker, {quoted: smsatx})
						break





				/*CASE STICKER MAKERRR */


				case 's':
				case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
			        if (!isUser) return reply(mess.only.daftarB)
				if ((isMedia && !smsatx.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(smsatx).replace('quotedM','m')).message.extendedTextMessage.contextInfo : smsatx
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									 if (error) {
											 reply(ind.stikga())
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: smsatx})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && smsatx.message.videoMessage.seconds < 11 || isQuotedVideo && smsatx.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(smsatx).replace('quotedM','m')).message.extendedTextMessage.contextInfo : smsatx
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.only.pegatina)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`[❗] Fallo, al momento de convertir ${tipe} al sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									if (error) {
											 reply(ind.stikga())
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: smsatx})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Envíe una imagen con el comando ${prefix}s o etiqueta a una imagen que ya se haya enviado`)
					}
					break
			            case 'toimg':
				    client.updatePresence(from, Presence.composing)
                                    if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('❌ Solo stickers')
					reply(mess.only.imgs)
					encmedia = JSON.parse(JSON.stringify(smsatx).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el sticker en imágenes')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: smsatx, caption: '*⌈ Iᵐᵃᵍᵉᶰ ᶜᵒᶰᵛᵉʳᵗᶤᵈᵃ ✅ ⌉*\n\nву ATX'})
						fs.unlinkSync(ran)
					})
					break
                        case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('❌ Solo videos')
					reply(mess.only.mpcancion)
					encmedia = JSON.parse(JSON.stringify(smsatx).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el video a mp3')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: smsatx})
						fs.unlinkSync(ran)
					})
					break






					/*CASE TOIMGGG*/

			            case 'toimg':
				    client.updatePresence(from, Presence.composing)
                                    if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('Sᵒˡᵒ ˢᵗᶤᶜᵏᵉʳˢ ❌')
					reply(mess.only.imgs)
					encmedia = JSON.parse(JSON.stringify(smsatx).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Nᵒ ˢᵉ ᵖᵘᵈᵒ ᶜᵒᶰᵛᵉʳᵗᶤʳ ᵉˡ ˢᵗᶤᶜᵏᵉʳ ᵉᶰ ᶤᵐᵃᵍᵉᶰ ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: smsatx, caption: '*⌈ Iᵐᵃᵍᵉᶰ ᶜᵒᶰᵛᵉʳᵗᶤᵈᵃ ✅ ⌉*\n\nву ATX'})
						fs.unlinkSync(ran)
					})
					break




					/*CASE TOMP333*/

                        case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('Sᵒˡᵒ ᵛᶤᵈᵉᵒˢ ❌')
					reply(mess.only.mpcancion)
					encmedia = JSON.parse(JSON.stringify(smsatx).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Nᵒ ˢᵉ ᵖᵘᵈᵒ ᶜᵒᶰᵛᵉʳᵗᶤʳ ᵉˡ ᵛᶤᵈᵉᵒ ᵃ ᵐᵖ3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: smsatx})
						fs.unlinkSync(ran)
					})
					break



case 'play':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?')
		if (!isUser) return reply(mess.only.daftarB)
                reply(mess.only.musica)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=hamilton20`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*⌈ Canción Encontrada ✅ ⌉*\n◉ *Título* : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: smsatx, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: smsatx})
                break
		case 'play2':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?')
		if (!isUser) return reply(mess.only.daftarB)
                reply(mess.only.musica2)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=shanduy20`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*⌈ Canción Encontrada ✅ ⌉*\n◉ *Título* : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: smsatx, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: smsatx})
                break


					case 'daftar':
					client.updatePresence(from, Presence.composing)
					if (isUser) return reply('Ya estas registrado 🧐')
					if (args.length < 1) return reply(`Incorrecto \nComando : ${prefix}daftar Nombre\nComando : ${prefix}daftar ATX`)
					var reg = body.slice(8)
					var nombre = reg.split("|")[0];
                                                user.push(sender)
						fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
						client.sendMessage(from, `\`\`\`REGISTRADO ✅\`\`\`\n\n\`\`\`DNI: Epico 🥸\`\`\`\n\n\`\`\`Hora EC: ${time}\`\`\`\n\n\`\`\`Fecha: ${date}\`\`\`\n\n\`\`\`[Usuario]: ${nombre}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`Para usar el bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}help\`\`\`\n\`\`\`\nTotal de usuários ${user.length}\`\`\``, text, {quoted: smsatx})
					break






					/*CASE ACTIVAR WELCOME*/

                                case 'welcome':
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Pᵃʳᵃ ᵃᶜᵗᶤᵛᵃʳ ᵉˢᵗᵃ ᶠᵘᶰᶜᶤᵒᶰ ᶜᵒˡᵒᶜᵃ *ʷᵉˡᶜᵒᵐᵉ 1')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Yᵃ ᵉˢᵗᵃ ᵃᶜᵗᶤᵛᵃᵈᵃ!!!')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('Lᵃ ᶠᵘᶰᶜᶤᵒᶰ ᵈᵉ ᵇᶤᵉᶰᵛᵉᶰᶤᵈᵃ ᵉˢᵗᵃ ʰᵃᵇᶤˡᶤᵗᵃᵈᵃ ᵉᶰ ᵉˢᵗᵉ ᵍʳᵘᵖᵒYᵃ ᵉˢᵗᵃ ᵃᶜᵗᶤᵛᵃᵈᵃ!!! ❬ ✅ ❭ ')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('Lᵃ ᶠᵘᶰᶜᶤᵒᶰ ᵈᵉ ᵇᶤᵉᶰᵛᵉᶰᶤᵈᵃ ᵉˢᵗᵃ ᵈᵉˢʰᵃᵇᶤˡᶤᵗᵃᵈᵃ ᵉᶰ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ❬ ✅ ❭ ')
					} else {
						reply('Eˢᶜʳᶤᵇᵉ ᵉˡ ᶜᵒᵐᵃᶰᵈᵒ 1 ᵖᵃʳᵃ ᵃᶜᵗᶤᵛᵃʳˡᵒ ʸ 0 ᵖᵃʳᵃ ᵈᵉˢᵃᶜᵗᶤᵛᵃʳˡᵒ Eʲᵉᵐᵖˡᵒ: *ʷᵉˡᶜᵒᵐᵉ 1')
					}
					break





                               case 'nsfwneko':
				    try{
						if (!isNsfw) return reply('❌ *NSFW NO ESTA ACTIVADO* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: smsatx, caption: 'mesum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break





					/*CASE NSFW*/

                              	case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Dᶤᵍᶤᵗᵃ 1 ᵖᵃʳᵃ ᵃᶜᵗᶤᵛᵃʳ ˡᵒˢ NSFW')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Recursos Activados ✅')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('Lᵃ ᶠᵘᶰᶜᶤᵒᶰ NSFW ᵉˢᵗᵃ ʰᵃᵇᶤˡᶤᵗᵃᵈᵒ ᵉᶰ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ❬ ✅ ❭')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('Lᵃ ᶠᵘᶰᶜᶤᵒᶰ NSFW ᵉˢᵗᵃ ᵈᵉˢʰᵃᵇᶤˡᶤᵗᵃᵈᵒ ᵉᶰ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ❬ ✅ ❭')
					} else {
						reply('Dᶤᵍᶤᵗᵉ 1 ᵖᵃʳᵃ ᵃᶜᵗᶤᵛᵃʳˡᵒ, 0 ᵖᵃʳᵃ ᵈᵉˢᵃᶜᵗᶤᵛᵃʳˡᵒ')
					}
					break	




				case 'randomanime':
					gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: smsatx})
					break						
                             case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
		                        client.deleteMessage(from, { id: smsatx.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
           
						/*CASE NFSW 1 2 3 4, ETC*/

					case 'nsfwbobs': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: smsatx, caption: 'Quiero ver tetas'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break





					case 'nsfwblowjob':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: smsatx, caption: 'No antojen'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break





					case 'nsfwneko':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://api.computerfreaker.cf/v1/neko`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: smsatx, caption: 'Pero que wea?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break




					case 'nsfwfeets':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: smsatx, caption: 'MMMMM PATAS'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌') 
						}
						break





		

                                case 'ping':    
			   	        if (!isUser) return reply(mess.only.userB)
                                        const timestamp = speed();
                                        const latensi = speed() - timestamp
                                        client.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        client.sendMessage(from, `Velocidad: *${latensi.toFixed(4)} _Second_*\nDevice: *Alcatel Pixi 4*\nRAM: *6Mb*\nData: *10GB*\nJaringan: *2G*\nStatus: *Bateria Baja*`, text, { quoted: smsatx})
                                        break
                default:


/*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################*/

					/*MIS PRUEBAS PARA MIS UTILIDADES*/

		/* MIS MENSAJESS*/

		if (budy.includes(`Trabajos`)) {
                  reply(`No hay`)
                  }

					
					
		if (budy.includes(`Tareas`)) {
                  reply(`No hay`)
                  }
					
					

		if (budy.includes(`Enlaces`)) {
                  reply(`No hay`)
                  }
					
					

		if (budy.includes(`Libros`)) {
                  reply(`No hay`)
                  }
					

		if (budy.includes(`Inforrmacion`)) {
                  reply(`No hay`)
                  }
					


		/* MIS MENSAJES ATX*/

		if (budy.includes(`Links`)) {
                  reply(`No hay`)
                  }


/*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################
*############################################################################################################################################################*/

					
					
					




       /*CASE OTAK SRC AUDIOS*/

        if (budy.startsWith(`la toca 7w7`)) {
        const none = fs.readFileSync('./anishan/anime5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: smsatx, mimetype: 'audio/mp4', ptt:true})
                  }

       




	}
}
starts()
