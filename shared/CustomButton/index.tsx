import { colors } from '@/styles/theme';
import { ActivityIndicator, Animated, GestureResponderEvent, Pressable, PressableProps } from 'react-native';

import styles from './styles';
import { Typography } from '../Typography';

interface ButtonProps extends PressableProps {
    label: string
    loading?: boolean
}

export const CustomButton: React.FC<ButtonProps> = ({ label, loading, ...props }) => {
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
                {
                    loading ?
                        <ActivityIndicator size='small' color={colors.primary.pureWhite} />
                        :
                        <Typography text={label} textStyle={styles.label} fontStyle='medium' />
                }
            </Animated.View>
        </Pressable>
    );
};