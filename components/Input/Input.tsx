import { useState } from 'react';

import { TextInput, TextInputProps, View, Text, Pressable } from 'react-native';
import { colors } from '@/styles/theme';
import ClosedEyeIcon from '@/components/Icons/ClosedEye';
import EyeIcon from '@/components/Icons/Eye';

import styles from './styles';

interface InputProps extends TextInputProps {
    label?: string
    isPassword?: boolean
}

export const Input: React.FC<InputProps> = ({ label, isPassword, ...props }) => {
    const [isShown, setIsShown] = useState<boolean>(false);

    const handlePress = (): void => {
        setIsShown(!isShown);
    };

    const iconButton = (
        <Pressable
            style={styles.icon}
            onPress={handlePress}
        >
            {isShown ? ClosedEyeIcon : EyeIcon}
        </Pressable>
    );

    return (
        <View style={styles.inputGroup}>
            {label ? <Text style={styles.inputLabel}>{label}</Text> : null}
            <TextInput
                {...props}
                secureTextEntry={isPassword && !isShown}
                style={styles.input}
                placeholderTextColor={colors.secondary.halfGrey}
            />
            {
                isPassword ? iconButton : null
            }
        </View>
    );
};