import { colors, radius } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginBottom: 30,
        width: 50,
        height: 50
    },
    title: {
        fontSize: 20,
        color: colors.primary.black,
        marginBottom: 20,
    },
    button: {
        borderRadius: radius.r10,
        backgroundColor: colors.primary.blueOcean,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 12.5,
        paddingRight: 12.5,
        height: 50
    },
    buttonText: {
        color: colors.primary.pureWhite,
        fontSize: 14,
    }
});