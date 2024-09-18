import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  FlatList,
  VirtualizedList,
  ScrollView,
  TouchableOpacity,
  Vibration,
  Picker,
  StyleSheet,
  Text,
  Platform,
  TextInput,
  CheckBox,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import { StatusBar } from "../../components/StatusBar";
import RNPickerSelect from "react-native-picker-select";
import { useDarkMode } from "../../providers/DarkModeProvider";
import { darkTheme, lightTheme } from "../../theme";

import {
  Container,
  Button,
  Title,
  StyledView,
  Card,
  Fab,
  BottomSheetModal,
  ListItem,
} from "../../components/ui";
import { Input } from "react-native-elements";
import { Icon } from "react-native-elements";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import SectionList, {
  ListItemContainer,
} from "../../components/SectionList/SectionList";
import Header from "../../components/Header/Header";

import { Ionicons } from "@expo/vector-icons";

//import { LargeList } from "react-native-largelist";

const { width, height } = Dimensions.get("screen");

export default function Atualizacao_dados({ navigation, route }) {
  const { darkMode } = useDarkMode();

  const showAlert = (_) => {
    Alert.alert("Atualizando...");
  };

  return (
    <Container full>
      <Header
        navigation={navigation}
        title="Atualização de dados"
        transparent
        style={{ margin: -20, marginBottom: 20 }}
      />
      <View style={styles.atualizacao}>
        <Text
          style={{
            fontSize: 30,
            color: darkMode ? darkTheme.text : lightTheme.text,
          }}
        >
          Atualização
        </Text>
      </View>
      <View
        style={[
          styles.centerAlign,
          {
            height: "60%",
            backgroundColor: darkMode ? darkTheme.body : lightTheme.body,
          },
        ]}
      >
        <Image
          source={require("./img_sicronismo/sincronismo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          style={[styles.btn, { height: height / 13 }]}
          onPress={showAlert}
        >
          <Text style={[styles.txt, { color: "#fff" }]}>
            Atualização Pendente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { height: height / 13 }]}
          onPress={showAlert}
        >
          <Text style={[styles.txt, { color: "#fff" }]}>
            Atualização Completa
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  atualizacao: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerAlign: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: width / 1.7,
    height: height / 3,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
    borderRadius: 30,
    backgroundColor: "#2980b9",
  },
  txt: {
    fontSize: 20,
  },
});
