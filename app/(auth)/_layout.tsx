import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

function AuthLayout() {
    const isIOS = Platform.OS === 'ios';

    return (
        <SafeAreaProvider>
            <StatusBar style='dark' />
            <Stack screenOptions={{
                headerShown: false,
                contentStyle: {
                    paddingBottom: isIOS ? 3 : 0
                }
            }}>
                <Stack.Screen name='index' options={{
                    title: 'Sign In',

                }} />
                <Stack.Screen name='signup/index' options={{
                    title: 'Sing Up'
                }} />
                <Stack.Screen name='restore/index' options={{
                    title: 'Restore password'
                }} />
            </Stack>
        </SafeAreaProvider>
    );
}

export default AuthLayout;