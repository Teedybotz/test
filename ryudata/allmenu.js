const fs = require('fs')
const chalk = require('chalk')

exports.allmenu = (prefix) => {
	return`All Menu Nya BanhπΏππ¦

*π€ OWNER MENU*
βπΎ ${prefix}setmenu
βπΎ ${prefix}join [link]
βπΎ ${prefix}leave
βπΎ ${prefix}self
βπΎ ${prefix}public
βπΎ ${prefix}setppbot
βπΎ ${prefix}block @user
βπΎ ${prefix}unblock @user
βπΎ ${prefix}bc
βπΎ ${prefix}bcgc
βπΎ ${prefix}setcmd [reply sticker/pesan]
βπΎ ${prefix}delcmd [reply sticker/pesan]
βπΎ ${prefix}listcmd
βπΎ ${prefix}lockcmd
βπΎ ${prefix}promosi

*π₯ GROUP MENU*
βπΎ ${prefix}antilink
βπΎ ${prefix}antiwame
βπΎ ${prefix}antivirtex
βπΎ ${prefix}nsfw
βπΎ ${prefix}afk [alasan]
βπΎ ${prefix}tagall
βπΎ ${prefix}hidetag
βπΎ ${prefix}absen
βπΎ ${prefix}hadir
βπΎ ${prefix}tidakhadir
βπΎ ${prefix}cekabsen
βπΎ ${prefix}hapusabsen
βπΎ ${prefix}linkgroup
βπΎ ${prefix}revoke
βπΎ ${prefix}ephemeral [option]
βπΎ ${prefix}setppgc
βπΎ ${prefix}setname [text]
βπΎ ${prefix}group [option]
βπΎ ${prefix}add @user
βπΎ ${prefix}kick @user
βπΎ ${prefix}promote @user
βπΎ ${prefix}demote @user

*π¦ DOWNLOAD MENU*
βπΎ ${prefix}tiktok [url]
βπΎ ${prefix}tiktokwm [url]
βπΎ ${prefix}tiktoknowm [url]
βπΎ ${prefix}tiktokaudio [url]
βπΎ ${prefix}instagram [url]
βπΎ ${prefix}twitter [url]
βπΎ ${prefix}facebook [url]
βπΎ ${prefix}ytmp4 [url]
βπΎ ${prefix}ytmp3 [url]
βπΎ ${prefix}play [judul]
βπΎ ${prefix}ytsearch [judul]
βπΎ ${prefix}gitclone

*π SEARCH MENU*
βπΎ ${prefix}pinterest [query]
βπΎ ${prefix}pantun
βπΎ ${prefix}google [query]
βπΎ ${prefix}gimage [query]
βπΎ ${prefix}kbbi [query]
βπΎ ${prefix}igstalk [username]
βπΎ ${prefix}ghstalk [username]

*ποΈ INFORMASI MENU*
βπΎ ${prefix}infogempa
βπΎ ${prefix}faktaunik
βπΎ ${prefix}ssweb

*βοΈ NULIS MENU*
βπΎ ${prefix}nulisbiasa
βπΎ ${prefix}nuliskanan
βπΎ ${prefix}nuliskiri
βπΎ ${prefix}foliokanan
βπΎ ${prefix}foliokiri

*π­ ASUPAN MENU*
βπΎ ${prefix}hijaber
βπΎ ${prefix}cecan
βπΎ ${prefix}bocil
βπΎ ${prefix}ukhty
βπΎ ${prefix}gheayubi
βπΎ ${prefix}rikagusriani
βπΎ ${prefix}santuy

*π© CECAN MENU*
βπΎ ${prefix}china
βπΎ ${prefix}vietnam
βπΎ ${prefix}thailand
βπΎ ${prefix}indonesia
βπΎ ${prefix}korea
βπΎ ${prefix}japan
βπΎ ${prefix}malaysia

*ποΈ VOICE CHANGER*
βπΎ ${prefix}bass
βπΎ ${prefix}blown
βπΎ ${prefix}deep
βπΎ ${prefix}earrape
βπΎ ${prefix}fast
βπΎ ${prefix}fat
βπΎ ${prefix}nightcore
βπΎ ${prefix}reverse
βπΎ ${prefix}robot
βπΎ ${prefix}slow
βπΎ ${prefix}tupai

*πΈ EPHOTO MENU*
βπΎ ${prefix}3dnature
βπΎ ${prefix}bevel
βπΎ ${prefix}burnpaper
βπΎ ${prefix}quotesgrass
βπΎ ${prefix}stars
βπΎ ${prefix}flaming
βπΎ ${prefix}romance
βπΎ ${prefix}gerbang
βπΎ ${prefix}fur
βπΎ ${prefix}funnycup

*πΌοΈ PHOTOOXY MENU*
βπΎ ${prefix}3d-underwater  
βπΎ ${prefix}3dtext-pig  
βπΎ ${prefix}3dvalentine-cards  
βπΎ ${prefix}anonymous-neon  
βπΎ ${prefix}advanced-glow  
βπΎ ${prefix}art-shader  
βπΎ ${prefix}angels-wings 

*π? FUN MENU*
βπΎ ${prefix}truth
βπΎ ${prefix}dare
βπΎ ${prefix}bagaimanakah [teks]
βπΎ ${prefix}kapankah [teks]
βπΎ ${prefix}dimanakah [teks]
βπΎ ${prefix}suit [βοΈ/β/β]
βπΎ ${prefix}aduayam [π₯/π€π/π£/π¦]
βπΎ ${prefix}suitpvp [tag user]
βπΎ ${prefix}ttt
βπΎ ${prefix}delttt

*π° GAME MENU*
βπΎ ${prefix}tebak lagu
βπΎ ${prefix}tebak gambar
βπΎ ${prefix}tebak kata
βπΎ ${prefix}tebak kalimat
βπΎ ${prefix}tebak lirik
βπΎ ${prefix}tebak lontong
βπΎ ${prefix}kuismath

*π‘ RANDOM MENU*
βπΎ ${prefix}darkjokes
βπΎ ${prefix}meme
βπΎ ${prefix}quotes
βπΎ ${prefix}quotes2
βπΎ ${prefix}katabijak
βπΎ ${prefix}wallgaming
βπΎ ${prefix}wallpentol
βπΎ ${prefix}wallcogan
βπΎ ${prefix}wallcecan
βπΎ ${prefix}wallestetik
βπΎ ${prefix}wallislami
βπΎ ${prefix}wallbkackpink
βπΎ ${prefix}wallpaperanime

*β©οΈ ANIME MENU*
βπΎ ${prefix}quotesanime
βπΎ ${prefix}wallpaper
βπΎ ${prefix}waifu
βπΎ ${prefix}loli
βπΎ ${prefix}cry
βπΎ ${prefix}kill
βπΎ ${prefix}hug
βπΎ ${prefix}pat
βπΎ ${prefix}lick
βπΎ ${prefix}kiss
βπΎ ${prefix}bite
βπΎ ${prefix}yeet
βπΎ ${prefix}neko
βπΎ ${prefix}bully
βπΎ ${prefix}bonk
βπΎ ${prefix}wink
βπΎ ${prefix}poke
βπΎ ${prefix}nom
βπΎ ${prefix}slap
βπΎ ${prefix}smile
βπΎ ${prefix}wave
βπΎ ${prefix}awoo
βπΎ ${prefix}blush
βπΎ ${prefix}smug
βπΎ ${prefix}glomp
βπΎ ${prefix}happy
βπΎ ${prefix}dance
βπΎ ${prefix}cringe
βπΎ ${prefix}cuddle
βπΎ ${prefix}highfive
βπΎ ${prefix}shinobu
βπΎ ${prefix}megumin
βπΎ ${prefix}handhold

*π NSFW MENU*
βπΎ ${prefix}ahegeo
βπΎ ${prefix}ass
βπΎ ${prefix}bdsm
βπΎ ${prefix}blowjob
βπΎ ${prefix}cuckold 
βπΎ ${prefix}cum 
βπΎ ${prefix}ero
βπΎ ${prefix}femdom
βπΎ ${prefix}foot
βπΎ ${prefix}gangbang
βπΎ ${prefix}glasses
βπΎ ${prefix}hentai
βπΎ ${prefix}ahy
βπΎ ${prefix}mstb
βπΎ ${prefix}neko
βπΎ ${prefix}orgy
βπΎ ${prefix}panties
βπΎ ${prefix}pussy
βπΎ ${prefix}yuri
βπΎ ${prefix}zettai

*π¨ MAKER MENU*
βπΎ ${prefix}toimage
βπΎ ${prefix}smeme
βπΎ ${prefix}smeme2
βπΎ ${prefix}sticker
βπΎ ${prefix}tovideo
βπΎ ${prefix}togif
βπΎ ${prefix}tourl
βπΎ ${prefix}emojimix π+π
βπΎ ${prefix}readmore
βπΎ ${prefix}ttp [teks]
βπΎ ${prefix}semoji [emoji]

*π¨βπ¨ TEXTPRO MENU*
βπΎ ${prefix}serti1 [teks]
βπΎ ${prefix}serti2 [teks]
βπΎ ${prefix}serti3 [teks]
βπΎ ${prefix}blackpink [teks]
βπΎ ${prefix}neon [teks]
βπΎ ${prefix}magma [teks]
βπΎ ${prefix}3dstone [teks]
βπΎ ${prefix}halloween [teks]
βπΎ ${prefix}horror [teks]
βπΎ ${prefix}larva [teks]
βπΎ ${prefix}toxic [teks]
βπΎ ${prefix}marvel [teks|teks]
βπΎ ${prefix}potter [teks]
βπΎ ${prefix}pornhub [teks|teks]
βπΎ ${prefix}tahta [teks]

*β OTHER MENU*
βπΎ ${prefix}simi [teks]
βπΎ ${prefix}ping
βπΎ ${prefix}owner
βπΎ ${prefix}creator
βπΎ ${prefix}menu / ${prefix}help / ${prefix}?
βπΎ ${prefix}delete
βπΎ ${prefix}sc
βπΎ ${prefix}tqto
βπΎ ${prefix}donasi
βπΎ ${prefix}rules
βπΎ ${prefix}sewabot
βπΎ ${prefix}listgc
βπΎ ${prefix}liston
βπΎ ${prefix}liston
βπΎ ${prefix}report
βπΎ ${prefix}req
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
