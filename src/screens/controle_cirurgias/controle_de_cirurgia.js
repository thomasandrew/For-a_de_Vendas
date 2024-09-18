import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  FlatList,
  VirtualizedList,
  ScrollView,
  TouchableOpacity,
  Vibration,
  StyleSheet,
  Dimensions,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import { StatusBar } from "../../components/StatusBar";
import { useDarkMode } from '../../providers/DarkModeProvider'
import { darkTheme, lightTheme } from '../../theme'

import {
  Container,
  Button,
  Text,
  Title,
  StyledView,
  Input,
  Card,
  Fab,
  Fabtn,
  BottomSheetModal,
  ListItem,
} from "../../components/ui";

import SectionList, {
  ListItemContainer,
} from "../../components/SectionList/SectionList";
import Header from "../../components/Header/Header";

import { Ionicons } from "@expo/vector-icons";
import styles from "react-native-carousel-control/styles";

//import { LargeList } from "react-native-largelist";

const { width, height } = Dimensions.get("screen");

export default function ClientesScreen({ navigation, route }) {
  const showAlert = (_) => {
    Alert.alert("Ainda estamos finalizando o desenvolvimento.");
  };

  return (
    <Container full>
      <Header
        navigation={navigation}
        title="Controle de Cirurgia"
        transparent
        style={{ margin: -20, marginBottom: 20 }}
      />
      <View style={style.squareContainer}>
        <View
          style={[style.square, { width: width / 1.1, height: height / 5 }]}
        >
          <TouchableOpacity>
            <View
              style={[style.bor, { width: width / 2.5, height: height / 5 }]}
            >
              <Image
                source={require("../../../assets/img/img_mapa_cirurgico.png")}
                style={[style.img, { width: width / 5.0, height: height / 8 }]}
              />
              <Text style={style.txt}>Mapa Cirúrgico</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[style.bor, { width: width / 2.5, height: height / 5 }]}
            >
              <Image
                source={require("../../../assets/img/img_medico.png")}
                style={[style.img, { width: width / 5.0, height: height / 8 }]}
              />
              <Text style={style.txt}>Médico</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={[style.square, { width: width / 1.1, height: height / 5 }]}
        >
          <TouchableOpacity onPress={() => {
              navigation.navigate("Main", { screen: "consulta_pendencias" });
            }}>
            <View
              style={[style.bor, { width: width / 2.5, height: height / 5 }]}
            >
              <Image
                source={require("../../../assets/img/img_pendente_fatura.png")}
                style={[style.img, { width: width / 5.0, height: height / 8 }]}
              />
              <Text style={style.txt}>Minhas</Text>
              <Text style={style.txt}>Pendências</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={showAlert}>
            <View
              style={[style.bor, { width: width / 2.5, height: height / 5 }]}
            >
              <Image
                source={require("../../../assets/img/img_recolhe_produto.png")}
                style={[style.img, { width: width / 5.0, height: height / 8 }]}
              />
              <Text style={style.txt}>Recolhimento de</Text>
              <Text style={style.txt}>Produtos</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          style.centerAlign,
          {
            height: "15%",
          },
        ]}
      >
        <Image
          source={require("../../../assets/img/logoWSGE.png")}
          style={style.logo}
          resizeMode="contain"
        />
      </View>
    </Container>
  );
}

const style = StyleSheet.create({
  squareContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //borderWidth: 2,
    flexDirection: "column",
    marginBottom: "12%",
  },
  square: {
    flexDirection: "row",
    //borderWidth: 2,
    //backgroundColor: "#e74c3c",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "10%",
  },
  bor: {
    //borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  txt: {
    color: "#000",
    top: "6%",
  },
  picContainer: {
    borderWidth: 3,
    height: "20%",
  },
  centerAlign: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "-3%",
    //borderWidth: 3,
  },
  logo: {
    width: width / 1.7,
    height: height / 12,
  },
});
