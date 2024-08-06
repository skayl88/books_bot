export const fetchAudio = async (text: string, filename: string, model: string): Promise<string> => {
    const response = await fetch('https://books-mu-ten.vercel.app/text-to-speech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, filename, model })
    });
    const data = await response.json();
    return data.file_url;
};
