import React, { useState } from 'react';
import {View, StatusBar} from 'react-native';

import Slider from './components/slider/slider';

import SignIn from './components/signIn';

import Router from './components/router';

export default function Index(){
    // const [router, setRouter] = useState(0);
    const [router, setRouter] = useState(0);

    function routerManager(sendTo){
        setRouter(sendTo);
    }

    if(router === 0){
        return(
            <Slider routerManager={routerManager} />
        )
    }else{
        if( router === 1 ){
            return(
                <SignIn routerManager={routerManager} />
            )
        }else{
                return(
                    <Router/>
                )
        }
    }

}