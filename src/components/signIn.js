import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    Image, 
    StyleSheet, 
    Dimensions, 
    KeyboardAvoidingView, 
    Keyboard, 
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';

import SvgCicle from '../assets/svg/circle';

import Logo from '../assets/logo.png';

const {width, height} = Dimensions.get('window');

export default function SignIn(){
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={Style.container} >
                    <View style={{flex: 1}} >
                        <View style={Style.circle} >
                            <SvgCicle/>
                        </View>
                        <View style={Style.containerLogo} >
                            <Image source={Logo} style={Style.logo} />
                        </View>
                    </View>
                    <View style={Style.containerInput} >
                        <TextInput placeholder='E-mail' style={Style.input}/>
                        <TextInput placeholder='Senha' style={[Style.input, { marginTop: 25, }]}/>

                        <TouchableOpacity 
                            style={[Style.input, { 
                                backgroundColor: '#FDA339', 
                                borderRadius: 50,
                                marginTop: 25,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }]} 
                        >
                            <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}} >Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const Style = StyleSheet.create({
    container:{
        flex: 1,
        width, 
        height,
        backgroundColor: '#FF5E59',
    },
    circle:{
        position: 'absolute',
        zIndex: -1,
        left: -220,
        top: -330,
    },
    logo:{
        width: 326,
        height: 326,
    },
    containerLogo:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    containerInput:{
        flex: 1,
        margin: 42,
    },
    input:{
        height: 50, 
        backgroundColor: '#eee', 
        borderRadius: 12, 
        color: '#333', 
        padding: 16,
        fontSize: 20,

        shadowColor: '#D32F2A',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 3,
    }
});