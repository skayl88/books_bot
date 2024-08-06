import { Telegraf } from 'telegraf';

import { about } from './commands';
import { greeting } from './text';
import { book1 } from './commands/book1';
import { customText } from './commands/customText';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { development, production } from './core';
import { message } from 'telegraf/filters'
const BOT_TOKEN = process.env.BOT_TOKEN || '';
const ENVIRONMENT = process.env.NODE_ENV || '';

const bot = new Telegraf(BOT_TOKEN);

bot.command('about', about());
bot.command('book1', book1());
bot.on(message('text'), customText())

//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot);
};
//dev mode
ENVIRONMENT !== 'production' && development(bot);
