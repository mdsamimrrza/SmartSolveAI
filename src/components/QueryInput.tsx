import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Keyboard, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addQuery } from '../store/slices/queryHistorySlice';
import { generateResponse } from '../services/geminiService';
import { RootState } from '../store/store';

export const QueryInput: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const handleSubmit = async () => {
    if (!query.trim() || isLoading) return;

    try {
      setIsLoading(true);
      Keyboard.dismiss();
      const response = await generateResponse(query);
      dispatch(addQuery({
        id: Date.now().toString(),
        query,
        response,
        timestamp: Date.now(),
      }));
      setQuery('');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextChange = (text: string) => {
    setQuery(text);
    // Ensure the input scrolls to the end as user types
    setTimeout(() => {
      inputRef.current?.setNativeProps({
        selection: {
          start: text.length,
          end: text.length,
        },
      });
    }, 0);
  };

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
        borderTopColor: isDarkMode ? '#333' : '#e0e0e0'
      }
    ]}>
      <TextInput
        ref={inputRef}
        style={[
          styles.input,
          {
            backgroundColor: isDarkMode ? '#2d2d2d' : '#f5f5f5',
            color: isDarkMode ? '#fff' : '#000'
          }
        ]}
        value={query}
        onChangeText={handleTextChange}
        placeholder="Enter your question..."
        placeholderTextColor={isDarkMode ? '#888' : '#666'}
        multiline
        textAlignVertical="top"
        autoCapitalize="sentences"
        autoCorrect={true}
      />
      <TouchableOpacity 
        style={[
          styles.button,
          isLoading && styles.buttonDisabled,
          { backgroundColor: isLoading ? '#666' : (isDarkMode ? '#64B5F6' : '#007AFF') }
        ]} 
        onPress={handleSubmit}
        disabled={isLoading || !query.trim()}
      >
        {isLoading ? (
          <ActivityIndicator color={isDarkMode ? '#1e1e1e' : '#fff'} />
        ) : (
          <Ionicons name="send" size={24} color={isDarkMode ? '#1e1e1e' : '#fff'} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 12,
    paddingBottom: 50,
    backgroundColor: 'transparent',
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    fontSize: 16,
    minHeight: 40,
    maxHeight: 100,
  },
  button: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
}); 