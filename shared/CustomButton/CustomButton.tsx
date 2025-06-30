import { colors } from '@/styles/theme';
import { Animated, GestureResponderEvent, Pressable, PressableProps } from 'react-native';

import styles from './styles';
import { Typography } from '../Typography/Typography';

interface ButtonProps extends PressableProps {
    label: string
}

export const CustomButton: React.FC<ButtonProps> = ({ label, ...props }) => {
    const animatedValue = new Animated.Value(100);

    const bgColor = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [colors.primary.navyBlack, colors.primary.blueOcean]
    });

    const handlePressIn = (e: GestureResponderEvent): void => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true
        }).start();

        props.onPressIn ? props.onPressIn(e) : null;
    };

    const handlePressOut = (e: GestureResponderEvent): void => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 150,
            useNativeDriver: true
        }).start();

        props.onPressOut ? props.onPressOut(e) : null;
    };

    return (
        <Pressable
            {...props}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Animated.View style={{
                ...styles.button,
                backgroundColor: bgColor,
            }}>
                <Typography text={label} textStyle={styles.label} fontStyle='medium' />
            </Animated.View>
        </Pressable>
    );
};