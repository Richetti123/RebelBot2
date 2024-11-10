import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {

if (command == 'play' || command == 'musica') {
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused4}\n*${usedPrefix + command} Alvaro Diaz - MAMI 100PRE SABE(INTERLUDE)*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: wm, previewType: 0, thumbnail: gatamenu, sourceUrl: accountsgb}}})
try {
const yt_play = await search(args.join(' '))
const ytplay2 = await yts(text);
const texto1 = `*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*

ও ${mid.smsYT1}
» ${yt_play[0].title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও ${mid.smsYT15}
» ${yt_play[0].ago}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও ${mid.smsYT5}
» ${secondString(yt_play[0].duration.seconds)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও  ${mid.smsYT10}
» ${MilesNumber(yt_play[0].views)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও  ${mid.smsYT2}
» ${yt_play[0].author.name}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও ${mid.smsYT4}
» ${yt_play[0].url}

*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*`.trim()

await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error,jpg', texto1, m, null);
//conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [['Audio', `${usedPrefix}ytmp3 ${yt_play[0].url}`], ['video', `${usedPrefix}ytmp4 ${yt_play[0].url}`]], null, null, m)

if (!ytplay2.all.length) {
return m.react("❌");
}
const vid = ytplay2.all[0];
const videoUrl = vid.url;
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp3?url=${yt_play[0].url}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();

if (!delius.status) {
return m.react("❌")}
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch (e) {
await m.react('❌')
console.log(e)}
}

if (command == 'play2' || command == 'video') {
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused4}\n*${usedPrefix + command} Alvaro Diaz - MAMI 100PRE SABE(INTERLUDE)*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: wm, previewType: 0, thumbnail: gatamenu, sourceUrl: accountsgb}}})
try { 
const yt_play = await search(args.join(' '))
const ytplay2 = await yts(text);
const texto1 = `*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*

ও ${mid.smsYT1}
» ${yt_play[0].title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও ${mid.smsYT15}
» ${yt_play[0].ago}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও ${mid.smsYT5}
» ${secondString(yt_play[0].duration.seconds)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও  ${mid.smsYT10}
» ${MilesNumber(yt_play[0].views)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও  ${mid.smsYT2}
» ${yt_play[0].author.name}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও ${mid.smsYT4}
» ${yt_play[0].url}

*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*`.trim()
m.react("⌛")
await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error,jpg', texto1, m, null);
//conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [['Audio', `${usedPrefix}ytmp3 ${yt_play[0].url}`], ['video', `${usedPrefix}ytmp4 ${yt_play[0].url}`]], null, null, m)

if (!ytplay2.all.length) {
return m.react("❌");
}
const vid = ytplay2.all[0];
const videoUrl = vid.url;
const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${yt_play[0].url}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();

if (!delius.status) {
return m.react("❌")}
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `error.mp4`, caption: `╭━❰  ${wm}  ❱━⬣\n┃ 💜 ${mid.smsYT1}\n┃ ${n}\n╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣`, thumbnail: await fetch(n4) }, { quoted: m })
m.react("✅")
} catch (e) {
await m.react('❌')
console.log(e)}
}

if (command == 'play3' || command == 'play4') {
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused4}\n*${usedPrefix + command} Alvaro Diaz - MAMI 100PRE SABE(INTERLUDE)*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: wm, previewType: 0, thumbnail: gatamenu, sourceUrl: accountsgb}}})
const yt_play = await search(args.join(' '))
const texto1 = `*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*

ও ${mid.smsYT1}
» ${yt_play[0].title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও ${mid.smsYT15}
» ${yt_play[0].ago}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও ${mid.smsYT5}
» ${secondString(yt_play[0].duration.seconds)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও  ${mid.smsYT10}
» ${MilesNumber(yt_play[0].views)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও  ${mid.smsYT2}
» ${yt_play[0].author.name}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও ${mid.smsYT4}
» ${yt_play[0].url}

*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*`.trim()

await conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [['Audio', `${usedPrefix}ytmp3 ${yt_play[0].url}`], ['video', `${usedPrefix}ytmp4 ${yt_play[0].url}`], ['Mas resultados', `${usedPrefix}yts ${text}`]], null, null, m)
}}
handler.help = ['play', 'play2'];
handler.tags = ['downloader'];
handler.command = ['play', 'play2', 'play3', 'play4', 'audio', 'video']
//handler.limit = 3
handler.register = true 
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
  }
