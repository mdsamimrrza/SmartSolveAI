# AI Problem Solver

A React Native application built with Expo that uses AI to solve problems and answer questions. The app features a clean, modern UI and AI-powered chat functionality.

## Features

- 🤖 AI-powered problem solving using Gemini API
- 💬 Chat-like interface
- 📱 Cross-platform (iOS & Android)
- 🎨 Modern and responsive UI

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd SmartSolve_AI
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```
EXPO_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

## Running the App

1. Start the development server:
```bash
npx expo start
```

2. Run on your device:
- Install the Expo Go app on your device
- Scan the QR code from the terminal
- Or press 'a' for Android emulator, 'i' for iOS simulator

## Project Structure

```
SmartSolve_AI/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   ├── services/
│   │   └── geminiService.ts
├── App.tsx
├── app.json
└── package.json
```

## Tech Stack

- React Native
- Expo
- Redux Toolkit
- Google Authentication
- Gemini AI API
- TypeScript

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 