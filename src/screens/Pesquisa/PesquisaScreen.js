import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { StatusBar } from '../../components/StatusBar';

import { Ionicons } from '@expo/vector-icons'

import { Container, ButtonBase, Title, StyledView, Input, Screen } from '../../components/ui'

export default function PesquisaScreen({ navigation }) {
    return (
        <Container>
            <Title>Página de Pesquisa temporária</Title>
            <View style={{ flexDirection: "row" }}>
                <Input placeholder="Pesquisar" style={{ flex: 1 }} />
                <ButtonBase onPress={() => alert("Pesquisar")} style={{ marginLeft: 10 }}>
                    <Ionicons name="md-search" size={24} color="#ffffff" />
                </ButtonBase>

            </View>
            <StatusBar />
        </Container>
    )
}
