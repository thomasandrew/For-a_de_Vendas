import React from 'react'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

import {getStatusBarHeight} from 'react-native-status-bar-height'

import { useDarkMode } from '../../providers/DarkModeProvider'
import { darkTheme, lightTheme } from '../../theme'


const View = styled.View`
    flex-direction:row;
    align-items:center;
    background: ${({ theme, transparent }) => transparent? theme.body:theme.nav};
    padding: 5px;
    padding-top: ${getStatusBarHeight()}px;
    height:${56 + getStatusBarHeight()}px;
`;

const Title = styled.Text`
    color: ${({ theme }) => theme.text};
    font-size: 18px;
    font-weight: 700;
    width:100%;
    margin-left:-42px;
    /* background:red; */
    text-align:center;
`;

const BackButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5
})`
    width:42px;
    height:42px;
    align-items:center;
    justify-content:center;
    z-index:90;
`;


export default function Header({ navigation, title, style, transparent }) {
    const { darkMode } = useDarkMode()

    return (
        <View style={style} transparent={transparent}>
            <BackButton onPress={() => navigation.goBack()}>
                <Ionicons name="ios-arrow-back" size={24} color={darkMode ? darkTheme.text : lightTheme.text} />
            </BackButton>
            <Title>{title}</Title>
        </View>
    )
}
