import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { getAIResponse } from './services/geminiService';

type Message = {
  id: string;
  text: string;
  isUser: boolean;
};

export default function App() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    // Add user message
    setMessages(prev => [...prev, { id: Date.now().toString(), text: inputText, isUser: true }]);
    setIsLoading(true);

    try {
      // Get AI response
      const response = await getAIResponse(inputText);
      setMessages(prev => [...prev, { id: Date.now().toString(), text: response, isUser: false }]);
      setInputText('');
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { id: Date.now().toString(), text: 'Sorry, something went wrong.', isUser: false }]);
    } finally {
      setIsLoading(false);
      // Scroll to bottom
      setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#141414" />
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          style={styles.content}
          renderItem={({ item }) => (
            <View style={[
              styles.messageContainer,
              item.isUser ? styles.userMessage : styles.botMessage,
            ]}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputWrapper}
      >
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSend}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#141414',
  },
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  content: {
    flex: 1,
    backgroundColor: '#141414',
  },
  messageContainer: {
    marginBottom: 10,
    padding: 12,
    borderRadius: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#4a90e2',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#2f2f2f',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#333',
    backgroundColor: '#141414',
  },
  input: {
    flex: 1,
    backgroundColor: '#222',
    borderRadius: 20,
    padding: 12,
    marginRight: 12,
    color: '#fff',
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: '#141414',
    padding: 16,
  },
});
