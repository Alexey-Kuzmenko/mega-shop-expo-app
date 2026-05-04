import { FC } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { Bell } from '@/shared';

interface Props extends PressableProps {
    iconColor?: string
    iconSize?: number
}

export const NotificationButton: FC<Props> = ({ iconColor, iconSize = 20, ...props }) => {
    return (
        <Pressable {...props} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
            <Bell color={iconColor} width={iconSize} height={iconSize} />
        </Pressable>
    );
};
