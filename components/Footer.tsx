import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}> 2024 SmartSolve AI Version 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#141414',
  },
  text: {
    color: '#666',
    fontSize: 12,
  },
  version: {
    fontSize: 10,
    color: '#999',
    marginTop: 2,
  },
}); 