import UserModel from './user.model';

export type UpdatedUserDto = {
    id: string
} & Partial<Omit<UserModel, 'id'>>;
