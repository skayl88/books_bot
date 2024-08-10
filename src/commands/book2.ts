import { Context } from 'telegraf';
import { fetchAudio } from '../utils/fetchAudio';

export const book2 = () => async (ctx: Context) => {
    const text = "If you want better results, forget about setting goals...";
    const file_url = await fetchAudio(text,);
    ctx.reply(`Вот ваш аудиофайл: ${file_url}`);
};
