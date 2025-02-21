import { Colors, Radius } from '@/constants/tokens';
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';

interface ButtonProps extends PressableProps {
    label: string
}

export const CustomButton: React.FC<ButtonProps> = ({ label, ...props }) => {

    return (
        <Pressable
            {...props}
        >
            <View style={styles.button}>
                <Text style={styles.label}>
                    {label}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary.blueOcean,
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
})