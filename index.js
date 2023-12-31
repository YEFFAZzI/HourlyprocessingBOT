require("dotenv").config();
const {Telegraf} = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);
const msg = [];

// const getmsg = (msg) =>
//  `${msg[0]}:00    110-we-01___${msg[1]} тн.
// 120-we-01___${msg[2]}  тн
// 120-we-02___${msg[3]} тн.
// 130-we-01___${msg[4]} тн. 
// 140-we-01___ ${msg[5]} тн.
// Пит.Гц.____________${msg[6]}  м3. 
// Пит.Сорб.__________${msg[7]} м3.
// Пит.Сорб.__________${msg[8]} тн.
// Тех. Вода.__________${msg[9]} м3.`

const getmsg = (msg) =>
`${msg[0]}:00    110-we-01___${msg[1]} тн.
              120-we-01___${msg[2]}  тн.
              120-we-02___${msg[3]} тн.
              130-we-01___${msg[4]} тн. 
              140-we-01___ ${msg[5]} тн.
Пит.Гц.______${msg[6]}  м3. 
Пит.Сорб.____${msg[7]} м3.
Пит.Сорб.____${msg[8]} тн.
Тех. Вода.____${msg[9]} м3.
`
    
bot.start( async (ctx) => {
    console.log(JSON.stringify(ctx.update,null,2));
});

bot.on('text', async (ctx) => {
    await ctx.reply( getmsg(ctx.message.text.split('-')));
    await ctx.reply('\n 12-761-989-766-651-651-2528-990-644-786');
})


bot.launch().then('bot start');
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

