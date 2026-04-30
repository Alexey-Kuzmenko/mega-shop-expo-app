import { View } from 'react-native';
import { BackButton } from '@/features/navigation';
import { useRouter } from 'expo-router';

import styles from './styles';

export const Header = () => {
    const router = useRouter();

    const handlePress = (): void => {
        router.back();
    };

    return (
        <View style={styles.header}>
            <BackButton onPress={handlePress} />
        </View>
    );
};
