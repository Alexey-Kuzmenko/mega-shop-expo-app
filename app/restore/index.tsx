import { Link } from 'expo-router';
import { View, Text } from 'react-native';

function Restore() {
    return (
        <View>
            <Link href='/'>
                <Text>Restore Password</Text>
            </Link>
        </View>
    );
}

export default Restore;
