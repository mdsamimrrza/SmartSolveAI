import axios from 'axios';
import { EXPO_PUBLIC_GEMINI_API_KEY } from '@env';

if (!EXPO_PUBLIC_GEMINI_API_KEY) {
  console.warn('Warning: EXPO_PUBLIC_GEMINI_API_KEY is not set in .env file');
}

const API_KEY = EXPO_PUBLIC_GEMINI_API_KEY;
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
};

type GeminiPayload = {
  contents: { parts: { text: string }[] }[];
};

export async function getAIResponse(query: string): Promise<string> {
  try {
    if (!API_KEY) {
      throw new Error('API key not configured. Please set EXPO_PUBLIC_GEMINI_API_KEY in .env file');
    }

    const payload: GeminiPayload = {
      contents: [{ parts: [{ text: query }] }],
    };

    const res = await axios.post(ENDPOINT, payload, axiosConfig);

    const responseText = res.data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!responseText) {
      throw new Error('No response received from Gemini API');
    }

    return responseText;
  } catch (error) {
    console.error('Error in getAIResponse:', error);
    throw error;
  }
}