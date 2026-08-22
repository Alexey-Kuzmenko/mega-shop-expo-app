import axios from 'axios';
import { API_URL } from '@/constants';
import { ProductModel } from '../model';

export const fetchAllProducts = () => {
    return axios.get<ProductModel[]>(`${API_URL}/products`);
};
