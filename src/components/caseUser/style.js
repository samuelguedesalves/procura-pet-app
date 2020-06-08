import React from 'react';
import styled from 'styled-components';

import { Feather, Entypo } from '@expo/vector-icons';

export const Container = styled.View`
    padding: 85px 30px 0px 30px;
    justify-content: center;
    align-items: center;
`;

export const ContainerTop = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const Image = styled.Image`
    width: 100px;
    height: 100px;
    background-color: #999;
    border-radius: 10px;
`;

export const ContainerTopRight = styled.View`
    margin-left: 10px;
`;

export const ContainerTitle = styled.View`
    width: 240px;
`;

export const CaseTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

export const BottomContainer = styled.View`
    width: 100%;
    margin-top: 20px;
`;

export const ContainerLocalization = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const TextLocalization = styled.Text`
    font-size: 24px;
    color: #3595EE;
    margin-left: 5px;
`;

export const Pin = () => {
    return <Feather name="map-pin" size={20} color="#3595EE" />
}

export const TextTopDescription = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const DescriptionCase = styled.Text`
    width: 100%;
    height: 125px;
    font-size: 20px;

    color: rgba(0,0,0,0.6);
`;

export const DescriptionContainer = styled.View`
    background-color: rgba(0,0,0,0.1) ;
    border-radius: 10px;
    padding: 10px;
`;

export const ButtonEditCase = styled.TouchableOpacity`
    background-color: #FDA339;
    width: 100%;
    height: 55px;
    border-radius: 40px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #fff;

    margin-right: 5px;
`;

export const PenIcon = () => {
    return <Feather name="edit-3" size={24} color="#eee" />
}

export const ContainerBackButton = styled.TouchableOpacity`
    flex-direction: row;
    position: absolute;
    top: 40px;
    left: 30px;
    align-items: center;
`;

export const IconBack = () => {
    return <Entypo name="chevron-left" size={24} color="#333" />
}

export const TextButtonBack = styled.Text`
    color: #333;
    font-size: 20px;
    font-weight: bold;
`;


export const ButtonEndCase = styled.TouchableOpacity`
    background-color: #4FDE4C;
    width: 100%;
    height: 55px;
    border-radius: 40px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const IconSmile = () => {
    return <Feather name="smile" size={24} color="#fff" />
}

export const ButtonDeleteCase = styled.TouchableOpacity`
    background-color: #FF4646;
    width: 100%;
    height: 55px;
    border-radius: 40px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const IconSad = () => {
    return <Feather name="frown" size={24} color="#fff" />
}