import { colors } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        rowGap: 5,
        paddingTop: 20,
    },
    text: {
        color: colors.primary.black,
    },
    userName: {
        fontSize: 24,
    },
    userEmail: {
        fontSize: 16,
    }
});
