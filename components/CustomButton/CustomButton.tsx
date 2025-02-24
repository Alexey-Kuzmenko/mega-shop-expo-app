import { Colors, Radius } from '@/constants/constants';
import { Animated, GestureResponderEvent, Pressable, PressableProps, StyleSheet } from 'react-native';

interface ButtonProps extends PressableProps {
    label: string
}

export const CustomButton: React.FC<ButtonProps> = ({ label, ...props }) => {
    const animatedValue = new Animated.Value(100);

    const bgColor = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primary.pureWhite, Colors.primary.blueOcean]
    });

    const textColor = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primary.black, Colors.primary.pureWhite]
    });

    const handlePressIn = (e: GestureResponderEvent): void => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 1_00,
            useNativeDriver: true
        }).start();

        props.onPressIn ? props.onPressIn(e) : null;
    };
    const handlePressOut = (e: GestureResponderEvent): void => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 1_00,
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
                <Animated.Text style={{
                    ...styles.label,
                    color: textColor
                }}>
                    {label}
                </Animated.Text>
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        // backgroundColor: Colors.primary.blueOcean,
        borderRadius: Radius.r10,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 12.5,
        paddingRight: 12.5,
        height: 50
    },
    label: {
        color: Colors.primary.pureWhite,
        fontSize: 14
    }
});