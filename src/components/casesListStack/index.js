import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import CasesList from  '../list';
import Case from '../case';

const Stack = createStackNavigator();

export default function CasesListStack(){
    return(
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name='CasesList' component={CasesList} />
            <Stack.Screen name='Case' component={Case}/>
        </Stack.Navigator>
    );
}