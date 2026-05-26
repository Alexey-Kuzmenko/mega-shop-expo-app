import { PropsWithChildren, FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import styles from './styles';

interface Props extends PropsWithChildren {
    containerStyle?: StyleProp<ViewStyle>
}

export const Container: FC<Props> = ({ children, containerStyle }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {children}
        </View>
    );
};
