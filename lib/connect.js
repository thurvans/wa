const fs = require('fs')
const mime = require('mime-types')
const path = require('path')
const { promisify } = require('util')
const { resolve } = require('path')
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)
const FileType = require('file-type')
const ffmpeg = require('fluent-ffmpeg')
const chalk = require('chalk')
const pino = require('pino')
const PhoneNumber = require('awesome-phonenumber')
const {
  imageToWebp,
  imageToWebp3,
  videoToWebp,
  writeExifImg,
  writeExifImgAV,
  writeExifVid
} = require('./exif')
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  sleep,
  runtime
} = require('./myfunc')
const {
   default: makeWASocket,
   proto,
   downloadContentFromMessage,
   MessageType,
   Mimetype,
   getContentType,
   generateWAMessage,
   generateWAMessageContent,
   generateWAMessageFromContent,
   generateForwardMessageContent,
   generateThumbnail,
   extractImageThumb,
   prepareWAMessageMedia,
   WAMessageProto,
   delay,
   jidDecode,
   makeInMemoryStore,
   getAggregateVotesInPollMessage,
   updateMessageWithPollUpdate,
   jidNormalizedUser,
   S_WHATSAPP_NET,
   getBinaryNodeChild
} = global.baileys


const store = makeInMemoryStore({
   logger: pino().child({
      level: 'silent',
      stream: 'store'
   })
})
    
