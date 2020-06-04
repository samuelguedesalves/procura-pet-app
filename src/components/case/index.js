import React from 'react';

import {
    Container,
    Image,
    CaseTitle,
    ContainerLocalization,
    BottomContainer,
    TextLocalization,
    Pin,
    TextTopDescription,
    DescriptionCase,
    ButtonContactMe,
    TextButton,
    MessageIcon,
} from './style';

export default function Case ({route}){
    return(
        <Container>
            <Image source={{ uri: route.params.imageUrl }} />
            <CaseTitle>{ route.params.title }</CaseTitle>

            <BottomContainer>
            
                <ContainerLocalization>
                    <Pin/>
                    <TextLocalization>{route.params.localization}</TextLocalization>
                </ContainerLocalization>

                <TextTopDescription>Detalhes do caso</TextTopDescription>

                <DescriptionCase>{route.params.description}</DescriptionCase>

                <ButtonContactMe>
                    <TextButton>Entrar em contato</TextButton>
                    <MessageIcon/>
                </ButtonContactMe>

            </BottomContainer>


        </Container>
    );
}