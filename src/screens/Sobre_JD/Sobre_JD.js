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
  Image,
  Dimensions,
} from "react-native";
import { StatusBar } from "../../components/StatusBar";
import RNPickerSelect from "react-native-picker-select";
import Autolink from "react-native-autolink";
import Mapa from "./Mapa/mapsjdsystem.png";
import { useDarkMode } from "../../providers/DarkModeProvider";
import { darkTheme, lightTheme } from '../../theme';

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
import HeaderInfo from "../../components/Header/HeaderInfo";

import { Ionicons } from "@expo/vector-icons";

//import { LargeList } from "react-native-largelist";

const { width, height } = Dimensions.get("screen");

export default function ClientesScreen({ navigation, route }) {
  const { darkMode } = useDarkMode();

  return (
    <Container full>
      <HeaderInfo
        title="Informações sobre a JD System"
        transparent
        style={{ margin: -20, marginBottom: 10 }}
      />
      <View
        style={[
          styles.centerAlign,
          {
            height: "20%",
            backgroundColor: "#181818",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Image
          source={require("../../../assets/img/logoWSGE.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: darkMode ? darkTheme.body : lightTheme.body,
          borderColor: "#181818",
        }}
      >
        <View style={styles.titulo}>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            numberOfLines={1}
            adjustsFontSizeToFit
            style={[
              styles.titTxT,
              { color: darkMode ? darkTheme.text : lightTheme.text },
            ]}
          >
            WSGE Força de vendas
          </Text>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={[
              styles.titTxT_two,
              { color: darkMode ? darkTheme.text : lightTheme.text },
            ]}
          >
            Versão 2.1.5
          </Text>
        </View>
        <View style={styles.info}>
          <View style={styles.v}>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: darkMode ? darkTheme.text : lightTheme.text,
              }}
            >
              Fale conosco:
            </Text>
          </View>
          <View style={styles.v}>
            <Text style={{ fontSize: 15, color: darkMode ? darkTheme.text : lightTheme.text, }}>E-mail: </Text>
            <Autolink
              text="sac@jdsystem.com.br"
              linkStyle={{ fontSize: 15, color: "#3498db" }}
            />
          </View>
          <View style={styles.v}>
          <Text style={{ fontSize: 15, color: darkMode ? darkTheme.text : lightTheme.text, }}>Site: </Text>
            <Autolink
              text="https://www.jdsystem.com.br"
              linkStyle={{ fontSize: 15, color: "#3498db" }}
            />
          </View>
          <View style={styles.t}>
            <View style={{ flexDirection: "row" }}>
              <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={{
                  fontSize: 15,
                  color: darkMode ? darkTheme.text : lightTheme.text,
                }}
              >
                Tels:
              </Text>
              <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={{
                  fontSize: 15,
                  color: darkMode ? darkTheme.text : lightTheme.text,
                }}
              >
                (21)2618-2950 / (21)2618-3834
              </Text>
            </View>
          </View>
          <View style={styles.v}>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{
                fontSize: 15,
                color: darkMode ? darkTheme.text : lightTheme.text,
              }}
            >
              End.:
            </Text>
            <Text
              numberOfLines={2}
              adjustsFontSizeToFit
              style={{
                fontSize: 15,
                color: darkMode ? darkTheme.text : lightTheme.text,
              }}
            >
              Rua Luiz Leopoldo Fernadez Pinheiro.521
            </Text>
          </View>
          <View style={styles.v}>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{
                fontSize: 15,
                color: darkMode ? darkTheme.text : lightTheme.text,
              }}
            >
              Sala - 1202
            </Text>
          </View>
          <View style={styles.v}>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{
                fontSize: 15,
                color: darkMode ? darkTheme.text : lightTheme.text,
              }}
            >
              Centro - Niterói - RJ
            </Text>
          </View>
          <View style={styles.v}>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{
                fontSize: 15,
                color: darkMode ? darkTheme.text : lightTheme.text,
              }}
            >
              CEP:240030-125
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.mapa,
            {
              backgroundColor: darkMode ? darkTheme.body : lightTheme.body,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <Image
            source={require("./Mapa/mapsjdsystem.png")}
            style={styles.map}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: width / 1.7,
    height: height / 3,
  },
  titulo: {
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    flex: 1,
    paddingTop: "5%",
    flexDirection: "column",
  },
  titTxT: {
    fontSize: 33,
  },
  titTxT_two: {
    fontSize: 15,
  },
  info: {},
  v: {
    flexDirection: "row",
    paddingTop: "4%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: "3%",
  },
  t: {
    flexDirection: "column",
    paddingTop: "4%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: "3%",
  },
  mapa: {
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: width / 1.0,
    height: height / 3,
  },
});
