import React from 'react';

import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Casos() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Casos!</Text>
        </View>
    );
}

function Novo() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Novo!</Text>
        </View>
    );
}

function Perfil() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Perfil!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Router (){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Casos" component={Casos} />
                <Tab.Screen name="Novo" component={Novo} />
                <Tab.Screen name="Perfil" component={Perfil} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}