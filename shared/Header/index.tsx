import { StyleProp, View, ViewStyle } from 'react-native';

import styles from './styles';
import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    headerStyle?: StyleProp<ViewStyle>
}

export const Header: FC<Props> = ({ headerStyle, children }) => {
    return (
        <View style={[styles.header, headerStyle]}>
            {children}
        </View>
    );
};
