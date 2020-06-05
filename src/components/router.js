import React from 'react';

import { View, Text } from 'react-native';

import { SimpleLineIcons, Feather } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CasesListStack from './casesListStack';
import NewCase from './newCase';

const icons = {
    Casos: {
        lib: SimpleLineIcons,
        name: 'note',
    },
    Novo: {
        lib: Feather,
        name: 'plus-circle'
    },
    Perfil: {
        lib: Feather,
        name: 'user'
    }
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
            <Tab.Navigator
                screenOptions={({route})=>({
                    tabBarIcon: ({color, size}) => {
                        const { lib: Icon, name } = icons[route.name];
                        return <Icon name={name} size={24} color={color} />
                    },
                })}

                tabBarOptions = {{
                    style: {
                        backgroundColor: '#FDA339',
                        height: 60,
                        paddingBottom: 5,
                        paddingTop: 5,
                        borderTopColor: '#fff',
                        borderTopSize: 2,
                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#A55223'
                }}
            >
                <Tab.Screen name="Casos" component={CasesListStack} />
                <Tab.Screen name="Novo" component={NewCase} />
                <Tab.Screen name="Perfil" component={Perfil} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}