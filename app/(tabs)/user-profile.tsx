import { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';

import { LoginPlaceholder } from '@/features/auth';
import { authAtom } from '@/entities/auth';
import { getUserProfileAtom } from '@/entities/user';
import { UserAvatarPicker } from '@/features/user';
import { Container } from '@/shared';
import { UserData } from '@/entities/user/ui/UserData';

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

    if (!profile.profile) {
        return null;
    }

    return (
        <Container>
            <UserAvatarPicker avatarUri={profile.profile.avatar} />
            <UserData userProfile={profile.profile} />
        </Container>
    );
}

export default UserProfile;
