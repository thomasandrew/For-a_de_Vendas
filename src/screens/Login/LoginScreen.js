import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TextInput,
  CheckBox,
} from "react-native";
import { StatusBar } from "../../components/StatusBar";
import styled from "styled-components";
import { Button } from "react-native-elements";
import { useDarkMode } from "../../providers/DarkModeProvider";
import { darkTheme, lightTheme } from "../../theme";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { Containers, Title, StyledView, Input } from "../../components/ui";

import {
  getAll,
  setData,
  getData,
  clearAll,
  clearData,
} from "../../services/AsyncStorage";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");
export default function LoginScreen({ navigation }) {
  const { darkMode } = useDarkMode();
  const [checked, setChecked] = useState(false);

  const icone = (_) => {
    setChecked(!checked);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? darkTheme.body : lightTheme.body },
      ]}
    >
      <View
        style={[
          styles.centerAlign,
          {
            height: "15%",
            backgroundColor: darkMode ? darkTheme.body : lightTheme.body,
          },
        ]}
      >
        <Image
          source={require("../../../assets/img/logoWSGE.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Sign In
        </Text>
        <View style={{ marginTop: 30, marginBottom: 10 }}>
          <TextInput placeholder="Usuario" style={styles.input} />
          <TextInput
            secureTextEntry={true}
            placeholder="Senha"
            style={styles.input}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => icone()}>
            <MaterialCommunityIcons
              name={checked ? "check" : "checkbox-blank-circle-outline"}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 8 }}>Lembrar senha</Text>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "#000" }}>Esqueci senha</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <View>
            <Button
              buttonStyle={{
                width: width / 1.25,
                padding: 10,
                borderRadius: 20,
                backgroundColor: "#363537",
                alignItems: "center",
              }}
              title="Logar"
              onPress={() => navigation.replace("Home")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height / 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerAlign: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30%",
  },
  inputContainer: {
    padding: 20,
    borderRadius: 20,
    width: width / 1.1,
    height: height / 2,
    backgroundColor: "rgba(255,255,255,1)",
    bottom: "12%",
  },
  logo: {
    width: width / 1.7,
    height: height / 5,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#aaa",
    borderRadius: 30,
    width: width / 1.2,
    height: height / 15.0,
    marginVertical: 15,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
  },
});
