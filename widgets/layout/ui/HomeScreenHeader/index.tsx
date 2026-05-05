import { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { Header, Typography } from '@/shared';
import { NotificationButton } from '@/features/notifications';

import styles from './styles';

interface Props {
    headerContainerStyle?: StyleProp<ViewStyle>
}

export const HomeScreenHeader: FC<Props> = ({ headerContainerStyle }) => {
    const router = useRouter();

    const handlePress = (): void => {
        router.push('/(notifications)');
    };

    return (
        <Header headerStyle={[styles.homeScreenHeader, headerContainerStyle]}>
            <View style={styles.homeScreenHeaderLogo}>
                <Typography text='Mega Shop' fontStyle='bold' textStyle={styles.homeScreenHeaderLogoText} />
            </View>
            <NotificationButton style={styles.icon} onPress={handlePress} />
        </Header>
    );
};
