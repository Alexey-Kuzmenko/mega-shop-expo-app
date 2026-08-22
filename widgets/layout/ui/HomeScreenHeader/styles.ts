import { colors } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    homeScreenHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        boxShadow: [{
            offsetX: 0,
            offsetY: 1,
            blurRadius: 4,
            color: colors.overlay['005'],
        }],
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
