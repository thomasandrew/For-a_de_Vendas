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
  Alert,
} from "react-native";
import { StatusBar } from "../../components/StatusBar";

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
    Alert.alert("Enviando...");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container full>
        <Header
          navigation={navigation}
          title="Enviar Backup"
          transparent
          style={{ margin: -20, marginBottom: 20 }}
        />
        <View style={style.whiteBorder}>
          <View style={{ marginTop: "3%", marginLeft: "4%" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={style.txt}>Para: </Text>
              <Text style={style.email}>suporte@jdsyste.com.br</Text>
            </View>
            <View
              style={{
                borderBottomColor: "#000",
                borderBottomWidth: 2,
                width: width / 1.2,
                marginTop: "2%",
              }}
            />
          </View>
          <View style={{ marginTop: "3%", marginLeft: "4%" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={style.txt}>Assunto: </Text>
              <View style={{ width: width / 2.0 }}>
                <Text
                  numberOfLines={2}
                  adjustsFontSizeToFit
                  style={style.assunto}
                >
                  Análise de Backup - APRESENTAÇÃO JD SYSTEM
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "#000",
                borderBottomWidth: 2,
                width: width / 1.2,
                marginTop: "2%",
              }}
            />
          </View>
          <TextInput
            style={{
              borderBottomColor: "#000",
              borderBottomWidth: 2,
              width: width / 1.2,
              marginTop: "2%",
              marginLeft: "4%",
              height: "65%",
              textAlignVertical: "top",
            }}
            underlineColorAndroid="transparent"
            placeholder=""
            placeholderTextColor="#000"
            numberOfLines={10}
            multiline={true}
          />
          <Fabtn onPress={showAlert} />
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  whiteBorder: {
    height: "89%",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  txt: {
    color: "#000",
    fontSize: 20,
  },
  email: {
    color: "#3498db",
    fontSize: 16,
    marginLeft: "2%",
    marginTop: "1%",
  },
  assunto: {
    fontSize: 16,
    color: "#000",
    marginTop: "2%",
  },
});
