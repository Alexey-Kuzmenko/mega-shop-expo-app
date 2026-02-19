import { atom } from 'jotai';
import UserModel from './user.model';

export interface UserState {
    profile: UserModel | null
    isLoading: boolean
    error: string | null
}

export const profileAtom = atom<UserState>({
    profile: null,
    isLoading: false,
    error: null
});
