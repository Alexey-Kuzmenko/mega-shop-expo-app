import { atom } from 'jotai';
import { authAtom } from '@/entities/auth/model/auth.state';
import axios, { AxiosError } from 'axios';

import UserModel from './user.model';
import { USER_API_ROUTES } from '../api/api';
import { UpdatedUserDto } from './user.dto';

export interface UserState {
    profile: UserModel | null
    isLoading: boolean
    error: string | null
}

const initialValue: UserState = {
    profile: null,
    isLoading: false,
    error: null
};

export const userProfileAtom = atom<UserState>(initialValue);

export const getUserProfileAtom = atom(async (get) => get(userProfileAtom), async (get, set) => {
    try {
        const { access_token } = await get(authAtom);

        set(userProfileAtom, (prev) => ({
            ...prev,
            isLoading: true,
            error: null
        }));

        const { data } = await axios.get<UserModel>(USER_API_ROUTES.profile, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });

        set(userProfileAtom, {
            ...initialValue,
            profile: data,
        });

    } catch (error) {
        if (error instanceof AxiosError) {
            set(userProfileAtom, {
                ...initialValue,
                error: `Error code: ${error.code}, error message: ${error.response?.data}`
            });

            return;
        }

        // eslint-disable-next-line no-console
        console.error(String(error));
    }
});

export const updateUser = atom(async (get) => get(userProfileAtom),
    async (get, set, { id, ...updatedValues }: UpdatedUserDto) => {
        try {
            const { access_token } = await get(authAtom);

            set(userProfileAtom, (prev) => ({
                ...prev,
                isLoading: true,
                error: null
            }));

            const { data } = await axios.put<UserModel>(`${USER_API_ROUTES.user}/${id}`, updatedValues, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                },
            });

            set(userProfileAtom, {
                ...initialValue,
                profile: data,
            });

        } catch (error) {
            if (error instanceof AxiosError) {
                set(userProfileAtom, {
                    ...initialValue,
                    error: `Error code: ${error.code}, error message: ${error.response?.data}`
                });

                return;
            }

            // eslint-disable-next-line no-console
            console.error(String(error));
        }
    });
