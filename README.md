# AI Problem Solver

A React Native application built with Expo that uses AI to solve problems and answer questions. The app features Google authentication, dark mode support, and a clean, modern UI.

## Features

- 🤖 AI-powered problem solving using Gemini API
- 🌓 Dark/Light mode support
- 🔐 Google Authentication
- 💬 Chat-like interface
- 📱 Cross-platform (iOS & Android)
- 🎨 Modern and responsive UI

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- Google Cloud Console account (for authentication)

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

4. Set up Google Authentication:
- Go to [Google Cloud Console](https://console.cloud.google.com)
- Create a new project
- Enable Google Sign-In API
- Create OAuth 2.0 credentials
- Add your app's bundle ID/package name
- Update the client IDs in `src/components/Auth/AuthScreen.tsx`:
  ```typescript
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: 'YOUR_WEB_CLIENT_ID',
    androidClientId: 'YOUR_ANDROID_CLIENT_ID',
    iosClientId: 'YOUR_IOS_CLIENT_ID',
    scopes: ['profile', 'email']
  });
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
│   │   ├── Auth/
│   │   │   └── AuthScreen.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── QueryInput.tsx
│   │   ├── QueryHistory.tsx
│   │   └── ThemeToggle.tsx
│   ├── store/
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   ├── queryHistorySlice.ts
│   │   │   └── themeSlice.ts
│   │   └── store.ts
│   └── services/
│       └── geminiService.ts
├── assets/
│   ├── logo.webp
│   └── google-logo.png
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