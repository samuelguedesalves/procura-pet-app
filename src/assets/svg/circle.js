import React from 'react';
import { Circle, Svg } from 'react-native-svg';

export default function SvgCircle(){
    return(
        <Svg width={1000} height={1000} >
            <Circle cx="340" cy="340" r="340" fill="#fff" />
        </Svg>
    );
}