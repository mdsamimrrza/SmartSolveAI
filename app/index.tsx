import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../src/store/store';
import { QueryInput } from '../src/components/QueryInput';
import { QueryHistory } from '../src/components/QueryHistory';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

export default function Home() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <>
      <Header />
      <View style={[
        styles.content,
        { backgroundColor: isDarkMode ? '#121212' : '#f0f0f0' }
      ]}>
        <QueryHistory />
      </View>
      <View style={styles.bottomSection}>
        <QueryInput />
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 12,
  },
  bottomSection: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  }
}); 