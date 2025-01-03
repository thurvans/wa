/*
    * Created By QyuuNee
    * Subscribe Biar Work :3
    * Minimal Credit Nya Lah
    * Buy Panel? 088210828960
    * SC INI GRATIS! LU JUAL? DEPET TIKET NERAKA
*/

/*
    * Recode By IchanZX
    * Subscribe YT: IchanGaming
    * Minimal Credit Nya Lah
    * Buy Panel? zxcoderid.xyz
    * MINIMAL BISA NGODING TOLOL JANGAN JUAL DOANG
*/

require('./config')
const {
  default: makeWaSocket,
	connConnect,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  PHONENUMBER_MCC,
  jidDecode,
  proto,
  makeCacheableSignalKeyStore,
} = global.baileys
const fs = require('fs')
const os = require('os')
const lolcatjs = require('lolcatjs')
const pino = require('pino')
const CFonts = require('cfonts')
const logg = require('pino')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const owo = JSON.parse(fs.readFileSync('./lib/lowdb/adapters/koi.json'))
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
const {
        Smsg,
        Socket
    } = require('./lib/connect');
const simple = require('./lib/simple') 
const connect = require("./server.js")
const readline = require('readline');
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}
const PORT = process.env.PORT || 3000 
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const useMobile = process.argv.includes('--mobile')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

