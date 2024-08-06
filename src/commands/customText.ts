import { Context, NarrowedContext } from 'telegraf';
import { Message } from 'telegraf/typings/core/types/typegram';
import { fetchAudio } from '../utils/fetchAudio';

export const customText = () => async (ctx: any) => {
    const text = ctx.update.message.text.trim(); // Убираем лишние пробелы
    const filename = `custom_${Date.now()}`;
    const model = 'en-US-GuyNeural';
    
    if (!text) {
        ctx.reply('Пожалуйста, отправьте текст для озвучивания.');
        return;
    }

    try {
        const file_url = await fetchAudio(text, filename, model);
        await ctx.replyWithVoice({ url: file_url });
        // Если хотите отправить как аудиофайл
        // await ctx.replyWithAudio({ url: file_url });
    } catch (error) {
        console.error('Error generating audio:', error);
        await ctx.reply('Произошла ошибка при преобразовании текста в аудио. Попробуйте снова позже.');
    }
};
