import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Logo from '../assets/logo.png';
import Pin from '../assets/pin.png';
import New from '../assets/new.png';
import SvgCircle from '../assets/svg/circle';

//components
import Description from './descriptionSlider';
import ImageSlider from './imageSlider';
import ButtomSlider from './buttonSlider';

const {width, height} = Dimensions.get('window');

export default function Slider (){
    const [ slider, setSlider ] = useState(0);

    function skipeSlider(){
        setSlider(slider+1);
    }

    return(
        <View style={Style.container}>
            <View style={Style.circle} >
                <SvgCircle/>
            </View>
            {slider != 0?
                    <TouchableOpacity style={Style.skipeButton} >
                        <Text style={{ fontSize: 21, fontWeight: 'bold', color: '#888' }} >Pular</Text>
                        <Ionicons name="ios-arrow-forward" size={24} color="#888" />
                    </TouchableOpacity>
                :
                <></>
            }

            <View style={Style.header} >
                <ImageSlider slider={slider} />
            </View>

            <View style={Style.main} >
                <View style={{ 
                    position: "absolute", 
                    bottom: 120, 
                    width: width - 84
                }} >
                    <Description slider={slider} />
                </View>
                <ButtomSlider slider={slider} skipSlider={skipeSlider} width={width} />
            </View>
        </View>
    );
}

const Style = StyleSheet.create({
    container:{
        width,
        height,
        backgroundColor: '#FF5E59',
    },
    circle:{
        position: "absolute",
        zIndex: -1,
        left: -220,
        top: -330,
    },
    header:{
        width,
        position: "absolute",
        display:"flex",
        flexDirection: 'row',
        justifyContent: 'center',
    },
    main:{
        position: "absolute",
        bottom: 0,
        marginBottom: 80,
        margin: 44,
    },
    skipeButton: {
        position: 'absolute',
        top: 20,
        right: 30,
        width: 60,
        height: 28,
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    }
});