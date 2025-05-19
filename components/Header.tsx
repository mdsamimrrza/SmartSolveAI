import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#141414',
    height: 80,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 44,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  }
});

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>SmartSolve AI</Text>
      <Text style={styles.subtitle}>Your Intelligent Problem Solver</Text>
    </View>
  );
}
