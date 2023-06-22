require("dotenv").config();
const {Telegraf} = requre("telegraf");
const bot = new Telegraf(procces.env.BOT_TOKEN);

bot.start(async (ctx) => ctx.reply("vvedite cifri"));

bot.launch();

