/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { logoutAtom } from '@/entities/auth';
import { getProductAtom, productAtom, ProductCard } from '@/entities/product';
import { CustomButton as Button } from '@/shared/CustomButton';
import { CustomLink as Link } from '@/shared/CustomLink';
import { Typography } from '@/shared/Typography';

export default function Home() {
    // ! Testing
    const logout = useSetAtom(logoutAtom);
    const getProducts = useSetAtom(getProductAtom);
    const products = useAtomValue(productAtom);
    const product = products.products ? products.products[0] : null;

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
            {product ? <ProductCard
                title={product.title}
                price={product.price}
                images={product.images}
                onPress={() => { }} /> : null}
        </>
    );
}
