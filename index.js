require("dotenv").config();
const {Telegraf} = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => await ctx.reply("vvedite cifri"));


bot.on('text', (ctx) => ctx.reply('text'))


bot.launch();

