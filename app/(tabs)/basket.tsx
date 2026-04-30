import { View } from 'react-native';
import { useAtomValue } from 'jotai';
import { authAtom } from '@/entities/auth/model/auth.state';
import { Typography } from '@/shared';
import { LoginPlaceholder } from '@/features/auth/ui';

function Order() {
    const { access_token } = useAtomValue(authAtom);

    if (!access_token) {
        return <LoginPlaceholder />;
    }

    return (
        <View>
            <Typography text='Basket page' />
        </View>
    );
}

export default Order;
