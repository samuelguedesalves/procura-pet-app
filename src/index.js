import React from 'react';
import {View, StatusBar} from 'react-native';

import Slider from './components/slider';

import SignIn from './components/signIn';
// import SignIn from './components/signIn(test)';

export default function Index(){
    return(
        <>
        {/* // <View style={{ marginTop: StatusBar.currentHeight }} > */}
            {/* <Slider/> */}
            <SignIn/>
        {/* // </View> */}
        </>
    );
}