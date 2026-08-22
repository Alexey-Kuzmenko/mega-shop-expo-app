import { atom } from 'jotai';
import { AxiosError } from 'axios';

import { ProductModel } from './product.model';
import { fetchAllProducts } from '../api';

interface ProductState {
    products: Array<ProductModel> | null
    isLoading: boolean
    error: string | null
}

const initialValue: ProductState = {
    products: null,
    isLoading: false,
    error: null
};

export const productAtom = atom<ProductState>(initialValue);

export const getProductAtom = atom(async (get) => get(productAtom), async (_, set) => {
    try {
        set(productAtom, {
            products: null,
            isLoading: true,
            error: null
        });

        const { data } = await fetchAllProducts();

        set(productAtom, {
            ...initialValue,
            products: data
        });
    } catch (error) {
        if (error instanceof AxiosError) {
            set(productAtom, {
                ...initialValue,
                error: `Error code: ${error.code}, error message: ${error.response?.data}`
            });

            return;
        }

        // eslint-disable-next-line no-console
        console.error(String(error));
    }
});
