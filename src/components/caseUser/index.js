import React from 'react';

import {
    Container,
    ContainerTop,
    Image,
    ContainerTopRight,
    ContainerTitle,
    CaseTitle,
    ContainerLocalization,
    BottomContainer,
    TextLocalization,
    Pin,
    TextTopDescription,
    DescriptionCase,
    DescriptionContainer,

    ButtonEditCase,
    TextButton,
    PenIcon,

    ContainerBackButton,
    IconBack,
    TextButtonBack,

    ButtonEndCase,
    IconSmile,

    ButtonDeleteCase,
    IconSad,
} from './style';

export default function Case ({route, navigation}){
    return(
        <Container>

            <ContainerBackButton
                onPress={()=>navigation.navigate('profile')}
            >
                <IconBack/>
                <TextButtonBack>Voltar</TextButtonBack>
            </ContainerBackButton>

            <ContainerTop>
                <Image source={{ uri: route.params.imageUrl }} />

                <ContainerTopRight>
                    <ContainerTitle>
                        <CaseTitle>{ route.params.title }</CaseTitle>
                    </ContainerTitle>
                    <ContainerLocalization>
                        <Pin/>
                        <TextLocalization>{route.params.localization}</TextLocalization>
                    </ContainerLocalization>
                </ContainerTopRight>

            </ContainerTop>


            <BottomContainer>
                
                <DescriptionContainer>
                    <TextTopDescription>Detalhes do caso</TextTopDescription>
                    <DescriptionCase>{route.params.description}</DescriptionCase>
                </DescriptionContainer>


                <ButtonEndCase style={{marginTop: 20}} >
                    <TextButton>Finalizar caso</TextButton>
                    <IconSmile/>
                </ButtonEndCase>
                
                <ButtonEditCase style={{marginTop: 20}} >
                    <TextButton>Editar caso</TextButton>
                    <PenIcon/>
                </ButtonEditCase>
                
                <ButtonDeleteCase style={{marginTop: 20}} >
                    <TextButton>Apagar caso</TextButton>
                    <IconSad/>
                </ButtonDeleteCase>

            </BottomContainer>


        </Container>
    );
}