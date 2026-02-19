import { Link, LinkProps } from 'expo-router';
import { fontStyles, Typography } from '../Typography';
import { StyleProp, TextStyle } from 'react-native';

type CustomLinkProps =
    LinkProps & {
        label: string,
        labelStyle?: StyleProp<TextStyle>,
        fontStyle?: keyof typeof fontStyles
    };

export const CustomLink: React.FC<CustomLinkProps> = ({ label, labelStyle, fontStyle, ...props }) => {
    return (
        <Link {...props}>
            <Typography text={label} textStyle={labelStyle} fontStyle={fontStyle} />
        </Link>
    );
};