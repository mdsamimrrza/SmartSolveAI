import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <View style={[
      styles.container,
      { 
        backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
        borderBottomColor: isDarkMode ? '#333' : '#e0e0e0'
      }
    ]}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.webp')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={[
          styles.title,
          { color: isDarkMode ? '#fff' : '#333' }
        ]}>AI Problem Solver</Text>
      </View>
      <View style={styles.toggleContainer}>
        <ThemeToggle />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleContainer: {
    justifyContent: 'center',
    paddingTop: 2,
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 