// Read line interface
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`./src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    group: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    donate: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
//const { version, isLatest } = await fetchLatestBaileysVersion()
// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)
const getMessage = async (key) => {
if(store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'hallo'
}
}

// ============================== STARTING INPUT CODE FROM BOT ============================== //
CFonts.say('OFFICIAL ZXCODERID', {
   font: 'tiny',
   align: 'center',
   colors: ['#f80'],
   transitionGradient: true,
   gradient: ['#12c2e9', '#c471ed'],
}), CFonts.say('✘ Developer: IchanZX - ZXcoderID ✘', {
   colors: ['system'],
   font: 'console',
   align: 'center',
   gradient: ['#DCE35B', '#45B649'],
   transitionGradient: true,
})
lolcatjs.fromString(`
⠄⣾⣿⡇⢸⣿⣿⣿⠄⠈⣿⣿⣿⣿⠈⣿⡇⢹⣿⣿⣿⡇⡇⢸⣿⣿⡇⣿⣿⣿
⢠⣿⣿⡇⢸⣿⣿⣿⡇⠄⢹⣿⣿⣿⡀⣿⣧⢸⣿⣿⣿⠁⡇⢸⣿⣿⠁⣿⣿⣿
⢸⣿⣿⡇⠸⣿⣿⣿⣿⡄⠈⢿⣿⣿⡇⢸⣿⡀⣿⣿⡿⠸⡇⣸⣿⣿⠄⣿⣿⣿
⢸⣿⡿⠷⠄⠿⠿⠿⠟⠓⠰⠘⠿⣿⣿⡈⣿⡇⢹⡟⠰⠦⠁⠈⠉⠋⠄⠻⢿⣿
⢨⡑⠶⡏⠛⠐⠋⠓⠲⠶⣭⣤⣴⣦⣭⣥⣮⣾⣬⣴⡮⠝⠒⠂⠂⠘⠉⠿⠖⣬
⠈⠉⠄⡀⠄⣀⣀⣀⣀⠈⢛⣿⣿⣿⣿⣿⣿⣿⣿⣟⠁⣀⣤⣤⣠⡀⠄⡀⠈⠁
⠄⠠⣾⡀⣾⣿⣧⣼⣿⡿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣧⣼⣿⣿⢀⣿⡇⠄
⡀⠄⠻⣷⡘⢿⣿⣿⡿⢣⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣜⢿⣿⣿⡿⢃⣾⠟⢁⠈
⢃⢻⣶⣬⣿⣶⣬⣥⣶⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣷⣾⣾⢣
⡄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠘
⣿⡐⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢠⢃
⣿⣷⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⠆⣼
⣿⣿⣷⡀⠄⠈⠛⢿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⠿⠋⠠⠂⢀⣾⣿
⣿⣿⣿⣧⠄⠄⢵⢠⣈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⡁⢰⠏⠄⠄⣼⣿⣿
⢻⣿⣿⣿⡄⢢⠨⠄⣯⠄⠄⣌⣉⠛⠻⠟⠛⢋⣉⣤⠄⢸⡇⣨⣤⠄⢸⣿⣿⣿
`)
console.log(`
Operating System Information:
- Platform: ${os.platform()}
- Release: ${os.release()}
- Architecture: ${os.arch()}
- Hostname: ${os.hostname()}
- Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
- Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
- Uptime: ${os.uptime()} seconds
\n`)
// ============================== STARTING INPUT CODE FROM BOT ============================== //

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState(`./session`)
    const auth = {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, logg().child({ level: 'fatal', stream: 'store' })),
    }

    const { version, isLatest } = await fetchLatestBaileysVersion()
const chanzx = makeWaSocket({
version,
printQRInTerminal: !global.usePairingCode,
logger: logg({ level: 'fatal' }),
auth,
getMessage,
//browser: ['IOS','IOS','2.1.0'],
//browser: ['Chrome (Linux)'],
//browser: ['Chrome (Linux)', '', ''],
//browser: Browsers.macOS('Desktop'),
//Jika ubuntu mengalami gangguan, ganti browser di atas
browser: ["Ubuntu","Chrome","20.0.04"],
connectTimeoutMs: 60_000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
})

if (global.usePairingCode && !chanzx.authState.creds.registered) {
    console.log('Masukkan Nomor WhatsApp Kamu Diawali Oleh angka 62:')
		let phoneNumber = await question('Nomor Whatsapp Ter-Input: ')
		phoneNumber = phoneNumber.replace(/\D/g, '')
		let code = await chanzx.requestPairingCode(phoneNumber)
		console.log(`┏━━  *「 Kode Pairing Kamu」*\n┃ ❖ ${code}\n┗━━━━━━━━━━━━━━━━━━┅`)
	}

/*chanzx.ev.on('messages.upsert', async mek => {
try {
if (!mek.messages) return
msg = mek.messages[0]
require("./chanzx")(chanzx, mek, store, msg)
} catch (err) {
            console.log(err)
        }
    })*/
    
    chanzx.ev.on('messages.upsert', async chatUpdate => {
            try {
                mek = chatUpdate.messages[0];
                if (!mek.message) {
                    return;
                }
                mek.message = Object.keys(mek.message)[0] === 'ephemeralMessage' ? mek.message.ephemeralMessage.message : mek.message;
                if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                    return;
                }
                if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) {
                    return;
                }
                m = Smsg(chanzx, mek, store);
                require("./chanzx.js")(chanzx, m, chatUpdate, store);
            } catch (err) {
                console.log(err);
            }
        });

    chanzx.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
// anticall auto block
    chanzx.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await chanzx.sendContact(callerId, global.owner)
    chanzx.sendMessage(callerId, { text: `? *Sistem otomatis block!*\n? *Jangan menelpon bot*!\n*? Silahkan Hubungi Owner Untuk Dibuka !*`}, { quoted : pa7rick })
    await sleep(8000)
    await chanzx.updateBlockStatus(callerId, "block")
    }
    })
    // _____________________/// ZXCODERID.XYZ NUMPANG WM GW // _____________________///
    chanzx.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await chanzx.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
    // _____________________/// ZXCODERID.XYZ NUMPANG WM GW // _____________________///
     chanzx.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
//await fs.writeFileSync(trueFileName, buffer)
return buffer}
// _____________________/// ZXCODERID.XYZ NUMPANG WM GW // _____________________///
chanzx.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await chanzx.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await chanzx.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://tinyurl.com/yx93l6da'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await chanzx.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://tinyurl.com/yx93l6da'
                }
               if (anu.action == 'add') {
                 let a = `*Hello @${num.split("@")[0]}, ?? Welcome To ${metadata.subject}*\n*Kami Harap Kamu Merasa Nyaman Di Grup Ini Dan Jangan Lupa Membaca Deskripsi Grup ??*`
                    chanzx.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         externalAdReply: {
         title: `${namabot}`,
         body: `${namaowner}`,
         thumbnailUrl: ppuser,
         sourceUrl: "",
         mediaType: 1,
         renderLargerThumbnail: true
    }}})
                } else if (anu.action == 'remove') {
                    let a = `*Kami harap orang yang mencintai @${num.split("@")[0]} akan merasa nyaman saat mengunjungi profilnya untuk mengenang dan merayakan momen hidupnya* ????.`
      chanzx.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         externalAdReply: {
         title: `${namabot}`,
         body: `${namaowner}`,
         thumbnailUrl: ppuser,
         sourceUrl: "",
         mediaType: 1,
         renderLargerThumbnail: true
    }}})
                } else if (anu.action == 'promote') {
                    let a = `Congratulations @${num.split("@")[0]}, on being promoted to admin of this group ${metadata.subject} ??`
                    chanzx.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         externalAdReply: {
         title: `${namabot}`,
         body: `${namaowner}`,
         thumbnailUrl: ppuser,
         sourceUrl: "https://instagram/@dryan.pu",
         mediaType: 1,
         renderLargerThumbnail: true
    }}})
                } else if (anu.action == 'demote') {
                    let a = `nice try for the demotion to become an ordinary member`
                    chanzx.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         externalAdReply: {
         title: `${namabot}`,
         body: `${namaowner}`,
         thumbnailUrl: ppuser,
         sourceUrl: "https://instagram/@dryan.pu",
         mediaType: 1,
         renderLargerThumbnail: true
    }}})
              }
            }
        } catch (err) {
            console.log("Eror Di Bagian Welcome Group "+err)
        }
    })
    
    	chanzx.ev.on('creds.update', saveCreds)
    	
    	chanzx.public = true

chanzx.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') { lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? connectToWhatsApp() : ''
} else if (connection === "open") { chanzx.sendMessage(global.ownernomer + "@s.whatsapp.net", { text: `❇️ KONEKSI BERHASIL\n😊 Gunakan Script ini dengan baik ya Jangan Dijual\n\n🍀 Jangan Lupa Subscript Youtube: IchanGaming` }); }
console.log(update)}
)}

connectToWhatsApp()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})