Socket = (...args) => {
   let client = makeWASocket(...args)
   Object.defineProperty(client, 'name', {
      value: 'WASocket',
      configurable: true,
   })
   
   client.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {}
      return decode.user && decode.server && decode.user + '@' + decode.server || jid
    } else return jid
  }
   
   client.sendProgress = async (jid, text, quoted) => {
  const emoticons = ['↻', '↺', '⟳', '⟲'];
  const replyMessage = await client.reply(jid, Func.Styles('w a i t i n g . . ') + emoticons[0], quoted);  
  for (let i = 1; i < emoticons.length; i++) {
    await Func.delay(1000);
    client.relayMessage(jid, {
      protocolMessage: {
        key: replyMessage.key,
        type: 14,
        editedMessage: {
          conversation: Func.Styles('w a i t i n g . . ') + emoticons[i]
        }
      }
    }, {});
  }
  // Send the final message after loading
  await Func.delay(1000);
  client.relayMessage(jid, {
    protocolMessage: {
      key: replyMessage.key,
      type: 14,
      editedMessage: {
        conversation: text
      }
    }
  }, {});
};

    client.sendReact = async (emoticon) => {
      let reactionMessage = {
         react: {
            text: emoticon,
            key: m.key
         }
      };
      // Mengirim pesan reaksi dan mengembalikan respons
      return await client.sendMessage(m.sender, reactionMessage);
    };
    
    let parseMention = text => [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
   
   client.reply = async (jid, text, quoted, options) => {
        await client.sendPresenceUpdate('composing', jid)
        return client.sendMessage(jid, {text: text, mentions: parseMention(text), ...options}, { quoted})
        } 
        
    client.getName = (jid, withoutContact = true) => {
       id = jidNormalizedUser(jid)
       withoutContact = client.withoutContact || withoutContact
       let v
       if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
       v = store.contacts[id] || {}
       if (!(v.name || v.subject)) v = client.groupMetadata(id) || {}
       resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
       })
       else v = id === '0@s.whatsapp.net' ? {
       id,
       name: 'WhatsApp'
       } : id === client.decodeJid(client.user.id) ?
       client.user :
       (store.contacts[id] || {})
       return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
       } 
       
       client.sendContact = async (jid, contact, quoted, info = {}, opts = {}) => {
       let list = []
       contact.map(v => list.push({displayName: v.name, vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${v.name}\nORG:${info && info.org ? info.org : 'Neoxr Nework'}\nTEL;type=CELL;type=VOICE;waid=${v.number}:${PhoneNumber('+' + v.number).getNumber('international')}\nEMAIL;type=Email:${info && info.email ? info.email : 'admin@neoxr.my.id'}\nURL;type=Website:${info && info.website ? info.website : 'https://neoxr.my.id'}\nADR;type=Location:;;Unknown;;\nOther:${v.about}\nEND:VCARD`}))
       return client.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted})
        }
        
   client.sendFile = async (jid, url, name, caption = '', quoted, opts, options) => {
      const {
         status,
         file,
         filename,
         mime,
         size,
         extension
      } = await Func.getFile(url, name, opts && opts.referer ? opts.referer : false)
      if (!status) return client.reply(jid, `Failed to proccess file.`, quoted)
      client.refreshMediaConn(false)
      if (opts && opts.document) {
         await client.sendPresenceUpdate('composing', jid)
         const process = await Func.metaAudio(file, {
            title: filename.replace(new RegExp('.mp3', 'i'), ''),
            ...tags,
            APIC: opts && opts.APIC ? opts.APIC : tags.APIC
         })
         return client.sendMessage(jid, {
            document: {
               url: extension == 'm4a' ? file : process.file
            },
            fileName: filename,
            mimetype: mime,
            caption: caption,
            ...options
         }, {
            quoted
         })
      } else {
         if (/image\/(jpe?g|png)/.test(mime)) {
            await client.sendPresenceUpdate('composing', jid)
            return client.sendMessage(jid, {
               image: {
                  url: file
               },
               caption: caption,
               mentions: [...caption.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
               ...options
            }, {
               quoted
            })
         } else if (/video/.test(mime)) {
            await client.sendPresenceUpdate('composing', jid)
            return client.sendMessage(jid, {
               video: {
                  url: file
               },
               caption: caption,
               gifPlayback: opts && opts.gif ? true : false,
               mentions: [...caption.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
               ...options
            }, {
               quoted
            })
         } else if (/audio/.test(mime)) {
            await client.sendPresenceUpdate(opts && opts.ptt ? 'recoding' : 'composing', jid)
            const process = await Func.metaAudio(file, {
               title: filename.replace(new RegExp('.mp3', 'i'), ''),
               ...tags,
               APIC: opts && opts.APIC ? opts.APIC : tags.APIC
            })
            return client.sendMessage(jid, {
               audio: {
                  url: extension == 'm4a' ? file : process.file
               },
               ptt: opts && opts.ptt ? true : false,
               waveform: opts && opts.ptt ? [0,0,15,0,0] : [],
               mimetype: mime,
               mentions: [...caption.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
               ...options
            }, {
               quoted
            })
         } else {
            await client.sendPresenceUpdate('composing', jid)
            return client.sendMessage(jid, {
               document: {
                  url: file
               },
               fileName: filename,
               mimetype: mime,
               caption: caption,
               ...options
            }, {
               quoted
            })
         }
      }
   }
   
   client.sendSticker = async (jid, path, quoted, options = {}) => {
        let buffer = /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : Buffer.alloc(0)
        let { mime } = await FileType.fromBuffer(buffer)
        let convert = (/image\/(jpe?g|png|gif)|octet/.test(mime)) ? (options && (options.packname || options.author)) ? await Exif.writeExifImg(buffer, options) : await Exif.imageToWebp(buffer) : (/video/.test(mime)) ? (options && (options.packname || options.author)) ? await Exif.writeExifVid(buffer, options) : await Exif.videoToWebp(buffer) : (/webp/.test(mime)) ? await Exif.writeExifWebp(buffer, options) : Buffer.alloc(0)
        await client.sendPresenceUpdate('composing', jid)
        return client.sendMessage(jid, { sticker: { url: convert },  ...options}, {quoted})
        }
        
        client.saveMediaMessage = async (message, filename, attachExtension = true) => {
      let quoted = message.msg ? message.msg : message
      let mime = (message.msg || message).mimetype || ''
      let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
      const stream = await downloadContentFromMessage(quoted, messageType)
      let buffer = Buffer.from([])
      for await (const chunk of stream) {
         buffer = Buffer.concat([buffer, chunk])
      }
      let type = await FileType.fromBuffer(buffer)
      trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
     // await fs.writeFileSync(trueFileName, buffer)
      return buffer
   }
        
       client.downloadMediaMessage = async (message) => {
       let mime = (message.msg || message).mimetype || ''
       let messageType = message.mtype ? message.mtype.replace(/Message|WithCaption/gi, '') : mime.split('/')[0]
       const stream = await downloadContentFromMessage(message, messageType)
       let buffer = Buffer.from([])
       for await (const chunk of stream) {
       buffer = Buffer.concat([buffer, chunk])
       }
       return buffer
       }
       
       client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    // save to file
   // await fs.writeFileSync(trueFileName, buffer)
    return buffer
  }
         
         client.copyNForward = async (jid, message, forceForward = false, options = {}) => {
      let vtype
      if (options.readViewOnce) {
         message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
         vtype = Object.keys(message.message.viewOnceMessage.message)[0]
         delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
         delete message.message.viewOnceMessage.message[vtype].viewOnce
         message.message = {
            ...message.message.viewOnceMessage.message
         }
      }
      let mtype = Object.keys(message.message)[0]
      let content = await generateForwardMessageContent(message, forceForward)
      let ctype = Object.keys(content)[0]
      let context = {}
      if (mtype != "conversation") context = message.message[mtype].contextInfo
      content[ctype].contextInfo = {
         ...context,
         ...content[ctype].contextInfo
      }
      const waMessage = await generateWAMessageFromContent(jid, content, options ? {
         ...content[ctype],
         ...options,
         ...(options.contextInfo ? {
            contextInfo: {
               ...content[ctype].contextInfo,
               ...options.contextInfo
            }
         } : {})
      } : {})
      await client.relayMessage(jid, waMessage.message, {
         messageId: waMessage.key.id,
         additionalAttributes: {
            ...options
         }
      })
      return waMessage
   }
   
   client.sendImage = async (jid, path, caption = '', quoted = '', options) => {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await client.sendMessage(jid, {
      image: buffer,
      caption: caption,
      ...options
    }, {
      quoted
    })
  }
  
   client.sendList = async (jid, title, foteer, btn, options = {}) => {
    const msg = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: {
                    body: {
                        text: title
                    },
                    footer: {
                        text: foteer || footer
                    },
                    nativeFlowMessage: {
                        buttons: [{
                               "name": "single_select",
                               "buttonParamsJson": JSON.stringify(btn)
                     }]
                    },
                    contextInfo: {
                        mentionedJid: await Func.ments(title),
                        quotedMessage: m.message,
                        participant: m.sender,
                        ...m.key,
                        isForwarded: true, 
                        forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idsal,
                        newsletterName: Tasistent, 
                        serverMessageId: -1
                    }
                  },
                }
            }
        }
    };
    return client.relayMessage(jid, msg, {});
    }
    
    client.sendMessageToNewsLetter = (jid, text, options = {}) => {

        const messages = { 
   
            extendedTextMessage: {
             text: text,
             ...options
            }     
        }


       const messageToChannel = proto.Message.encode(messages).finish()
        const result = {
        	tag: 'message',
        	attrs: { to: jid, type: 'text' },
        	content: [
                    {
        	tag: 'plaintext',
        	attrs: {},
        	content: messageToChannel
            }
          ]
        }

      return client.query(result)
    }
    
    client.sendText = async (jid, text, quoted, options = {}) => client.sendMessage(jid, {
    text: text,
    contextInfo: {
      mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')
    },
    ...options
  }, {
    quoted
    })
    
    client.sendPoll = (jid, name = '', values = [], selectableCount = 1) => {
    return client.sendMessage(jid, { poll: { name, values, selectableCount }}) }
   
   client.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImgAV(buff, options)
    } else {
      buffer = await imageToWebp(buff)
    }
    await client.sendMessage(jid, {
      sticker: {
        url: buffer
      },
      ...options
    }, {
      quoted
    })
    return buffer
  }
  client.sendImageAsStickerAvatar = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options)
    } else {
      buffer = await imageToWebp3(buff)
    }
    await client.sendMessage(jid, {
      sticker: {
        url: buffer
      },
      ...options
    }, {
      quoted
    })
    return buffer
  }
  
  client.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options)
    } else {
      buffer = await videoToWebp(buff)
    }
    await client.sendMessage(jid, {
      sticker: {
        url: buffer
      },
      ...options
    }, {
      quoted
    })
    return buffer
  }
   
    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
    client.sendMediaWithUrl = async (jid, text) => {
          client.sendMessage(jid, {
                        text: text + "\n\n" + footer,
                        contextInfo: {
                        mentionedJid: await Func.ments(text),
                        isForwarded: true, 
                            forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idsal,
                            newsletterName: Tasistent, 
                            serverMessageId: -1
                            },
                            externalAdReply: {
                                showAdAttribution: true,
                                title: ``,
                                body: copyright,
                                thumbnailUrl: pickRandom(global.randomThumb),
                                sourceUrl: github,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, { quoted: m }
                    )
    }

    client.sendThumb = async (jid, text = '', head = '', url = '', quoted, options = {}) => {
        const messageOptions = {
        text: text,
        mentions: await Func.ments(text),
        contextInfo: {
            externalAdReply: {
                title: `「 ${head} 」`,
                body: '',
                showAdAttribution: false,
                mediaType: 1,
                sourceUrl: '',
                thumbnailUrl: Buffer.isBuffer(url) ? 'https://telegra.ph/?id=' + Func.makeId(8) : url,
                renderLargerThumbnail: true
            }
        }
    };    
      await client.sendMessage(jid, messageOptions, { quoted, ...options });
    }
    
    client.profilePicture = async (jid, type = 'preview', timeoutMs) => {
    var _a;
    jid = (0, jidNormalizedUser)(jid);
    const result = await client.query({
        tag: 'iq',
        attrs: {
            target: jid,
            to: S_WHATSAPP_NET,
            type: 'get',
            xmlns: 'w:profile:picture'
        },
        content: [{
            tag: 'picture',
            attrs: {
                type,
                query: 'url'
            }
        }]
    }, timeoutMs);
    const child = (0, getBinaryNodeChild)(result, 'picture');
    return (_a = child === null || child === void 0 ? void 0 : child.attrs) === null || _a === void 0 ? void 0 : _a.url;
    };
    
    try {
    ppuser = client.profilePicture(m.sender, 'image')
    } catch (err) {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    ppnyauser = getBuffer(ppuser)
    
    client.sendDoc = async (jid, teks) => {
    client.sendMessage(jid, {
        document: fs.readFileSync("./lib/blank.js"),
        fileName: `「 ${m.pushName} 」`,
        mimetype: 'image/png',
        jpegThumbnail: await reSize(ppuser, 400, 400),
        caption: teks + "\n\n" + footer,
        contextInfo: {
            mentionedJid: await Func.ments(teks),
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idsal,
                newsletterName: Tasistent,
                serverMessageId: -1
            },
            externalAdReply: {
                showAdAttribution: true,
                title: '',
                body: copyright,
                thumbnailUrl: pickRandom(randomThumb),
                sourceUrl: github,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m,
        ephemeralExpiration: 86400
    });
    }
    
    client.editmsg = async (e, t) => {
			var a = [`${e}.`, `${e}..`, `${e}...`, `${e}.....`, `${t}`];
			let {
				key: s
			} = await client.sendMessage(m.chat, {
				text: e
			});
			for (let r = 0; r < a.length; r++) await client.sendMessage(m.chat, {
				text: a[r],
				edit: s
			})
	}
		
    client.sendCopy = async (jid, title, footer, copy, options = {}) => {
    let msg = generateWAMessageFromContent(jid, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363267533195844@newsletter',
                            newsletterName: Tasistent,
                            serverMessageId: -1
                        },
                        businessMessageForwardInfo: {
                            businessOwnerJid: client.decodeJid(client.user.id)
                        },
                    },
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: title
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: footer
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: '',
                        subtitle: "",
                        hasMediaAttachment: false,
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                           "name": "cta_copy",
                           "buttonParamsJson": `{\"display_text\":\"Copy Sn\",\"id\":\"${copy}\",\"copy_code\":\"${copy}\"}`
                    }, ]
                    })
                })
            }
        }
    }, { quoted: m })

    await client.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    })
    }
   
   
