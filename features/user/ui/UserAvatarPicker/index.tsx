import { FC, useState } from 'react';
import { View, Image, Pressable, Alert, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
    ImagePickerAsset,
    PermissionStatus,
    launchImageLibraryAsync,
    useMediaLibraryPermissions,
} from 'expo-image-picker';

import { colors } from '@/styles/theme';

import styles, { PICK_IMG_BUTTON_ICON_SIZE } from './styles';
import { uploadAvatar } from '../../api';

interface Props {
    avatarUri?: string
}

export const UserAvatarPicker: FC<Props> = ({ avatarUri }) => {
    const [image, setImage] = useState<string | null>(avatarUri ?? null);
    const [libraryPermissions, requestLibraryPermissions] = useMediaLibraryPermissions();

    const handleOpenSettings = (): void => {
        Linking.openSettings();
    };

    const verifyLibraryPermissions = async (): Promise<boolean> => {
        if (libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
            const res = await requestLibraryPermissions();

            return res.granted;
        }

        if (libraryPermissions?.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Permission Required',
                'There are not enough rights to access the library. Please change settings',
                [
                    { text: 'Cancel', style: 'cancel' },
                    {
                        text: 'Open Settings',
                        onPress: handleOpenSettings
                    },
                ]
            );

            return false;
        }

        return true;
    };

    const pickAvatar = async (): Promise<ImagePickerAsset | null> => {
        const result = await launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
        });

        if (!result.assets?.length) {
            // eslint-disable-next-line no-console
            console.error('Image isn\'t picked');
            return null;
        }

        return result.assets[0];
    };

    const handleUploadImage = async (): Promise<void> => {
        const isLibraryPermissionGranted = await verifyLibraryPermissions();
        if (!isLibraryPermissionGranted) return;

        const asset = await pickAvatar();
        if (!asset) return;

        const response = await uploadAvatar(asset.uri, asset.fileName ?? '');
        if (!response?.location) return;

        setImage(response.location);
    };

    return (
        <View style={styles.wrapper}>
            {image ?
                <Image source={{ uri: image }} style={styles.img} />
                :
                <Ionicons name="person-outline" size={50} color={colors.primary.black} />
            }
            <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.pickButton]}
                onPress={handleUploadImage}
            >
                <Ionicons name='pencil-outline' size={PICK_IMG_BUTTON_ICON_SIZE} color={colors.primary.pureWhite} />
            </Pressable>
        </View>
    );
};
