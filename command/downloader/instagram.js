let { monospace, isUrl } = require('../../lib/function')

module.exports = {
  name: "ig",
	alias: ["ig","igdl"],
	category: "downloader",
	use: "<url>",
	async run({msg,conn},{q,args,map,cmdNya}){
	  let { prefix } = map;
    let { from, reply} = msg;
    if(!q) throw "*[ INSTAGRAM DOWNLOADER ]*\n\nReply pesan ini dan kirim link url Instagram untuk Download.."
	  try {
	    await msg.reply(respon.wait)
	    let igdl = await sc.instagram(q)
	    if(/reel/.test(q)) return await conn.sendFile(msg.from, igdl.media[0].url,"", "*Done*", msg)
	    ngontol = igdl.media.length > 1 ? true : false
      if(ngontol) await msg.reply("Jumlah media lebih dari 1, media akan dikirim lewat private chat (PC)\nSilahkan cek chat dari bot><!")
      for(let i of igdl.media) {
        conn.sendFile(ngontol ? msg.sender : msg.from, i.url,"", "*Done*...jangan lupa follow ig ownerku kak : https://www.instagram.com/anggatzi123",msg)
          }
	  } catch (e){
	    global.error(msg.command, e, msg)
	  }
	}
}
