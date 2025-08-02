const apiKey = "AIzaSyC7GNWirh640Za249NALGPHjJzcQsG9yWk";

import { GoogleGenAI } from '@google/genai';

export default async function main(userInput) {
    console.log('Input:', userInput);
    
    if (!userInput || userInput.trim() === '') {
        console.log('Empty input');
        return;
    }

    try {
        console.log('Loading... Getting response from Gemini API');
        
        const ai = new GoogleGenAI({ apiKey });
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{
                role: 'user',
                parts: [{ text: userInput }],
            }],
        });
        
        const fullResponse = response.text;
        console.log('Response:', fullResponse);
        return fullResponse;
        
    } catch (error) {
        console.error('Error:', error.message);
        return 'Sorry, there was an error processing your request. Please try again.';
    }
}
