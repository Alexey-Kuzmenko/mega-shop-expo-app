import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Header } from '@/entities/auth/ui';

function AuthLayout() {
    const isIOS = Platform.OS === 'ios';

    return (
        <SafeAreaProvider>
            <StatusBar style='dark' />
            <Stack screenOptions={{
                headerShown: true,
                title: '',
                contentStyle: {
                    paddingBottom: isIOS ? 3 : 0
                },
                header: () => <Header />,
            }}>
                <Stack.Screen name='index' />
                <Stack.Screen name='signup' />
                <Stack.Screen name='restore' />
            </Stack>
        </SafeAreaProvider>
    );
}

export default AuthLayout;
