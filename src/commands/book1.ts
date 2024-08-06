import { Context } from 'telegraf';
import { fetchAudio } from '../utils/fetchAudio';

export const book1 = () => async (ctx: Context) => {
    const text = "Habits are the compound interest of self-improvement...";
    const file_url = await fetchAudio(text, 'book1_speech', 'en-US-GuyNeural');
    
    try {
        await ctx.replyWithVoice({ url: file_url });
        // Если хотите отправить как аудиофайл
        // await ctx.replyWithAudio({ url: file_url });
    } catch (error) {
        console.error('Error sending audio:', error);
        await ctx.reply('Произошла ошибка при отправке аудиофайла. Попробуйте снова позже.');
    }
};
