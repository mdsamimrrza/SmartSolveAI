import axios from 'axios';

const API_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta';
const MODEL = 'gemini-2.0-flash';

const formatPrompt = (prompt: string) => {
  return `Please provide a clear and well-formatted response to the following question. 
  Use proper paragraphs, and avoid using markdown symbols like * or **. 
  Format the response in a conversational, easy-to-read style.
  
  Question: ${prompt}`;
};

export const generateResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/models/${MODEL}:generateContent?key=${process.env.EXPO_PUBLIC_GEMINI_API_KEY}`,
      {
        contents: [{
          parts: [{
            text: formatPrompt(prompt)
          }]
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // Extract and clean the response text
    let generatedText = response.data.candidates[0]?.content?.parts[0]?.text || 'No response generated';
    // Remove any remaining markdown symbols
    generatedText = generatedText.replace(/\*\*/g, '').replace(/\*/g, '');
    return generatedText;
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
}; 