import { atom } from 'jotai';
import { createJSONStorage, atomWithStorage } from 'jotai/utils';
import axios, { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthRequest, AuthResponse } from './auth.model';
import { API_ROUTES } from '../api/api';
import { API_RESPONSE_ERRORS } from '@/constants/errors/api.errors';

export interface AuthState extends AuthResponse {
    isLoading: boolean
    error: string | null
}

const initialValue: AuthState = {
    access_token: null,
    refresh_token: null,
    isLoading: false,
    error: null
};

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

export const authAtom = atomWithStorage<AuthState>('auth', initialValue, storage);

export const loginAtom = atom((get) => get(authAtom), async (_, set, { email, password }: AuthRequest) => {
    try {
        set(authAtom, {
            ...initialValue,
            isLoading: true
        });

        const { data } = await axios.post<AuthResponse>(API_ROUTES.login, {
            email,
            password
        });

        set(authAtom, {
            access_token: data.access_token,
            refresh_token: data.refresh_token,
            isLoading: false,
            error: null
        });
    } catch (error) {
        if (error instanceof AxiosError) {
            let errorMessage: string;

            if (error.response?.status && error.response?.status in API_RESPONSE_ERRORS) {
                errorMessage = API_RESPONSE_ERRORS[error.response?.status];
            } else {
                errorMessage = `Error code: ${error.code}, error message: ${error.message}`;
            }


            set(authAtom, {
                ...initialValue,
                error: errorMessage
            });

            return;
        }

        // eslint-disable-next-line no-console
        console.error(String(error));
    }
});

export const logoutAtom = atom(null, (_, set) => {
    set(authAtom, initialValue);
});