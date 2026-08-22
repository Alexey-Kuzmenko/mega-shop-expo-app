import { Stack } from 'expo-router';

import { Container } from '@/shared';
import { MainHeader } from '@/widgets/layout';
import { colors } from '@/styles/theme';

function NotificationsLayout() {
    return (
        <Stack screenOptions={{
            header: () => <MainHeader />,
            contentStyle: {
                backgroundColor: colors.primary.pureWhite
            }
        }}
            screenLayout={({ children }) => (
                <Container>{children}</Container>
            )}
        >
            <Stack.Screen name='index' />
        </Stack>
    );
}

export default NotificationsLayout;
