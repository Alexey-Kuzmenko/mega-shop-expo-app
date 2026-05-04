import { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { BackButton } from '@/features/navigation';
import { Header } from '@/shared';

import styles from './styles';

interface Props {
    headerContainerStyle?: StyleProp<ViewStyle>
}

export const MainHeader: FC<Props> = ({ headerContainerStyle }) => {
    const router = useRouter();

    const handlePress = (): void => {
        router.back();
    };

    return (
        <Header headerStyle={[styles.mainHeader, headerContainerStyle]}>
            <BackButton onPress={handlePress} />
        </Header>
    );
};
