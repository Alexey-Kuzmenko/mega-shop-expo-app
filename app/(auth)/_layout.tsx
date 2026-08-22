import { Platform } from 'react-native';
import { Stack } from 'expo-router';

import { MainHeader } from '@/widgets/layout';
import { colors } from '@/styles/theme';
import { Container } from '@/shared';

function AuthLayout() {
    const isIOS = Platform.OS === 'ios';

    return (
        <Stack screenOptions={{
            headerShown: true,
            title: '',
            contentStyle: {
                paddingBottom: isIOS ? 3 : 0,
                backgroundColor: colors.primary.pureWhite
            },
            header: () => <MainHeader />,
        }}
            screenLayout={({ children }) => (
                <Container>{children}</Container>
            )}
        >
            <Stack.Screen name='index' />
            <Stack.Screen name='signup' />
            <Stack.Screen name='restore' />
        </Stack>
    );
}

export default AuthLayout;
