/*import React from 'react'
import { View } from 'react-native'
import {Button, Screen, Container, Text} from '../../components/ui'

import { useDarkMode } from '../../providers/DarkModeProvider'

export default function ({navigation}) {
    const { darkMode, setDarkMode } = useDarkMode()
    return (
            <Container>
            <Text>Pagina de Menus</Text>
            <Text></Text>
            <Button title={`darkMode ${darkMode?'ativado':'desativado'}`} onPress={() => setDarkMode(!darkMode)} />
            <Text></Text>
            <Button title="Tela de Clientes" onPress={()=> navigation.navigate('Main',{ screen: 'ClientesScreen' })}/>
            <Text></Text>
            <Button title="Desconectar" onPress={()=> navigation.navigate('LoginScreen')}/>
            </Container>
    )
}
*/

import React from "react";
import { View, ScrollView, StyleSheet, ImageBackground } from "react-native";
import {
  Screen,
  Container,
  Text,
} from "../../components/ui";

import { useDarkMode } from "../../providers/DarkModeProvider";
import MenuItem from './Item_menu/MenuItem'

export default function ({ navigation }) {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <View style={styles.container}>

      <View style={styles.start}>
        
        <View style={styles.menuContainer}>
        
          <MenuItem itemImage={require('../../../assets/icon.png') }/>
          
        </View>

      </View>

      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#363537',
      },
      start: {
        flex: 1,
        marginTop: '10%',
      },
      menuContainer: {
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
  });
