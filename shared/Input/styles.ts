import { gaps, colors, radius } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    inputGroup: {
        rowGap: gaps.g20
    },
    input: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 15,

        color: colors.primary.black,
        fontSize: 14,
        lineHeight: 18,

        backgroundColor: colors.secondary.softGrey,
        borderRadius: radius.r10
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: colors.primary.black
    },
    icon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        paddingHorizontal: 20,
        paddingVertical: 17
    }
});