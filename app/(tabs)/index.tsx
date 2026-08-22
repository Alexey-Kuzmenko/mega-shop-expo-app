/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { logoutAtom } from '@/entities/auth';
import { getProductAtom } from '@/entities/product';
import { CustomButton as Button } from '@/shared/CustomButton';
import { CustomLink as Link } from '@/shared/CustomLink';
import { Typography } from '@/shared/Typography';

export default function Home() {
    const logout = useSetAtom(logoutAtom);
    const getProducts = useSetAtom(getProductAtom);

    useEffect(() => {
        getProducts();
    }, []);

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
