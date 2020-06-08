import React, {useState, useEffect} from 'react';

import {
    Container,
    Text,
    ContainerUserDetails,
    Separeitor,

    ContainerForIcon,
    TextForIcon,
    Pin,
    Phone,

    ContainerList,
    List,
} from './style';

import Card from '../card';

//test data

const userDetailsTest = {
    name: 'Samuel guedes',
    city: 'Ji-Paraná',
    phone: 69993736357
}

const cases = [
    {
        title: 'Thor o cachoro filho da puta',
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

export default function User({navigation}){
    const [userDetails, setUserDetails] = useState({});

    function navigateToCase (title, description, localization, phone, imageUrl){
        navigation.navigate('caseUser', {
            imageUrl, 
            title, 
            description, 
            localization, 
            phone
        })
    }

    useEffect(()=>{
        setUserDetails(userDetailsTest);
    }, []);

    return(
        <Container>
            <Text>Detalhes do Usuário</Text>

            <ContainerUserDetails>
                
                <Text style={{color:'rgba(0,0,0,0.6)'}} >
                    {userDetails.name}
                </Text>
                <Separeitor/>

                <ContainerForIcon>
                    <Pin/>
                    <TextForIcon> {userDetails.city} </TextForIcon>
                </ContainerForIcon>
                
                <ContainerForIcon>
                    <Phone/>
                    <TextForIcon> {userDetails.phone} </TextForIcon>
                </ContainerForIcon>
            </ContainerUserDetails>

            <ContainerList>
                <Text style={{marginBottom: 5}} >Seus casos</Text>
                <List
                    data={cases}
                    renderItem={({item})=>{
                        return (
                            <Card 
                                navigateToCase={navigateToCase}
                                title={item.title} 
                                description={item.description} 
                                localization={item.localization}
                                phone={item.phone} 
                                imageUrl={item.imageUrl} 
                            />
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </ContainerList>

        </Container>
    )
}