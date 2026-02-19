import { StyleSheet } from 'react-native';
import { colors, radius } from '@/styles/theme';

const ALERT_DEFAULT_WIDTH = 325;

export default StyleSheet.create({
    alert: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: [{ translateX: -ALERT_DEFAULT_WIDTH / 2 }],

        width: ALERT_DEFAULT_WIDTH,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,

        zIndex: 1,
        borderRadius: radius.r10,
        borderWidth: 0.5,
        borderColor: colors.primary.black
    },
    contentWrapper: {
        flexDirection: 'row',
        width: ALERT_DEFAULT_WIDTH - 20,
        columnGap: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        color: colors.primary.navyBlack,
        textAlign: 'center',
        flexShrink: 1,
    },
    icons: {},
    closeIcon: {

    },
});
