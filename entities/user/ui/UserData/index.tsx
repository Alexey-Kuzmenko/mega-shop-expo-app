import { FC } from 'react';
import { View } from 'react-native';
import { Typography } from '@/shared';
import UserModel from '../../model/user.model';

import styles from './styles';

interface Props {
    userProfile: UserModel
}

export const UserData: FC<Props> = ({ userProfile }) => {

    return (
        <View style={styles.wrapper}>
            <Typography text={userProfile.name} textStyle={[styles.text, styles.userName]} fontStyle='bold' />
            <Typography text={userProfile.email} textStyle={[styles.text, styles.userEmail]} fontStyle='medium' />
        </View>
    );
};
