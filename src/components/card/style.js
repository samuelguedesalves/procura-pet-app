import styled from 'styled-components';

export const CardContainer = styled.TouchableOpacity`
    background-color: #fff;
    padding: 10px;
    border-radius: 15px;

    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const Image = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 10px;
`;

export const RightContainer = styled.View`
    width: 240px;
    margin-left: 15px;
`;

export const TitleCard = styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

export const DescriptionCard = styled.Text`
    font-size: 20px;
    color: rgba(0,0,0, 0.7);
`;