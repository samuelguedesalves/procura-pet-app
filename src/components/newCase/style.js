import React from 'react';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    padding: 40px 30px 0px 30px;
    flex: 1;
`;

export const TextView = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
`;

export const ContainerImage = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 24px 50px 0 50px;
`;

export const Image = styled.Image`
    width: 220px;
    height: 220px;

    border-radius: 10px;
    
    border: 3px solid rgba(0,0,0,0.15);
`;

export const ContainerBody = styled.View`
    width: 100%;
    height: 200px;

    margin-top: 20px;
`;

export const TextForm = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: rgba(0,0,0,0.6);

    margin-bottom: 5px;
`;

export const InputTitleCase = styled.TextInput`
    background-color: rgba(0,0,0,0.15);
    height: 60px;
    border-radius: 10px;
    padding: 15px;
    font-size: 20px;
    color: rgba(0,0,0,0.6);
`;

export const ButtonContainer = styled.TouchableOpacity`
    margin-top: 20px;

    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #4FDE4C;
    border-radius: 30px;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;

    margin-right: 10px;
`;

export const FolderIcon = () => {
    return <Feather name="folder-plus" size={24} color="#fff" />
}