import { Typography } from '@/shared/Typography/Typography';
import { Link } from 'expo-router';
import { View } from 'react-native';

function SingUp() {
    return (
        <View>
            <Link href='/'>
                <Typography text='Sign Up' />
            </Link>
        </View>
    );
}

export default SingUp;