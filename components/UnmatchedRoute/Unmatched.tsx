import { Image, View } from 'react-native';
import { Link } from 'expo-router';
import { Typography } from '../Typography/Typography';

import styles from './styles';

export const UnmatchedRoute = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/emoji.png')} style={styles.image} />
            <Typography text='Uppps unmatched route' fontStyle='medium' textStyle={styles.title} />
            <Link href='/' style={styles.button}>
                <Typography text='Go home' textStyle={styles.buttonText} />
            </Link>
        </View>
    );
};