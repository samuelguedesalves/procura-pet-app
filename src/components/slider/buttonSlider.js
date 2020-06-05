import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function ButtonSlider({ slider, skipSlider, width }){
    if(slider === 0){
        return(
            <TouchableOpacity style={Style.buttom} onPress={ () => skipSlider() } >
                <Text style={Style.text} >Conhecer o App</Text>
                <AntDesign name="arrowright" size={24} color="#fff" style={{marginLeft: 10}} />
            </TouchableOpacity>
        );
    }else{
        return(
            <View style={[Style.footer, { width: width - 84 } ]} >
                <View style={Style.sliderMarker} >
                    <FontAwesome name="circle" size={24} color="#fff" />
                    <FontAwesome name="circle" size={24} color="#fff" />
                    { slider === 1 ?
                        <FontAwesome name="circle" size={36} color="#fff" 
                            style={{
                                position: 'absolute',
                                zIndex: -1,
                                top: -6,
                                left: -5,
                                opacity: 0.5,
                            }} 
                        />
                        :
                        <FontAwesome name="circle" size={36} color="#fff" 
                            style={{
                                position: 'absolute',
                                zIndex: -1,
                                top: -6,
                                left: 35,
                                opacity: 0.5,
                            }} 
                        />
                    }
                </View>
                <TouchableOpacity 
                    style={[Style.buttom, { width: 175, paddingLeft: 35, paddingRight: 35, }]} 
                    onPress={ () => skipSlider() } 
                >
                    <Text style={Style.text} >Próximo</Text>
                    <AntDesign name="arrowright" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        );
    }
}

const Style = StyleSheet.create({
    buttom:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 50,
        backgroundColor: '#FDA339',
        height: 55,
        paddingLeft: 75,
        paddingRight: 75,

        shadowColor: '#D32F2A',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
    },
    text:{
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 24,
    },
    sliderMarker:{
        width: 60,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
    },
    footer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    }
});
