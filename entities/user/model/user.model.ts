export type UserRole = 'admin' | 'customer';

export default interface UserModel {
    id: number
    email: string
    password: string
    name: string
    role: UserRole
    avatar: string
}