import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const Footer: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <View style={[
      styles.container,
      { 
        backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
        borderTopColor: isDarkMode ? '#333' : '#e0e0e0'
      }
    ]}>
      <Text style={[
        styles.text,
        { color: isDarkMode ? '#888' : '#666' }
      ]}>Powered by Gemini AI</Text>
      <Text style={[
        styles.version,
        { color: isDarkMode ? '#666' : '#999' }
      ]}>v1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderTopWidth: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  text: {
    fontSize: 11,
    marginBottom: 2,
  },
  version: {
    fontSize: 9,
  },
}); 