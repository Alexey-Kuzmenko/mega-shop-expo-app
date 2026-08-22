import { useEffect } from 'react';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SplashScreen, Stack } from 'expo-router';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

function RootLayout() {
    const isIOS = Platform.OS === 'ios';
    const statusBarStyle: StatusBarStyle = isIOS ? 'dark' : 'light';

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
            <StatusBar style={statusBarStyle} />
            <Stack screenOptions={{
                headerShown: false,
                contentStyle: {
                    paddingBottom: isIOS ? 3 : 0
                },
            }}
            >
                <Stack.Screen name='(tabs)' />
                <Stack.Screen name='(auth)' />
                <Stack.Screen name='(notifications)' />
            </Stack>
        </SafeAreaProvider >
    );
}

export default RootLayout;
