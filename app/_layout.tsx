import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../src/store/store';

const MainLayout = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <SafeAreaView style={[
      styles.container,
      { backgroundColor: isDarkMode ? '#121212' : '#f0f0f0' }
    ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#1e1e1e' : '#fff'}
      />
      <Slot />
    </SafeAreaView>
  );
};

export default function RootLayout() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
}); 