import { Image, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Typography } from '../Typography/Typography';
import { CustomButton as Button } from '../CustomButton/CustomButton';

import styles from './styles';

export const UnmatchedRoute = () => {
    const router = useRouter();

    const handelPress = (): void => {
        router.navigate('/');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/thinking_face_emoji.png')} style={styles.image} />
            <Typography text='Uppps unmatched route' fontStyle='medium' textStyle={styles.title} />
            <Button label='Go home' onPress={handelPress} />
        </View>
    );
};