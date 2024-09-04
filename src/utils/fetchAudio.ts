export const fetchAudio = async (query: string): Promise<any> => {
    const response = await fetch('https://books-mu-ten.vercel.app/generate-audio-book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });
    const data = await response.json();
    return data ;
};
