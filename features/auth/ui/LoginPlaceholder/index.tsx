import { Image, View } from 'react-native';
import { useRouter, useRoute } from 'expo-router';
import { CustomButton as Button, Typography } from '@/shared';

import styles from './styles';
import { content } from './content';

export const LoginPlaceholder = () => {
    const { name } = useRoute();
    const router = useRouter();
    const text = `Please login/register first ${content[name] ?? 'to be able to buy products from us'}`;

    const handleLogin = (): void => {
        router.push('/(auth)');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/shaking-hand-emoji.png')}
                style={styles.image}
            />

            <View style={styles.content}>
                <Typography
                    text='You need to login first'
                    fontStyle='medium'
                />
                <Typography
                    text={text}
                    textStyle={styles.text}
                />
            </View>

            <View style={styles.controls}>
                <Button label='Login' style={styles.button} onPress={handleLogin} />
                {/* Uncomment this when register screen will be added */}
                {/* <Button label='Register' style={styles.button} /> */}
            </View>
        </View>
    );
};
