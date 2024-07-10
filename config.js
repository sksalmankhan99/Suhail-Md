const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+923285012701";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_05_47_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1LFxuICAgICAgICA4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk3LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDgyLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAwLFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICAzMixcbiAgICAgICAgMTYxLFxuICAgICAgICA2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVXJvK0dHdlBOUW5xemNpVlZEMW1nL1lBbWRSa0ptdXJqVlZ3OUxtSTRjbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODUwMTI3MDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM2RDNGNUUxRTIyOEQxOTVDRDBEQUI2N0Q3NTI3MDg5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDU5MDQ0M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI4NTAxMjcwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODRGMDMwMjcwRDNBRkQ3MDAyQUIwNTk0MEY4MzgzM0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTkwNDQzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImM2SktBRDhoUU5pVkp3MF9Cb2ZoZUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2ZiYWM0MjUtNGY4NC00MTJjLTliNTEtN2ZjNTIzZWIyZmJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDE3NyxcbiAgICAgIDE1OCxcbiAgICAgIDcyLFxuICAgICAgMzIsXG4gICAgICAyLFxuICAgICAgMTE3LFxuICAgICAgNzYsXG4gICAgICAxMzIsXG4gICAgICAxNjgsXG4gICAgICAyMDUsXG4gICAgICAyMDMsXG4gICAgICAyMTcsXG4gICAgICAzNSxcbiAgICAgIDE2NSxcbiAgICAgIDI1LFxuICAgICAgMjUxLFxuICAgICAgOTUsXG4gICAgICA0MyxcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMTM3LFxuICAgICAgMTk2LFxuICAgICAgMTY5LFxuICAgICAgMTE4LFxuICAgICAgMzcsXG4gICAgICAxNjMsXG4gICAgICAyNDcsXG4gICAgICAxNDYsXG4gICAgICA2OCxcbiAgICAgIDEyMCxcbiAgICAgIDE3MCxcbiAgICAgIDEwNCxcbiAgICAgIDc1LFxuICAgICAgMTM1LFxuICAgICAgMjgsXG4gICAgICAxOTksXG4gICAgICAxNzksXG4gICAgICAxNjEsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDdKTVhCUDNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI4NTAxMjcwMTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzY1NTM0MzA3NjU2NjQ6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJVbmtub3duXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG0zcDZVRkVPYkF1TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJWjFNejJkMWNZV0prbUUvdi9FMGZ2M3Bza2ZMdTZ0WEQ5MVFiZUF1dlRRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhFanpnM2xjRUd3Q0hEcVdMUWFERXlSWTVCNVJRS2lIeHY4L2lYcUhKQlhKbHQ1ZTZONXlocjJ4N3ZpTk1tU05NcjNBc2NFckhNczNRK0hLMzhEekR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJQNWxBQklZeVVlWUo0c01ONWY2R3ZPeE5SVnlNOW9ObWxMcUVCNURkUVlVKzJUUElRRWxselhmcTNibEluNnpvVDVuSURsVFBIY2NRaXllcGFCcWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI4NTAxMjcwMTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU5MDQ0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpubFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSm5sLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRnpPK3lkeUl1ZVo0VGJUYWpHQUMyeEt4L3p3Mis5SzdzRWM2NlN1ZUxwWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDIwNDE3OTc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
