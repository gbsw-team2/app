import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated'; 

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  console.log(Stack.Screen); 

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="auth/signup" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="board" />
        <Stack.Screen name="board/new" />
        <Stack.Screen name="board/view" />
        <Stack.Screen name="mypage/main" />
        <Stack.Screen name="mypage/police" />
        <Stack.Screen name="translation/voice" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}