import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconProps } from '@/types';
import { colors } from '@/styles/theme';

export const InfoIcon = ({ color = colors.primary.black, ...props }: IconProps) => (
    <Svg
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <Path fill="transparent" d="M0 0h24v24H0z" />
        <Circle
            cx={12}
            cy={12}
            r={9}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11v6M11.75 8V7h.5v1h-.5Z"
        />
    </Svg>
);
