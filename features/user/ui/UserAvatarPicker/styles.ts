import { colors } from '@/styles/theme';
import { StyleSheet } from 'react-native';

const AVATAR_PICKER_SIZE = 100;
const USER_AVATAR_SIZE = 90;
const PICK_IMG_BUTTON_SIZE = 25;
export const PICK_IMG_BUTTON_ICON_SIZE = 15;

export default StyleSheet.create({
    wrapper: {
        borderRadius: 100,
        width: AVATAR_PICKER_SIZE,
        height: AVATAR_PICKER_SIZE,

        backgroundColor: colors.primary.pureWhite,
        borderWidth: 2,
        borderColor: colors.primary.blueOcean,

        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    img: {
        width: USER_AVATAR_SIZE,
        height: USER_AVATAR_SIZE,
        borderRadius: 100,
    },
    pickButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        bottom: 0,
        right: 10,

        width: PICK_IMG_BUTTON_SIZE,
        height: PICK_IMG_BUTTON_SIZE,

        backgroundColor: colors.primary.blueOcean,
        borderRadius: '100%',
    }
});
