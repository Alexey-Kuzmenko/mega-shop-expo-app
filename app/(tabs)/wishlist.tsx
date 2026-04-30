import { View } from 'react-native';
import { authAtom } from '@/entities/auth/model/auth.state';
import { useAtomValue } from 'jotai';
import { Typography } from '@/shared';
import { LoginPlaceholder } from '@/features/auth';

function Wishlist() {
    const { access_token } = useAtomValue(authAtom);

    if (!access_token) {
        return <LoginPlaceholder />;
    }

    return (
        <View>
            <Typography text='Wishlist page' />
        </View>
    );
}

export default Wishlist;
