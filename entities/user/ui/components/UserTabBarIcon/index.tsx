import { FC } from 'react';
import { View, Image } from 'react-native';
import { TAB_BAR_ICON_SIZE, ACTIVE_TAB_BAR_AVATAR_ICON_SIZE } from '@/constants';

import styles from './styles';

interface Props {
    isActive: boolean
    avatar: string
}

export const UserTabBarIcon: FC<Props> = ({ isActive, avatar }) => {
    if (isActive) {
        return (
            <View style={styles.icon}>
                <Image source={{ uri: avatar }} style={[styles.avatar, {
                    width: ACTIVE_TAB_BAR_AVATAR_ICON_SIZE,
                    height: ACTIVE_TAB_BAR_AVATAR_ICON_SIZE
                }]} />
            </View>
        );
    }

    if (avatar) {
        return (
            <Image source={{ uri: avatar }} style={[styles.avatar, {
                width: TAB_BAR_ICON_SIZE,
                height: TAB_BAR_ICON_SIZE
            }]} />
        );
    }

};

