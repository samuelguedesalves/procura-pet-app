import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

function Caso (){
    return(
        <View 
            style={{
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 15,            }} 
        >
            <View 
                style={{
                    backgroundColor: '#e4e4e4',
                    width: 70,
                    height: 70,
                    borderRadius: 5,
                    marginRight: 10,
                }} 
            />
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >titulo</Text>

                <Text style={{ fontSize: 18, color: 'rgba(0,0,0,0.6)', width: 240, height: 42, lineHeight: 24, }} >
                    descrição do pet perdido na sua cidade, ajude há encontrar este pet! porfavor ajude! ligue para meu celular!
                </Text>
            </View>
        </View>
    );
}

export default function Casos () {
    return(
        <View style={Style.container} >
            <Text style={Style.title} >Casos</Text>

            <View style={Style.list} >
                <Caso/>
                <Caso/>
                <Caso/>
                <Caso/>
            </View>
        </View>
    );
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#FF5E59',
    },
    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
    list: {
        marginTop: 20,
    }
});