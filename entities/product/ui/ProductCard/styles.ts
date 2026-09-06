import { colors } from '@/styles/theme';
import { StyleSheet } from 'react-native';

const CARD_WIDTH = 156;
const IMAGE_SIZE = 125;
const BORDER_RADIUS = 10;
const BORDER_COLOR = 'rgba(229, 229, 229, 1.0)';

export default StyleSheet.create({
    card: {
        paddingVertical: 15,
        paddingHorizontal: 12,
        gap: 20,
        borderRadius: BORDER_RADIUS,
        backgroundColor: colors.primary.pureWhite,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        width: CARD_WIDTH,
    },
    image: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: BORDER_RADIUS,
    },
    description: {
        gap: 4
    },
    title: {
        color: colors.primary.navyBlack,
        fontSize: 14
    },
    price: {
        color: colors.secondary.redVelvet,
        fontSize: 12
    },
});
