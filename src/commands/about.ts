import { Context } from 'telegraf';

export const about = () => async (ctx: Context) => {
  console.log(ctx);
  
    ctx.reply('Привет! Я бот для преобразования текста в аудио. Вы можете использовать команды /book1, /book2 или отправить свой текст для озвучивания.');
};
