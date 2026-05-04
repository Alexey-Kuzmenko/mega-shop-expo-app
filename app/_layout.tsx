import { useEffect } from 'react';
import { Platform } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

function RootLayout() {
    const insets = useSafeAreaInsets();
    const isIOS = Platform.OS === 'ios';

    const [loaded, error] = useFonts({
        DMSans: require('../assets/fonts/DMSans-Regular.ttf'),
        DMSansMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMSansBold: require('../assets/fonts/DMSans-Bold.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <StatusBar style='dark' />
            <Stack screenOptions={{
                headerShown: false,
                contentStyle: {
                    paddingTop: insets.top,
                    paddingBottom: isIOS ? 3 : 0
                }
            }}>
                <Stack.Screen name='(tabs)' />
                <Stack.Screen name='(auth)' />
                <Stack.Screen name='(notifications)' />
            </Stack>
        </SafeAreaProvider >
    );
}

export default RootLayout;
