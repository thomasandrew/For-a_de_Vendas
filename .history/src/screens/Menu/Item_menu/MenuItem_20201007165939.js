import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Screen, Container, Text } from "../../components/ui";

import { useDarkMode } from "../../providers/DarkModeProvider";

export default function ({ navigation }) {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <View style={styles.menuItem}>
      <Image source={this.props.itemImage} style={styles.image} />
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
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    borderColor: "#fff",
    borderWidth: 3,
  },
});
