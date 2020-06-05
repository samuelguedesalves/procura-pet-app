import React from 'react';

import { FlatList } from 'react-native';

import {
    Container,
    Title,
    List
} from './style';

import Card from '../card/index';

const cases = [
    {
        title: 'Thor o cachoro filho da',
        description: 'Cachorrinho desaparecido neste final de semana ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai ajuda ai  ajuda ai ajuda ai ajuda ai',
        imageUrl: 'https://res.cloudinary.com/dbj96cpoe/image/upload/v1588392988/mqs4w6s7uzljpnlxmzq6.jpg',
        localization: 'JI-PARANÁ',
        phone: '69993736357',
    },
    {
        title: 'Lili',
        description: 'lili é um amorzinho! é muito fofa e está desaparecida! porfavor nos ajude a encontrala!',
        imageUrl: 'https://res.cloudinary.com/dbj96cpoe/image/upload/v1588392988/mqs4w6s7uzljpnlxmzq6.jpg',
        localization: 'ji-paraná',
        phone: '69993736357',
    },
    {
        title: 'Thor o cachoro!',
        description: 'Mano me ajuda achar meu dog ele esta perdido e sozinho pela cidade, me ajudem!',
        imageUrl: 'https://res.cloudinary.com/dbj96cpoe/image/upload/v1588392988/mqs4w6s7uzljpnlxmzq6.jpg',
        localization: 'ji-paraná',
        phone: '69993736357',
    },
    {
        title: 'Totoro',
        description: 'minha lontra está perdida!!',
        imageUrl: 'https://res.cloudinary.com/dbj96cpoe/image/upload/v1589000650/i3u7r9xlegvgumgxczut.jpg',
        localization: 'ji-paraná',
        phone: '69993736357',
    },
    {
        title: 'Thor o cachoro!',
        description: 'Cachorrinho desaparecido neste final de semana',
        imageUrl: 'https://res.cloudinary.com/dbj96cpoe/image/upload/v1588392988/mqs4w6s7uzljpnlxmzq6.jpg',
        localization: 'ji-paraná',
        phone: '69993736357',
    },
    {
        title: 'Thor o cachoro!',
        description: 'Cachorrinho desaparecido neste final de semana',
        imageUrl: 'https://res.cloudinary.com/dbj96cpoe/image/upload/v1588392988/mqs4w6s7uzljpnlxmzq6.jpg',
        localization: 'ji-paraná',
        phone: '69993736357',
    },
    {
        title: 'Thor o cachoro!',
        description: 'Cachorrinho desaparecido neste final de semana',
        imageUrl: 'https://res.cloudinary.com/dbj96cpoe/image/upload/v1588392988/mqs4w6s7uzljpnlxmzq6.jpg',
        localization: 'ji-paraná',
        phone: '69993736357',
    },
    {
        title: 'Magrão',
        description: 'Perdi meu lançhe!!',
        imageUrl: 'https://res.cloudinary.com/dbj96cpoe/image/upload/v1588377128/vr9kjqfzk4tphmeovthb.jpg',
        localization: 'ji-paraná',
        phone: '69993736357',
    },
]

export default function CasesList ({ navigation }) {
    
    function navigateToCase(title, description, localization, phone, imageUrl){
        navigation.navigate('Case',{title, description, localization, phone, imageUrl});
    }

    return(
        <Container>
            <Title>Casos</Title>
            <List
                data={cases}
                renderItem={
                    ({item})=>(
                        <Card 
                            navigateToCase={navigateToCase} 
                            title={item.title} 
                            description={item.description} 
                            imageUrl={item.imageUrl}
                            localization={item.localization}
                            phone={item.phone}
                        />
                    )
                }
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}