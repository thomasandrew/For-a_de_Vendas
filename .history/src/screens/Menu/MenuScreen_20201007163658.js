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
import { Button, Screen, Container, Text } from "../../components/ui";

import { useDarkMode } from "../../providers/DarkModeProvider";

export default function ({ navigation }) {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View styles={styles.profileimage}></View>
      </View>

      <View style={styles.center}></View>

      <View style={styles.bottom}>
        <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}></View>
        </View>

        <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}></View>
        </View>

        <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}></View>
        </View>

        <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      top: {
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#98d2c1',
      },
      profileimage: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#fff',
        backgroundColor: '#eee',
      },
      center: {
        height: '10%',
        backgroundColor: '#7fbcac',
      },
      bottom: {
        height: '45%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
      },
      bottomItem: {
        width: '50%',
        height: '50%',
        padding: 5,
      },
      bottomItemInner: {
        flex: 1,
        backgroundColor: '#292929',
      },
});
