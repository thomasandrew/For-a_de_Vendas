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
  Modal,
} from "react-native";
import { StatusBar } from "../../components/StatusBar";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useDarkMode } from "../../providers/DarkModeProvider";
import { darkTheme, lightTheme } from "../../theme";

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
  const { darkMode } = useDarkMode();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={[
        style.container,
        { backgroundColor: darkMode ? darkTheme.body : lightTheme.body },
      ]}
    >
      <Header
        navigation={navigation}
        title="Consulta Pendências"
        transparent
        style={{ margin: -10, marginBottom: 20 }}
      />
      <View
        style={[
          style.na,
          {
            width: width / 1.0,
            height: height / 13,
            borderTopColor: darkMode
              ? darkTheme.borderColor
              : lightTheme.borderColor,
            borderBottomColor: darkMode
              ? darkTheme.borderColor
              : lightTheme.borderColor,
          },
        ]}
      >
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <View style={style.situacao}>
                <Text style={{ color: "#000" }}>Situções da Proposta</Text>
              </View>
              <View style={style.instruction_container}>
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/en_solicitacao.png")}
                  />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Em Solicitação
                    </Text>
                  </View>
                </View>
                <View style={style.tell}>
                  {/* <Image
                    source={require("../../../assets/img/en_solicitacao.png")}
                  /> */}
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Aguardando Autorização
                    </Text>
                  </View>
                </View>
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/autorizado_verde.png")}
                  />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Autorizado
                    </Text>
                  </View>
                </View>
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/autorizado_parcial.png")}
                  />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Autoizado Parcial
                    </Text>
                  </View>
                </View>
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/pagamento_cinza.png")}
                  />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      A Faturar
                    </Text>
                  </View>
                </View>
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/faturamento_parcial.png")}
                  />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Faturado Parcialmente
                    </Text>
                  </View>
                </View>
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/pagamento_azul.png")}
                  />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Faturado
                    </Text>
                  </View>
                </View>
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/cancelado.png")}
                  />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Cancelado
                    </Text>
                  </View>
                </View>
                <View style={style.tell}>
                  <Image source={require("../../../assets/img/perdido.png")} />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>Pedido</Text>
                  </View>
                </View>
              </View>
              <View style={[style.situacao, { marginTop: "2%" }]}>
                <Text style={{ color: "#000", fontSize: 15 }}>Envolvidos</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/img_paciente.png")}
                  />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Paciente
                    </Text>
                  </View>
                </View>
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/img_simbol_medico.png")}
                  />
                  <View style={{ paddingLeft: "2%", marginRight: "12%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>Médico</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "2%",
                }}
              >
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/imgsimbol_conveio.png")}
                  />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Convênio
                    </Text>
                  </View>
                </View>
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/img_simbol_pendencia.png")}
                  />
                  <View style={{ paddingLeft: "2%", marginRight: "6%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Pendência
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "2%",
                }}
              >
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/img_simbol_hospital.png")}
                  />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Hospital
                    </Text>
                  </View>
                </View>
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/img_hora_cirurgia.png")}
                  />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Hora Cirurgia
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginTop: "2%",
                }}
              >
                <View style={style.tell}>
                  <Image
                    source={require("../../../assets/img/img_vendedor.png")}
                  />
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Vendedor
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  ...style.openButton,
                  backgroundColor: "#2196F3",
                  marginTop: "5%",
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={style.textStyle}>Retornar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Modal */}
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={[
              style.instruction,
              {
                width: width / 8.0,
                height: height / 14,
                borderRightWidth: 2,
                borderRightColor: darkMode
                  ? darkTheme.borderColor
                  : lightTheme.borderColor,
              },
            ]}
          >
            <Image source={require("../../../assets/img/legenda.png")} />
          </View>
        </TouchableOpacity>
        <View
          style={[
            style.instruction,
            {
              flex: 1,
              height: height / 14,
              borderLeftColor: darkMode
                ? darkTheme.borderColor
                : lightTheme.borderColor,
            },
          ]}
        >
          <Text
            style={{
              fontSize: 18,
              color: darkMode ? darkTheme.text : lightTheme.text,
            }}
          >
            0 Cirurgia
          </Text>
          <Text style={{ color: darkMode ? darkTheme.text : lightTheme.text }}>
            Período não Informado
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main", { screen: "Form_Pendencias" });
          }}
        >
          <View
            style={[
              style.instruction,
              {
                width: width / 8.0,
                height: height / 14,
                borderLeftWidth: 2,
                borderLeftColor: darkMode
                  ? darkTheme.borderColor
                  : lightTheme.borderColor,
              },
            ]}
          >
            <MaterialCommunityIcons
              name="filter"
              size={40}
              color={darkMode ? darkTheme.icone : lightTheme.icone}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={style.proposta}>
        <Text style={style.txt}>Nenhuma Proposta Encontrada</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363537",
  },
  na: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    bottom: "5%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  instruction: {
    justifyContent: "center",
    alignItems: "center",
  },
  proposta: {
    //borderWidth: 2,
    flex: 1,
    bottom: "3%",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //borderWidth: 2,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  situacao: {
    borderBottomWidth: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  tell: {
    flexDirection: "row",
    marginTop: "3%",
  },
});
