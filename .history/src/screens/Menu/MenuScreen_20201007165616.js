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
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Screen,
  Container,
  Text,
} from "../../components/ui";

import { useDarkMode } from "../../providers/DarkModeProvider";

export default function ({ navigation }) {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <ImageBackground
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvcoaSvZoXV-nDcsHY8sZDD2NQK9XRM9DWLg&usqp=CAU'}}
        style={styles.container}
      >

      <View style={styles.overlayContainer}>
        
        <View style={styles.top}>
          <Text style={styles.header}>H O M E</Text>
        </View>

        <View style={styles.menuContainer}>
        
          <MenuItem itemImage={{ uri: 'https://comps.canstockphoto.com.br/bot%C3%A3o-lupa-laranja-redondo-%C3%ADcone-foto_csp51451075.jpg'}}/>

          <MenuItem itemImage={{ uri: 'https://comps.canstockphoto.com.br/bot%C3%A3o-lupa-laranja-redondo-%C3%ADcone-foto_csp51451075.jpg'}}/>

          <MenuItem itemImage={{ uri: 'https://comps.canstockphoto.com.br/bot%C3%A3o-lupa-laranja-redondo-%C3%ADcone-foto_csp51451075.jpg'}}/>

          <MenuItem itemImage={{ uri: 'https://comps.canstockphoto.com.br/bot%C3%A3o-lupa-laranja-redondo-%C3%ADcone-foto_csp51451075.jpg'}}/>

          <MenuItem itemImage={{ uri: 'https://comps.canstockphoto.com.br/bot%C3%A3o-lupa-laranja-redondo-%C3%ADcone-foto_csp51451075.jpg'}}/>

          <MenuItem itemImage={{ uri: 'https://comps.canstockphoto.com.br/bot%C3%A3o-lupa-laranja-redondo-%C3%ADcone-foto_csp51451075.jpg'}}/>
          
        </View>

      </View>

      </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
      overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218, .4)',
      },
      top: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',  
      },
      header: {
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255, .1)',
      },
      menuContainer: {
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
  });
