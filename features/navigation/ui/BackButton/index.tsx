import { Pressable, PressableProps, StyleProp, TextStyle } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '@/styles/theme';
import { FC } from 'react';

interface Props extends PressableProps {
    iconColor?: string
    iconSize?: number
    iconStyle?: StyleProp<TextStyle>
}

const defaultColor = colors.primary.black;

export const BackButton: FC<Props> = ({ iconColor = defaultColor, iconSize = 24, iconStyle, ...props }) => {
    return (
        <Pressable {...props} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
            <Ionicons name='chevron-back-outline' size={iconSize} color={iconColor} style={iconStyle} />
        </Pressable>
    );
};
