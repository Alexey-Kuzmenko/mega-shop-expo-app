import { authAtom } from '@/entities/auth/model/auth.state';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { getUserProfileAtom, userProfileAtom } from './user.state';

export const useUserProfile = () => {
    const { access_token } = useAtomValue(authAtom);
    const [, loadProfile] = useAtom(getUserProfileAtom);
    const { isLoading, error } = useAtomValue(userProfileAtom);

    useEffect(() => {
        if (access_token) {
            loadProfile();
        }

        return;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [access_token]);

    return {
        isLoading,
        error
    };
};
