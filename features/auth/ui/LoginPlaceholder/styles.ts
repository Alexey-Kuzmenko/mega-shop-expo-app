import { colors } from '@/styles/theme';
import { StyleSheet } from 'react-native';

const IMAGE_SIZE = 80;
const COMPONENTS_WIDTH = 275;

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        rowGap: 30,
    },
    image: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
    },
    content: {
        rowGap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: COMPONENTS_WIDTH,
    },
    text: {
        textAlign: 'center',
        color: colors.secondary.halfGrey,
        fontSize: 14
    },
    controls: {
        rowGap: 10,
    },
    button: {
        width: COMPONENTS_WIDTH
    }
});
