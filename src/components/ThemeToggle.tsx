import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';
import { RootState } from '../store/store';

export const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => dispatch(toggleTheme())}
    >
      <Ionicons
        name={isDarkMode ? 'sunny' : 'moon'}
        size={22}
        color={isDarkMode ? '#fff' : '#000'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 