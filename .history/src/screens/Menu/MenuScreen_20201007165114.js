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
import { Screen, Container, Text } from "../../components/ui";

import { useDarkMode } from "../../providers/DarkModeProvider";

export default function ({ navigation }) {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bottomItem: {
    width: "50%",
    height: "50%",
    padding: 5,
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: "#292929",
  },
});
