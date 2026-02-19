import { StyleSheet } from 'react-native';
import { colors, radius } from '@/styles/theme';

export default StyleSheet.create({
    button: {
        borderRadius: radius.r10,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 12.5,
        paddingRight: 12.5,
        height: 50
    },
    label: {
        color: colors.primary.pureWhite,
        fontSize: 14,
    }
});
