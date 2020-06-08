import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import User from '../user';
import CaseUser from '../caseUser';

const Stack = createStackNavigator();

export default function UserStack (){
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="profile" component={User} />
            <Stack.Screen name="caseUser" component={CaseUser} />
        </Stack.Navigator>
    )
}