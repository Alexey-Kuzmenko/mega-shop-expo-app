/* eslint-disable no-console */
import axios, { AxiosError } from 'axios';
import FormData from 'form-data';
import { API_URL } from '@/constants';
import { UploadAvatarResponse } from './upload-avatar.dto';

export const uploadAvatar = async (uri: string, name: string): Promise<UploadAvatarResponse | null> => {
    const fromData = new FormData();

    fromData.append('file', {
        uri,
        name,
        type: 'image/jpeg'
    });

    try {
        const { data } = await axios.post(`${API_URL}/files/upload`, fromData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('Upload failed:', {
                status: error.response?.status,
                message: error.message,
                data: error.response?.data
            });
        } else {
            console.error('Unexpected error:', error);
        }

        return null;
    }
};
