const chalk = require('chalk')
const fs = require('fs')

const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
    })
  );
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

global.ichanzxx = (prefix) => {
return ctext(`${top} *M E N U* ${header}
${xxi} ${prefix}menuai
${xxi} ${prefix}menuanime
${xxi} ${prefix}menudatabase
${xxi} ${prefix}menurpg
${xxi} ${prefix}menudownload
${xxi} ${prefix}menugame
${xxi} ${prefix}menugroup
${xxi} ${prefix}menuother
${xxi} ${prefix}menuowner
${xxi} ${prefix}menusearch
${xxi} ${prefix}menutools
${top} *M E N U* ${header}`)}

global.menuai = (prefix) => {
return ctext(`${top}*A I* ${header}
${xxi} ${prefix}ai
${xxi} ${prefix}openai
${xxi} ${prefix}chatgpt
${xxi} ${prefix}simi
${xxi} ${prefix}bot
${xxi} ${prefix}ichan
${xxi} ${prefix}aipicture
${xxi} ${prefix}jadianime
${xxi} ${prefix}text2img
${xxi} ${prefix}bardimg
${top} *A I* ${header}`)}

global.menuanime = (prefix) => {
return ctext(`${top} *A N I M E* ${header}
${xxi} ${prefix}waifu
${xxi} ${prefix}neko
${xxi} ${prefix}anime
${xxi} ${prefix}carianime
${top} *A N I M E* ${header}`)}

global.menudatabase = (prefix) => {
return ctext(`${top} *D A T A B A S E* ${header}
${xxi} ${prefix}
${top} *D A T A B A S E* ${header}`)}

global.menuai = (prefix) => {
return ctext(`${top}*R P G* ${header}
${xxi} ${prefix}daftar
${xxi} ${prefix}unreg
${xxi} ${prefix}bank
${xxi} ${prefix}banknabung
${xxi} ${prefix}banknarik
${xxi} ${prefix}berburu
${xxi} ${prefix}shop
${xxi} ${prefix}createcode
${xxi} ${prefix}reedem
${xxi} ${prefix}daily
${top} *R P G* ${header}`)}

global.menudownload = (prefix) => {
return ctext(`${top} *D O W N L O A D* ${header}
${xxi} ${prefix}ytmp4
${xxi} ${prefix}ytmp3
${xxi} ${prefix}tiktok
${xxi} ${prefix}mediafire
${xxi} ${prefix}facebook
${xxi} ${prefix}capcut
${xxi} ${prefix}igstory
${xxi} ${prefix}twitter
${xxi} ${prefix}instagram
${top} *D O W N L O A D* ${header}`)}

global.menugame = (prefix) => {
return ctext(`${top} *G A M E* ${header}
${xxi} ${prefix}tebakgambar
${xxi} ${prefix}tebakbendera
${xxi} ${prefix}tebakanime
${xxi} ${prefix}tebakkata
${xxi} ${prefix}susunkata
${xxi} ${prefix}caklontong
${xxi} ${prefix}apakah
${xxi} ${prefix}kapankah
${xxi} ${prefix}bisakah
${xxi} ${prefix}bagaimanakah
${xxi} ${prefix}rate
${xxi} ${prefix}gantengcek
${xxi} ${prefix}cantikcek
${xxi} ${prefix}gaycek
${xxi} ${prefix}lesbycek
${xxi} ${prefix}sangecek
${top} *G A M E* ${header}`)}

global.menugroup = (prefix) => {
return ctext(`${top} *G R O U P* ${header}
${xxi} ${prefix}getcontact
${xxi} ${prefix}totag
${xxi} ${prefix}linkgroup
${xxi} ${prefix}linkgc
${xxi} ${prefix}resetlinkgc
${xxi} ${prefix}sendlinkgc
${xxi} ${prefix}kick
${xxi} ${prefix}add
${xxi} ${prefix}promote
${xxi} ${prefix}demote
${xxi} ${prefix}hidetag
${xxi} ${prefix}h
${xxi} ${prefix}tagall
${top} *G R O U P* ${header}`)}

global.menuother = (prefix) => {
return ctext(`${top} *O T H E R* ${header}
${xxi} ${prefix}sc
${xxi} ${prefix}owner
${xxi} ${prefix}afk
${xxi} ${prefix}limit
${xxi} ${prefix}carbon
${top} *O T H E R* ${header}`)}

global.menuowner = (prefix) => {
  return ctext(`${top} *O W N E R* ${header}
  ${xxi} ${prefix}resetlimit
  ${xxi} ${prefix}addlimit
  ${xxi} ${prefix}pushkontak2
  ${xxi} ${prefix}pushkontak
  ${xxi} ${prefix}getidgc
  ${xxi} ${prefix}join
  ${xxi} ${prefix}addgc
  ${xxi} ${prefix}delgc
  ${xxi} ${prefix}backup
  ${xxi} ${prefix}getcase
  ${xxi} ${prefix}biochange
  ${xxi} ${prefix}autobio
  ${xxi} ${prefix}readchange
  ${xxi} ${prefix}autoread
  ${xxi} ${prefix}public
  ${xxi} ${prefix}self
  ${xxi} ${prefix}addprem
  ${xxi} ${prefix}delprem
  ${xxi} ${prefix}listpremium
  ${xxi} ${prefix}listprem
  ${xxi} ${prefix}bcgc
  ${xxi} ${prefix}bcgroup
  ${xxi} ${prefix}restart
  ${xxi} ${prefix}delcase
  ${xxi} ${prefix}addcase
  ${xxi} ${prefix}addcase
  ${top} *O W N E R* ${header}`)}
  
  global.menusearch = (prefix) => {
  return ctext(`${top} *S E A R C H* 」────━
  ${xxi} ${prefix}pinterest
  ${xxi} ${prefix}spotify
  ${xxi} ${prefix}play
  ${top} *S E A R C H* ${header}`)}
  
  global.menustickanim = (prefix) => {
  return ctext(`${top} *S T I C K* ${header}
  ${xxi} ${prefix}kill
  ${xxi} ${prefix}pat
  ${xxi} ${prefix}lick
  ${xxi} ${prefix}bite
  ${xxi} ${prefix}yeet
  ${xxi} ${prefix}bonk
  ${xxi} ${prefix}wink
  ${xxi} ${prefix}poke
  ${xxi} ${prefix}nom
  ${xxi} ${prefix}slap
  ${xxi} ${prefix}smile
  ${xxi} ${prefix}wave
  ${xxi} ${prefix}blush
  ${xxi} ${prefix}smugh
  ${xxi} ${prefix}glomp
  ${xxi} ${prefix}happy
  ${xxi} ${prefix}dance
  ${xxi} ${prefix}cringe
  ${xxi} ${prefix}highfive
  ${xxi} ${prefix}handhold
  ${top} *S T I C K* 」─────━`)}
  
  global.menutools = (prefix) => {
  return ctext(`${top} *T O O L S* ${header}
  ${xxi} ${prefix}clonebot
  ${xxi} ${prefix}hd
  ${xxi} ${prefix}toimg
  ${xxi} ${prefix}toaud
  ${xxi} ${prefix}tomp3
  ${xxi} ${prefix}tovn
  ${xxi} ${prefix}tourl
  ${xxi} ${prefix}shortlink
  ${xxi} ${prefix}sticker
  ${xxi} ${prefix}qc
  ${xxi} ${prefix}smeme
  ${xxi} ${prefix}wm
  ${xxi} ${prefix}lirik
  ${xxi} ${prefix}gitclone
  ${top} *T O O L S* ${header}`)}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})