import { colors } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainHeader: {
        paddingLeft: 20,
        paddingVertical: 15,
        boxShadow: [{
            offsetX: 0,
            offsetY: 1,
            blurRadius: 4,
            color: colors.overlay['005'],
        }],
    }
});
