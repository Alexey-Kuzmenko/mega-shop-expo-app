import { colors } from '@/styles/theme';
import { MainHeader } from '@/widgets/layout';
import { Stack } from 'expo-router';

function NotificationsLayout() {
    return (
        <Stack screenOptions={{
            header: () => <MainHeader />,
            contentStyle: {
                backgroundColor: colors.primary.pureWhite
            }
        }}>
            <Stack.Screen name='index' />
        </Stack>
    );
}

export default NotificationsLayout;
