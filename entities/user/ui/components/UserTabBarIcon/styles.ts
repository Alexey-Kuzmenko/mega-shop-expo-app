import { StyleSheet } from 'react-native';
import { colors } from '@/styles/theme';
import { TAB_BAR_ICON_SIZE } from '@/constants';

export default StyleSheet.create({
    icon: {
        height: TAB_BAR_ICON_SIZE,
        width: TAB_BAR_ICON_SIZE,
        backgroundColor: colors.primary.pureWhite,
        borderRadius: '100%',

        borderWidth: 2,
        borderColor: colors.primary.blueOcean,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        borderRadius: 50
    }
});
