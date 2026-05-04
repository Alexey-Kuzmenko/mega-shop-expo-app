import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { IconProps } from '@/types';
import { colors } from '@/styles/theme';

export const Bell = ({ color = colors.primary.black, ...props }: IconProps) => (
    <Svg
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill={color}
                // eslint-disable-next-line max-len
                d="M18.796 11.385 17.213 5.69a7.768 7.768 0 0 0-15.066.395L.92 11.596a4.167 4.167 0 0 0 4.068 5.071h.928a4.167 4.167 0 0 0 8.167 0h.698a4.167 4.167 0 0 0 4.015-5.282ZM10 18.334a2.5 2.5 0 0 1-2.346-1.667h4.693A2.5 2.5 0 0 1 10 18.334Zm6.772-4.321a2.48 2.48 0 0 1-1.99.987H4.988a2.5 2.5 0 0 1-2.44-3.042l1.225-5.514a6.1 6.1 0 0 1 11.833-.31l1.583 5.697a2.482 2.482 0 0 1-.418 2.182Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
