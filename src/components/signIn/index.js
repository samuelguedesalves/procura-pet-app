import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    Dimensions, 
    KeyboardAvoidingView, 
    Keyboard, 
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import SvgCicle from '../../assets/svg/circle';


const {width, height} = Dimensions.get('window');

export default function SignIn({routerManager}){
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={Style.container} >
                    <View >
                        <View style={Style.circle} >
                            <SvgCicle/>
                        </View>
                        <View 
                            style={{
                                position: "absolute",
                                zIndex:-2,
                                left: -470,
                                transform: [
                                    {scale: 0.2}
                                ],

                            }} 
                        >
                            <SvgCicle/>
                        </View>
                    </View>
                    <View style={Style.containerInput} >
                    <Text style={Style.title} >Login</Text>

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
                            onPress={()=> routerManager(3)}
                        >
                            <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold', marginRight: 10,}} >Login</Text>
                            <Feather name="log-in" size={24} color="#fff" />
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
        top: 450,
        left: 50,
    },
    containerInput:{
        marginTop: 80,
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
    },
    title: {
        fontSize: 40,
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: 30,
    }
});