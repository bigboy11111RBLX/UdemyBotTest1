import { Client } from 'discord.js';

const bot = new Client();

bot.on('ready', () => console.log(`${bot.user.username} is online`));
bot.on('message', async (msg) => {
    if (msg.author.bot) return;

    await msg.reply('Hi');
});

bot.login('ODIwMTM5NDY0NzY0NTU1Mjg0.YEw0ZQ.fmDNWBCsYccpLbKP842M1bGAwqA');