import { Pressable, StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { Typography } from '../Typography';
import { SuccessIcon } from '../Icons';

import styles from './styles';
import { CustomAlertIcon } from './CustomAlertIcon';

export type AlertType = 'info' | 'warning' | 'error' | 'success';

interface AlertProps {
    show: boolean
    type: AlertType
    text: string
    alertStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    onPress?: () => void
}

export const CustomAlert = ({ show, type, text, alertStyle, onPress }: AlertProps) => {
    if (!show) return null;

    return (
        <Pressable style={[styles.alert, alertStyle]} onPress={onPress}>
            <View style={styles.contentWrapper}>
                <CustomAlertIcon alertType={type} />
                <Typography text={text} fontStyle='medium' textStyle={styles.text} />
            </View>
        </Pressable>
    );
};
