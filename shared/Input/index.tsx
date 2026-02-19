import { useState } from 'react';

import { TextInput, TextInputProps, View, Text, Pressable } from 'react-native';
import { colors } from '@/styles/theme';
import { ClosedEyeIcon } from '@/shared/Icons/ClosedEye';
import { EyeIcon } from '@/shared/Icons/Eye';

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
            {isShown ? <ClosedEyeIcon width={20} height={18} /> : <EyeIcon width={20} height={16} />}
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
