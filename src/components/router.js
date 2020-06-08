import React from 'react';

import { SimpleLineIcons, Feather } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CasesListStack from './casesListStack';
import NewCase from './newCase';
import UserStack from './userStack';

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
                        borderTopColor: '#e4e4e4',
                        borderTopWidth: 1,
                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#A55223'
                }}
            >
                <Tab.Screen name="Casos" component={CasesListStack} />
                <Tab.Screen name="Novo" component={NewCase} />
                <Tab.Screen name="Perfil" component={UserStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}