client.SerializeQuote = (m) => {	
   return Smsg(client, m)
   }

   return client
}
   
Smsg = (client, m, store) => {
  if (!m) return m
  let M = proto.WebMessageInfo
  if (m.key) {
    m.id = m.key.id
    m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
    m.chat = m.key.remoteJid
    m.fromMe = m.key.fromMe
    m.isGroup = m.chat.endsWith('@g.us')
    m.sender = client.decodeJid(m.fromMe && client.user.id || m.participant || m.key.participant || m.chat || '')
    if (m.isGroup) m.participant = client.decodeJid(m.key.participant) || ''
  }
  if (m.message) {
    m.mtype = getContentType(m.message)
    m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
    m.body = m.message.conversation || m?.msg?.caption || m?.msg?.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
    let quoted = m.quoted = m?.msg?.contextInfo ? m.msg.contextInfo.quotedMessage : null
    m.mentionedJid = m?.msg?.contextInfo ? m.msg.contextInfo.mentionedJid : []
    if (m.quoted) {
      let type = Object.keys(m.quoted)[0]
      m.quoted = m.quoted[type]
      if (['productMessage'].includes(type)) {
        type = Object.keys(m.quoted)[0]
        m.quoted = m.quoted[type]
      }
      if (typeof m.quoted === 'string') m.quoted = {
        text: m.quoted
      }
      m.quoted.mtype = type
      m.quoted.id = m.msg.contextInfo.stanzaId
      m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
      m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
      m.quoted.sender = client.decodeJid(m.msg.contextInfo.participant)
      m.quoted.fromMe = m.quoted.sender === client.decodeJid(client.user.id)
      m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
      m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
      m.getQuotedObj = m.getQuotedMessage = async () => {
        if (!m.quoted.id) return false
        let q = await store.loadMessage(m.chat, m.quoted.id, client)
        return exports.smsg(client, q, store)
      }
      let vM = m.quoted.fakeObj = M.fromObject({
        key: {
          remoteJid: m.quoted.chat,
          fromMe: m.quoted.fromMe,
          id: m.quoted.id
        },
        message: quoted,
        ...(m.isGroup ? {
          participant: m.quoted.sender
        } : {})
      })

      /**
       * 
       * @returns 
       */
      m.quoted.delete = () => client.sendMessage(m.quoted.chat, {
        delete: vM.key
      })

      /**
       * 
       * @param {*} jid 
       * @param {*} forceForward 
       * @param {*} options 
       * @returns 
       */
      m.quoted.copyNForward = (jid, forceForward = false, options = {}) => client.copyNForward(jid, vM, forceForward, options)

      /**
       *
       * @returns
       */
      m.quoted.download = () => client.downloadMediaMessage(m.quoted)
    }
  }
  if (m?.msg?.url) m.download = () => client.downloadMediaMessage(m.msg)
  m.text = m?.msg?.text || m?.msg?.caption || m.message.conversation || m?.msg?.contentText || m?.msg?.selectedDisplayText || m?.msg?.title || ''
  /**
   * Reply to this message
   * @param {String|Object} text 
   * @param {String|false} chatId 
   * @param {Object} options 
   */
  m.reply = (text, options) => client.sendMessage(m.chat, {
         text,
         mentions: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net'),
         ...options
      }, {
         quoted: m
    })
  /**
   * Copy this message
   */
  m.copy = () => exports.smsg(client, M.fromObject(M.toObject(m)))

  /**
   * 
   * @param {*} jid 
   * @param {*} forceForward 
   * @param {*} options 
   * @returns 
   */
  m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => client.copyNForward(jid, m, forceForward, options)

  return m
}


exports.Smsg = Smsg
exports.Socket = Socket

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})