import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#4CAF50',
    secondary: '#FF9800',
    error: '#F44336',
    warning: '#FFC107',
    success: '#4CAF50',
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#212121',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onSurface: '#212121',
    onBackground: '#212121',
  },
  roundness: 8,
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#66BB6A',
    secondary: '#FFB74D',
    error: '#EF5350',
    warning: '#FFD54F',
    success: '#66BB6A',
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    onPrimary: '#000000',
    onSecondary: '#000000',
    onSurface: '#FFFFFF',
    onBackground: '#FFFFFF',
  },
  roundness: 8,
};
