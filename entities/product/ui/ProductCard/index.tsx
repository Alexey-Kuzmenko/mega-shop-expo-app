import { FC } from 'react';
import { Pressable, Image, GestureResponderEvent, View } from 'react-native';
import { Typography } from '@/shared';

import styles from './styles';

interface Props {
    title: string
    price: number,
    images: Array<string>
    onPress: (event: GestureResponderEvent) => void
}

export const ProductCard: FC<Props> = ({ title, price, images, onPress }) => {
    // * Temporary solution, in feature all images will be shown in carousel
    const image = images[0];
    const priceText = `${price} $`;

    return (
        <Pressable onPress={onPress} style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />

            <View style={styles.description}>
                <Typography text={title} textStyle={styles.title} fontStyle='medium' />
                <Typography text={priceText} textStyle={styles.price} fontStyle='bold' />
            </View>
        </Pressable>
    );
};
