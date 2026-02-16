import { StyleSheet } from 'react-native';
import { colors } from '@/styles/theme';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary.pureWhite,
        paddingTop: '34%',
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
        lineHeight: 25,
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
        paddingTop: 85
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
        justifyContent: 'space-between'
    },
    footerBtn: {
        fontSize: 14,
        lineHeight: 14,
        color: colors.primary.black
    },
    footerBtnBlue: {
        fontSize: 14,
        lineHeight: 14,
        color: colors.primary.blueOcean,
        fontFamily: 'DMSansBold'
    }
});