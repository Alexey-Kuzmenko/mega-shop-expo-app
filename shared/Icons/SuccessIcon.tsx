import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '@/types';
import { colors } from '@/styles/theme';

export const SuccessIcon = ({ color = colors.primary.black, ...props }: IconProps) => (
    <Svg viewBox="0 0 36 36" {...props}>
        <Path
            d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14Z"
            fill={color}
        />
        <Path
            d="M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05-6-6A1 1 0 0 0 8 18.53L15.49 26 28 13.52a1 1 0 0 0 0-1.42Z"
            fill={color}
        />
        <Path fill="none" d="M0 0h36v36H0z" />
    </Svg>
);
