import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DescriptionSlider({slider}){
    if(slider === 0){
        return(
            <View>
                <Text style={Style.strongText} >
                    Bem vindo ao, Procura Pet!
                </Text>
                <Text style={Style.regularText} >
                    Nosso objetivo e ajudar na 
                    procura de pets perdidos.
                </Text>
            </View>
        );
    }else{
        if(slider === 1){
            return(
                <View>    
                    <Text style={Style.regularText} >
                        Vejá casos de desaparecimento 
                        de pets na sua cidade e entre 
                        em contato com o propietário.
                    </Text>
                </View>
            );
        }else{
            return(
                <View>    
                    <Text style={Style.regularText} >
                        Cadastre o caso de seu pet 
                        desaparecido, tentando detalhar 
                        ao maximo como ocorreu e de 
                        detalhes do local e horario.
                    </Text>
                </View>
            );
        }
    }
}

const Style = StyleSheet.create({
    strongText:{
        fontSize:24, 
        fontFamily: 'Roboto', 
        fontWeight: 'bold',
        color: '#fff',
    },
    regularText:{
        fontSize: 24, 
        fontFamily: 'Roboto',
        color: '#fff',
    }
})