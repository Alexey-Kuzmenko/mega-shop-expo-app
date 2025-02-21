import { useState } from 'react';

import { TextInput, TextInputProps, View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors, Gaps, Radius } from '@/constants/tokens';
import ClosedEyeIcon from '@/assets/icons/closed-eye';
import EyeIcon from '@/assets/icons/eye';

interface InputProps extends TextInputProps {
    label?: string
    isPassword?: boolean
}

export const Input: React.FC<InputProps> = ({ label, isPassword, ...props }) => {
    const [isShown, setIsShown] = useState<boolean>(false);

    const handlePress = (): void => {
        setIsShown(!isShown)
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
                placeholderTextColor={Colors.secondary.halfGrey}
            />
            {
                isPassword ? iconButton : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    inputGroup: {
        rowGap: Gaps.g20
    },
    input: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 15,

        color: Colors.primary.black,
        fontSize: 14,
        lineHeight: 18,

        backgroundColor: Colors.secondary.softGrey,
        borderRadius: Radius.r10
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: Colors.primary.black
    },
    icon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        paddingHorizontal: 20,
        paddingVertical: 17
    }
})