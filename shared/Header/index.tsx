import { FC, PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles';

interface Props extends PropsWithChildren {
    headerStyle?: StyleProp<ViewStyle>
}

export const Header: FC<Props> = ({ headerStyle, children }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.header, { paddingTop: insets.top }]}>
            <View style={headerStyle}>
                {children}
            </View>
        </View>
    );
};
