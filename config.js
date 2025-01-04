const fs = require('fs')
const chalk = require('chalk')
global.baileys = require('@whiskeysockets/baileys') 
global.namabot = 'BOT AUTO ORDER FACA STORE'
global.botnomer = "6285798482315"
global.namaowner = 'Faca'
global.usePairingCode = true // false untuk QR
global.owner = ['6282125841007']
global.ownernomer = "6282125841007"
global.premium = ['6282125841007']
global.nomorOwner = ['6282125841007']
global.packname = 'ZXcoderID'
global.author = 'MultiDevice'
global.apikeyhost = ''
global.webapi = ''
const apichan = 'YgAQyBwgA'
global.api = {
    web: '',
    keys: apichan
}
global.qrispayment = 'https://files.catbox.moe/09trwz.jpg' //upload your image in here https://catbox.moe/
global.saluran = '' // Opsional 
global.idsal = "120363285464032065@newsletter" // Opsional
global.wm = `Dibuat Oleh: © By Faca Store` // footer text
global.prefa = ['#']
global.cbu = '⊷'
global.wm2 = `Faca Store`
global.mess = {
    wait: 'Sabar Lagi Proses ⏳',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    error: '🚫 Fitur Sedang Error !',
}
global.OnlyOwn = mess.owner
global.cover = ['https://telegra.ph/file/057e9df0c58c02ca4dc43.jpg','https://telegra.ph/file/a232efa661d4ee2070129.jpg','https://telegra.ph/file/e6780870b24e6850fea1a.jpg','https://telegra.ph/file/26c6bfd6c8cca9e5a334b.jpg','https://telegra.ph/file/f1830240f4793bd418d3e.jpg','https://telegra.ph/file/b605cf8b62e53c824a347.jpg']
global.chanzximg = pickRandom(cover);

global.thumb = fs.readFileSync('./chanzx.jpg')
global.botname = 'BOT AUTO ORDER FACA STORE'
global.ttname = ''

global.dashmenu = '┅━━━━━═┅═❏ *🅓🅐🅢🅗🅑🅞🅐🅡🅓* ❏═┅═━━━━━┅'
global.top = '❏––––––『'                       //top
global.header = '』––––––'                        //header
global.bodyc = '┊✦ '                            //body
global.footerc = '┗━═┅═━––––––๑\n'                //footer
global.xxc = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.xxi = '┊'                              //pembatas menu selector

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}
