let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'DONATE BOT'
let umobile = global.umobile
let touchandgoewallet = global.touchandgoewallet
let numberowner = global.numberowner
let anu = `Hallo mypren 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ Dana : ${umobile}
├ Pulsa : ${touchandgoewallet}
└────
Berapapun donasi kalian akan sangat berarti 👍

Terimakasih yang sudah mendonasikan untuk bot

Contact person Owner:
wa.me/${numberowner} (Owner)

*donasi via follow ig juga boleh*`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Back', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
