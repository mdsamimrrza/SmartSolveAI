import { GoogleGenerativeAI } from '@google/generative-ai';
import { EXPO_PUBLIC_GEMINI_API_KEY } from '@env';

if (!EXPO_PUBLIC_GEMINI_API_KEY) {
  console.warn('Warning: EXPO_PUBLIC_GEMINI_API_KEY is not set in .env file');
}

const genAI = new GoogleGenerativeAI(EXPO_PUBLIC_GEMINI_API_KEY || '');

export async function getAIResponse(userMessage: string): Promise<string> {
  try {
    if (!EXPO_PUBLIC_GEMINI_API_KEY) {
      return 'Error: API key not configured. Please set EXPO_PUBLIC_GEMINI_API_KEY in .env file.';
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `You are a helpful AI assistant named SmartSolve AI. 
    You help users solve problems and answer questions in a friendly and professional manner.
    User message: ${userMessage}
    Please provide a helpful response.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting AI response:', error);
    return 'I apologize, but I encountered an error. Please try again.';
  }
} 