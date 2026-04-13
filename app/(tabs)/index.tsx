import { useSetAtom } from 'jotai';

import { logoutAtom } from '@/entities/auth/model/auth.state';
import { CustomButton as Button } from '@/shared/CustomButton';
import { CustomLink as Link } from '@/shared/CustomLink';
import { Typography } from '@/shared/Typography';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
    const logout = useSetAtom(logoutAtom);

    const handleLogout = (): void => {
        logout();
        AsyncStorage.getItem('auth').then((data) => console.log(data, 'Auth data after log out'));
    };

    return (
        <>
            <Typography text='Home screen' />
            <Link href='/(auth)' label='Login' />
            <Button label='Log out' onPress={handleLogout} />
        </>
    );
}
