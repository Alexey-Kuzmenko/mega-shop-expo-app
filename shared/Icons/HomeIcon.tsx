import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '@/types';
import { colors } from '@/styles/theme';

export const HomeIcon = ({ color = colors.primary.black, ...props }: IconProps) => (
    <Svg
        fill="none"
        // viewBox='-1 0 0 0'
        {...props}
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            // eslint-disable-next-line max-len
            d="M7.407 19.521v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0L1.712 6.693A2.42 2.42 0 0 0 .75 8.597v8.715c0 1.899 1.555 3.438 3.473 3.438h1.924c.685 0 1.241-.55 1.241-1.229v0"
        />
    </Svg>
);
