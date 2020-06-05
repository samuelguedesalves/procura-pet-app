import React, { useState, useEffect } from 'react';

import { TouchableWithoutFeedback, Keyboard, } from 'react-native';

import {
    Container,
    TextView,
    ContainerImage,
    Image,

    ContainerBody,
    TextForm,
    InputTitleCase,

    ButtonContainer,
    TextButton,
    FolderIcon,
} from './style';

import imageBanner from '../../assets/add-image.png';

export default function NewCase (){

    const [inputFocus, setInputFocus] = useState(false);
    
    const [titleCase, setTitleCase] = useState('');
    const [descriptionCase, setDescriptionCase] = useState('');

    useEffect(()=>{
        Keyboard.addListener("keyboardDidHide", () => setInputFocus(false));
    },[]);

    function handleTitleCase(text){
        if( text.length <=23){
            setTitleCase(text);
        }
    }
    
    function handleDescriptionCase(text){
        if( text.length <=235){
            setDescriptionCase(text);
        }
    }

    return(
        <TouchableWithoutFeedback 
            onPress={() => {
                Keyboard.dismiss();
                setInputFocus(false);
            }} 
        >
            <Container>

                <TextView style={inputFocus? {display: 'none'}:{} } >Criar um novo caso</TextView>

                <ContainerImage style={inputFocus? {display: 'none'}:{} } >
                    <Image source={imageBanner} />
                </ContainerImage>

                <ContainerBody>
                    <TextForm>Titulo do caso</TextForm>
                    <InputTitleCase
                        onFocus={()=>setInputFocus(true)}
                        value={titleCase}
                        onChangeText={(text) => handleTitleCase(text)}
                        placeholder="Escreva aqui o titulo do caso"
                        placeholderTextColor="rgba(0,0,0,0.25)"
                    />

                    <TextForm style={{marginTop: 20}} >Descrição do caso</TextForm>
                    <InputTitleCase
                        onFocus={()=>setInputFocus(true)}
                        style={{
                            height: 100,
                            textAlignVertical: 'top'
                        }}
                        value={descriptionCase}
                        onChangeText={(text) => handleDescriptionCase(text)}
                        placeholder="Escreva aqui a descrição do caso"
                        placeholderTextColor="rgba(0,0,0,0.25)"
                        textAlign="left"
                        multiline={true}
                    />

                    <ButtonContainer>
                        <TextButton>Cadastrar caso</TextButton>
                        <FolderIcon/>
                    </ButtonContainer>
                </ContainerBody>
            </Container>
        </TouchableWithoutFeedback>
    );
}