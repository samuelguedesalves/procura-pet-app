import React from 'react';
import styled from 'styled-components';

import {
    Feather,
} from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    padding: 40px 30px 0px 30px;
    background-color: #FF5E59;
`;

export const Text = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
`;

export const ContainerUserDetails = styled.View`
    height: 130px;
    background-color: #fff;
    border-radius: 10px;
    padding: 13px;

    margin-top: 15px;
`;

export const Separeitor = styled.View`
    width: 100%;
    height: 2px;
    background-color: rgba(0,0,0,0.2);
    margin-top: 8px;
`;


export const ContainerForIcon = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: 5px;
`;

export const TextForIcon = styled.Text`
    font-size: 24px;
    color: #3595EE;
    margin-left: 5px;
`;

export const Pin = () => {
    return <Feather name="map-pin" size={20} color="#3595EE" />
}

export const Phone = () => {
    return <Feather name="phone" size={20} color="#3595EE" />
}

export const ContainerList = styled.View`
    margin-top: 15px;
    flex: 1;
`;

export const List = styled.FlatList`
`;
