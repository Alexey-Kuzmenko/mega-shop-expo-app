import { PropsWithChildren } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

import styles from './styles';

const fontStyles = {
    'regular': 'DMSans',
    'medium': 'DMSansMedium',
    'bold': 'DMSansBold'
};

interface TypographyProps extends PropsWithChildren {
    text: string
    textStyle?: StyleProp<TextStyle>
    fontStyle?: keyof typeof fontStyles
}


export const Typography: React.FC<TypographyProps> = ({ text, textStyle, fontStyle = 'regular' }) => {
    return (
        <Text style={[styles.typography, textStyle, { fontFamily: fontStyles[fontStyle] }]}>{text}</Text>
    );
};

