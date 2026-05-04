import { colors } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    homeScreenHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 25,
    },
    homeScreenHeaderLogo: {
        flexGrow: 1,
        alignItems: 'center',
        paddingLeft: 25
    },
    homeScreenHeaderLogoText: {
        color: colors.primary.blueOcean,
        fontSize: 18,
    },
    icon: {
        flexGrow: 2,
    }
});
