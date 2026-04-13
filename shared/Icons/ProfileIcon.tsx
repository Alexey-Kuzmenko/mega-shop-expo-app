import { IconProps } from '@/types';
import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { colors } from '@/styles/theme';

export const ProfileIcon = ({ color = colors.primary.black, ...props }: IconProps) => (
    <Svg
        fill="none"
        {...props}
    >
        <Circle
            cx={8.329}
            cy={5.528}
            r={4.778}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            // eslint-disable-next-line max-len
            d="M.75 15.952a2.215 2.215 0 0 1 .22-.97c.457-.916 1.748-1.401 2.819-1.62a16.778 16.778 0 0 1 2.343-.33 25.059 25.059 0 0 1 4.385 0c.787.055 1.57.165 2.343.33 1.07.219 2.361.658 2.82 1.62a2.27 2.27 0 0 1 0 1.949c-.459.961-1.75 1.4-2.82 1.61a15.71 15.71 0 0 1-2.343.34c-1.188.1-2.38.119-3.57.055-.275 0-.54 0-.815-.055a15.417 15.417 0 0 1-2.334-.34c-1.08-.21-2.361-.649-2.828-1.61a2.28 2.28 0 0 1-.22-.98Z"
            clipRule="evenodd"
        />
    </Svg>
);
