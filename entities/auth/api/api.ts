type API_ROUTES_KEYS = 'login' | 'profile' | 'products' | 'categories' | 'users';

const API_URL = process.env.EXPO_PUBLIC_API_URL;

if (!API_URL) {
    // eslint-disable-next-line no-console
    console.error('API_URL value isn\'t defined in .env* file');
}

export const API_ROUTES: Record<API_ROUTES_KEYS, string> = {
    login: `${API_URL}/auth/login`,
    profile: `${API_URL}/auth/profile`,
    products: `${API_URL}/products`,
    categories: `${API_URL}/categories`,
    users: `${API_URL}/users`
};