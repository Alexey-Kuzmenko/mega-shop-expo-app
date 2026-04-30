import { View } from 'react-native';
import { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { LoginPlaceholder } from '@/features/auth';
import { authAtom } from '@/entities/auth/model/auth.state';
import { getUserProfileAtom } from '@/entities/user/model/user.state';
import { Typography } from '@/shared';

function UserProfile() {
    const { access_token } = useAtomValue(authAtom);
    const [profile, loadProfile] = useAtom(getUserProfileAtom);

    useEffect(() => {
        loadProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!access_token) {
        return <LoginPlaceholder />;
    }

    return (
        <View>
            <Typography text='User profile' />
            <Typography text={JSON.stringify(profile)} />
        </View>
    );
}

export default UserProfile;
