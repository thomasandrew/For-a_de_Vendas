import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Screen, Container, Text } from "../../../components/ui";
import { Icon } from "react-native-elements";

import { useDarkMode } from "../../../providers/DarkModeProvider";

export default function ({ navigation }, props) {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <View style={styles.menuItem}>
      <TouchableOpacity>
        <Icon name="sc-telegram" type='font-awesome' style={styles.icone} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    width: "33.333333%",
    height: "50%",
    padding: 20,
    //backgroundColor: '#ccc',
    //borderColor: '#000',
    //borderWidth: 2,
  },
  icone: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    borderColor: "#fff",
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//<Image source={props.itemImage} style={styles.image} />
