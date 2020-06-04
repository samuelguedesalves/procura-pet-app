import React from 'react';

import {
    Image, 
    CardContainer, 
    TitleCard, 
    DescriptionCard,
    RightContainer,
} from './style';


export default function Card ({ navigateToCase, imageUrl, title, description, localization, phone }){
    
    function formateDescription(text){
        if(text.length >= 57){
            let newString = '';
    
            text.split('').map((letter, index) => {
                if(index <= 57){
                    newString = `${newString}${letter}`;
                }
            })
    
            newString = `${newString}...`
    
            return newString;
        }else{
            return text;
        }
    }

    return(
        <CardContainer onPress={()=> navigateToCase(title, description, localization, phone, imageUrl)} >
            <Image source={ {uri: imageUrl} } />
            <RightContainer>
            <TitleCard>{title}</TitleCard>
                <DescriptionCard>
                    {formateDescription(description)}
                </DescriptionCard>
            </RightContainer>
        </CardContainer>
    );
}