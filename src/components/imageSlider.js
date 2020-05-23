import React from 'react';
import { View, Image } from 'react-native';

import Logo from '../assets/logo.png';
import Pin from '../assets/pin.png';
import New from '../assets/new.png';

export default function ImageSlider({slider}){
    if(slider === 0){
        return(
            <Image source={Logo} style={{ width: 326, height: 326 }} />
            );
    }else if( slider === 1 ){
        return(
            <Image source={Pin} style={{ width: 326, height: 326 }} />
        );
    } else {
        return(
            <Image source={New} style={{ width: 326, height: 326 }} />
        );
    }
}