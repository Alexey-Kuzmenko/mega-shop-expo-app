import { View } from 'react-native';
import { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';

import { LoginPlaceholder } from '@/features/auth';
import { authAtom } from '@/entities/auth';
import { getUserProfileAtom } from '@/entities/user';
import { UserAvatarPicker } from '@/features/user';

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
            <UserAvatarPicker avatarUri={profile.profile?.avatar} />
        </View>
    );
}

export default UserProfile;
