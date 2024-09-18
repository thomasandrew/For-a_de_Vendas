import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { StatusBar }from '../../components/StatusBar'

import { Container, Button, Title, StyledView, Input, Text } from '../../components/ui'

import { getAll, setData, getData, clearAll, clearData } from '../../services/AsyncStorage'


export default function LoginScreen({ navigation }) {
    return (
        <Container full>
            <Text>Página de Login temporária</Text>
            <Button title="Logar" onPress={() => navigation.replace('Home')} />

            {/* <Button title="+1" onPress={setV} /> */}
            {/* <Button title="set" onPress={() => storeData("TTTT")} /> */}

            <Text>Teste do AsyncStorage</Text>
            <Button title="set teste" onPress={async () => await setData('teste', true)} />
            <Button title="get teste" onPress={async () => await getData('teste')} />
            <Button title="clear teste" onPress={async () => await clearData('teste')} />
            <Button title="get all" onPress={async () => await getAll()} />
            <Button title="clear all" onPress={async () => await clearAll()} />

            <StatusBar/>            
        </Container>
    )
}