import { Platform, StyleSheet } from 'react-native';
import { colors } from '@/styles/theme';

const footerBtnTextLineHeigh = Platform.OS === 'ios' ? 14 : 18;
const titleLineHeigh = Platform.OS === 'ios' ? 25 : 30;

export default StyleSheet.create({
    scrollWrapper: {
        flex: 1
    },
    container: {
        backgroundColor: colors.primary.pureWhite,
        paddingTop: 72,
        paddingLeft: 25,
        paddingRight: 25,
        height: '100%'
    },
    content: {
        marginBottom: 25,
        rowGap: 20
    },
    title: {
        fontSize: 25,
        lineHeight: titleLineHeigh,
        color: colors.primary.black,
        fontFamily: 'DMSans'
    },
    subTitle: {
        fontSize: 14,
        lineHeight: 25,
        fontWeight: '400',
        color: colors.secondary.halfGrey
    },
    form: {
        paddingTop: 25,
        rowGap: 30
    },
    formControls: {
        paddingTop: 70,
    },
    formButton: {
        backgroundColor: colors.primary.blueOcean
    },
    footer: {
        marginTop: 'auto',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerBtn: {
        fontSize: 14,
        lineHeight: footerBtnTextLineHeigh,
        color: colors.primary.black,
    },
    footerBtnBlue: {
        color: colors.primary.blueOcean,
        fontFamily: 'DMSansBold'
    }
});
