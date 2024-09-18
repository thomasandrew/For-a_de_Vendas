import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Screen, Container, Text } from "../../components/ui";
import { Icon } from "react-native-elements";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useDarkMode } from "../../providers/DarkModeProvider";
import MenuItem from "./Item_menu/MenuItem";
import { darkTheme, lightTheme } from "../../theme";

export default function ({ navigation }) {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? darkTheme.body : lightTheme.body },
      ]}
    >
      <View style={styles.start}>
        <View style={styles.square}>
          <Text
            style={[
              styles.menu,
              {
                borderColor: darkMode
                  ? darkTheme.borderColor
                  : lightTheme.borderColor,
                color: darkMode ? darkTheme.text : lightTheme.text,
              },
            ]}
          >
            T E L A S
          </Text>
        </View>

        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Main", { screen: "ClientesScreen" })
              }
            >
              <View
                style={[
                  styles.image,
                  {
                    borderColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="account-search"
                  size={40}
                  color={darkMode ? darkTheme.icon : lightTheme.icon}
                />
                <View style={styles.txt}>
                  <Text>Consulta</Text>
                  <Text style={{ marginLeft: "8%", bottom: "6%" }}>
                    cliente
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Main", { screen: "Consulta_produto" });
              }}
            >
              <View
                style={[
                  styles.image,
                  {
                    borderColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="package-variant"
                  size={40}
                  color={darkMode ? darkTheme.icon : lightTheme.icon}
                />
                <View style={styles.txt}>
                  <Text>Consulta</Text>
                  <Text style={{ bottom: "6%" }}>produtos</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Main", { screen: "Consulta_pedidos" });
              }}
            >
              <View
                style={[
                  styles.image,
                  {
                    borderColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <FontAwesome5
                  name="clipboard-list"
                  size={40}
                  color={darkMode ? darkTheme.icon : lightTheme.icon}
                />
                <View style={styles.txt}>
                  <Text>Consulta</Text>
                  <Text style={{ marginLeft: "3%", bottom: "6%" }}>
                    pedidos
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Main", { screen: "Consulta_contatos" });
              }}
            >
              <View
                style={[
                  styles.image,
                  {
                    borderColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="phone-log"
                  size={40}
                  color={darkMode ? darkTheme.icon : lightTheme.icon}
                />
                <View style={styles.txt}>
                  <Text>Consulta</Text>
                  <Text style={{ marginLeft: "1%", bottom: "6%" }}>
                    contatos
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Main", { screen: "Consulta_agenda" });
              }}
            >
              <View
                style={[
                  styles.image,
                  {
                    borderColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="calendar-month-outline"
                  size={40}
                  color={darkMode ? darkTheme.icon : lightTheme.icon}
                />
                <View style={styles.txt}>
                  <Text>Consulta</Text>
                  <Text style={{ marginLeft: "4%", bottom: "6%" }}>Agenda</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Main", { screen: "controle_de_cirurgia" });
              }}
            >
              <View
                style={[
                  styles.image,
                  {
                    borderColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="hospital-box"
                  size={40}
                  color={darkMode ? darkTheme.icon : lightTheme.icon}
                />
                <View style={styles.txt}>
                  <Text>Controle</Text>
                  <Text style={{ bottom: "6%" }}>cirurgias</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity>
              <View
                style={[
                  styles.image,
                  {
                    borderColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <FontAwesome5
                  name="chart-line"
                  size={40}
                  color={darkMode ? darkTheme.icon : lightTheme.icon}
                />
                <View style={styles.txt}>
                  <Text>Minhas</Text>
                  <Text style={{ marginLeft: "1%", bottom: "6%" }}>vendas</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Main", { screen: "enviar_backup" });
              }}
            >
              <View
                style={[
                  styles.image,
                  {
                    borderColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="cloud-upload"
                  size={40}
                  color={darkMode ? darkTheme.icon : lightTheme.icon}
                />
                <View style={styles.txt}>
                  <Text style={{ marginLeft: "5%" }}>Enviar</Text>
                  <Text style={{ marginLeft: "1%", bottom: "6%" }}>backup</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Main", { screen: "Atualizacao_dados" });
              }}
            >
              <View
                style={[
                  styles.image,
                  {
                    borderColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="update"
                  size={40}
                  color={darkMode ? darkTheme.icon : lightTheme.icon}
                />
                <View style={styles.txt}>
                  <Text>Atualizar</Text>
                  <Text style={{ marginLeft: "8%", bottom: "6%" }}>dados</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
              <View
                style={[
                  styles.image,
                  {
                    borderColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <Ionicons
                  name="ios-moon"
                  size={40}
                  color={darkMode ? darkTheme.icon : lightTheme.icon}
                />
                <View style={styles.txt}>
                  <Text style={{}}>Temas</Text>
                  <Text style={{ marginLeft: "10%", bottom: "6%" }}>tela</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <View
                style={[
                  styles.image,
                  {
                    borderColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <Ionicons
                  name="ios-log-in"
                  size={40}
                  color={darkMode ? darkTheme.icon : lightTheme.icon}
                />
                <View style={styles.txt}>
                  <Text style={{ marginBottom: "15%" }}>Desconectar</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity>
              <View
                style={[
                  styles.image,
                  {
                    borderColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="power"
                  size={40}
                  color={darkMode ? darkTheme.icon : lightTheme.icon}
                />
                <View style={styles.txt}>
                  <Text style={{ marginBottom: "15%" }}>Sair</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  start: {
    flex: 1,
    marginTop: "10%",
  },
  square: {
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    color: "#fff",
    fontSize: 28,
    borderColor: "#fff",
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "rgba(255,255,255, .1)",
  },
  menuContainer: {
    height: "40%",
    flexDirection: "row",
    flexWrap: "wrap",
    right: "1%",
  },
  menuItem: {
    width: "33.333333%",
    height: "50%",
    padding: 20,
    //backgroundColor: '#ccc',
    //borderColor: "#000",
    //borderWidth: 2,
  },
  image: {
    width: "120%",
    height: "107%",
    opacity: 0.8,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
