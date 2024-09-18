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
  Image,
  Alert,
  Dimensions,
} from "react-native";
import { StatusBar } from "../../components/StatusBar";
import RNPickerSelect from "react-native-picker-select";
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
  CardPedido,
  Fab,
  BottomSheetModal,
  ListItem,
} from "../../components/ui";

import SectionList, {
  ListItemContainer,
} from "../../components/SectionList/SectionListPedidos";
import Header from "../../components/Header/Header";

import { Ionicons } from "@expo/vector-icons";
import styles from "react-native-carousel-control/styles";

//import { LargeList } from "react-native-largelist";

const { width, height } = Dimensions.get("screen");

export default function ConsultaAgenda({ navigation, route }) {
  const { darkMode } = useDarkMode();

  const sectionRef = useRef();
  const [totalClientes, setTotalClientes] = useState(0);
  const [listaClientes, setListaClientes] = useState([
    {
      title: "#",
      data: [
        {
          agenda: "Agenda 33",
          empresa: "Contato: AGENOR",
          observacao: "Obervação: ",
          data: "29/10/2020 16:29 - gyy",
        },
        {
          agenda: "Agenda 33",
          empresa: "Contato: AGENOR",
          observacao: "Obervação: ",
          data: "29/10/2020 16:29 - gyy",
        },
        {
          agenda: "Agenda 33",
          empresa: "Contato: AGENOR",
          observacao: "Obervação: ",
          data: "29/10/2020 16:29 - gyy",
        },
        {
          agenda: "Agenda 33",
          empresa: "Contato: AGENOR",
          observacao: "Obervação: ",
          data: "29/10/2020 16:29 - gyy",
        },
        {
          agenda: "Agenda 33",
          empresa: "Contato: AGENOR",
          observacao: "Obervação: ",
          data: "29/10/2020 16:29 - gyy",
        },
        {
          agenda: "Agenda 33",
          empresa: "Contato: AGENOR",
          observacao: "Obervação: ",
          data: "29/10/2020 16:29 - gyy",
        },
        {
          agenda: "Agenda 33",
          empresa: "Contato: AGENOR",
          observacao: "Obervação: ",
          data: "29/10/2020 16:29 - gyy",
        },
        {
          agenda: "Agenda 33",
          empresa: "Contato: AGENOR",
          observacao: "Obervação: ",
          data: "29/10/2020 16:29 - gyy",
        },
        {
          agenda: "Agenda 33",
          empresa: "Contato: AGENOR",
          observacao: "Obervação: ",
          data: "29/10/2020 16:29 - gyy",
        },
        {
          agenda: "Agenda 33",
          empresa: "Contato: AGENOR",
          observacao: "Obervação: ",
          data: "29/10/2020 16:29 - gyy",
        },
        {
          agenda: "Agenda 33",
          empresa: "Contato: AGENOR",
          observacao: "Obervação: ",
          data: "29/10/2020 16:29 - gyy",
        },
      ],
    },
  ]);
  const [showBottomSheetModal, setShowBottomSheetModal] = useState(false);

  const listaClientesGerada = [];
  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      listaClientesGerada.push({ id: i, nome: `Teste ${i}` });
    }
  }, []);

  const handleSection = (index) => {
    sectionRef.current.scrollToLocation({ sectionIndex: index, itemIndex: 0 });
  };

  const showAlert = (_) => {
    Alert.alert("Tela de cadastro de agendamentos");
  };

  return (
    <Container full>
      <Header
        navigation={navigation}
        title="Consulta de Agendamentos"
        transparent
        style={{ margin: -20, marginBottom: 20 }}
      />
      <View
        style={[
          style.escolha,
          {
            backgroundColor: darkMode ? darkTheme.nav : lightTheme.nav,
            height: height / 8,
          },
        ]}
      >
        <View
          style={[style.chooseDate, { width: width / 2.7, height: height / 8 }]}
        >
          <RNPickerSelect
            placeholder={{
              label: "Selecione",
              value: null,
              color: "#000",
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Hoje", value: "hoje" },
              { label: "Na semana", value: "na_semana" },
              { label: "No mês", value: "no_mês" },
              { label: "Outra data", value: "outra_data" },
              { label: "Todos", value: "todos" },
            ]}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
          />
          <View
            style={{
              borderWidth: 1,
              borderBottomColor: "#181818",
              width: width / 3.0,
              opacity: 0.5,
            }}
          />
          <View style={{ marginTop: "3%" }}>
            <Text style={{ color: darkMode ? darkTheme.text : lightTheme.text, fontSize: 16 }}>29/10/2020</Text>
          </View>
        </View>
        {/* */}
        <View
          style={[style.chooseDate, { width: width / 4, height: height / 8 }]}
        >
          <TouchableOpacity
            style={[style.btnOk, { width: width / 5.0, height: height / 20 }]}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.instructions}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={style.ins}>
            <Image
              source={require("../../../assets/img/bola_vermelha.png")}
              style={style.imgCircle}
              resizeMode="contain"
            />
            <Text style={style.txtIns}>Não sincronizado</Text>
          </View>
          <View style={style.ins}>
            <Image
              source={require("../../../assets/img/bola_verde.png")}
              style={style.imgCircle}
              resizeMode="contain"
            />
            <Text style={style.txtIns}>Sincronizado</Text>
          </View>
        </View>
      </View>
      <Text></Text>
      <SectionList
        sections={listaClientes}
        total={(qtd) => setTotalClientes(qtd)}
        renderItem={
          ({ item }) => (
            // <ListItemContainer
            //     leftAction={() => alert('esquerda')}
            //     rightAction={() => alert('direita')}
            //     leftComponent={<Text>left</Text>}
            //     rightComponent={<Text>Gerar Venda</Text>}
            //     card
            // >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => alert(`Item: ${item.name}`)}
              onLongPress={() => {
                setShowBottomSheetModal(true);
                Vibration.vibrate(50);
                //alert(`Ligar para ${item.phone}`)
              }}
            >
              <CardPedido>
                <Text style={{ fontSize: 15 }}>{item.agenda}</Text>
                <Text style={{ fontSize: 15, color: "#3498db" }}>
                  {item.empresa}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.observacao}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.data}
                  </Text>
                </View>
              </CardPedido>
            </TouchableOpacity>
          )
          // </ListItemContainer>
        }
        fabMargin
        style={{ flex: 1, marginHorizontal: -20 }}
      />
      <Fab onPress={showAlert} />

      <BottomSheetModal
        show={showBottomSheetModal}
        close={() => setShowBottomSheetModal(false)}
        header={<Text>Titulo</Text>}
      >
        <ListItem
          leftIcon="md-map"
          onPress={() => setShowBottomSheetModal(false)}
        >
          Abrir mapa
        </ListItem>
        <ListItem
          leftIcon="md-call"
          onPress={() => setShowBottomSheetModal(false)}
        >
          Ligar para ...
        </ListItem>
        <ListItem>teste</ListItem>
      </BottomSheetModal>

      {/* <LargeList
                    style={{ flex: 1 }}
                    bounces={false}
                    refreshing={carregando}
                    allLoadCompleted={true}
                    safeMargin={600}
                    numberOfSections={()=>listaClientes.length}//this.props.numberOfSections}
                    numberOfRowsInSection={section => listaClientes[section].data.length} //this.props.numberOfEachSection}
                    heightForCell={(section, row) => 80}
                    renderLoadingMore={()=><View></View>}
                    renderItemSeparator={()=><View></View>}
                    renderCell={(section,row) =>
                        <View>
                            <ListItemContainer
                                leftAction={() => alert('esquerda')}
                                rightAction={() => alert('direita')}
                                leftComponent={<Text>left</Text>}
                                rightComponent={<Text>Gerar Venda</Text>}
                                card
                            >
                                <Card>
                                    <Text>{listaClientes[section].data[row]}</Text>
                                    <Text style={{ opacity: 0.5 }}>sub</Text>
                                </Card>
                            </ListItemContainer>
                        </View>
                    }
                    heightForSection={section => 30}// section % 2 ? this.minSectionHeight : this.maxSectionHeight}
                    renderHeader={()=><Text>Header</Text>}
                    renderFooter={()=><Text>Footer</Text>}
                    renderSection={section => 
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: "grey",
                                    // justifyContent: "center",
                                    //alignItems: "center"
                                }}
                            >
                                <Text>
                                    {listaClientes[section].title}
                                </Text>
                            </View>
                    }
                /> */}
    </Container>
  );
}

const style = StyleSheet.create({
  escolha: {
    backgroundColor: "#444",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  chooseDate: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  instructions: {
    height: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ins: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: height / 20,
  },
  imgCircle: {
    width: "9%",
    marginTop: "2%",
    height: height / 21,
  },
  instruction: {
    height: "5%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  txtIns: {
    marginLeft: "3%",
  },
  btnOk: {
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    //color: 'black',
    color: "#fff",
    alignContent: "flex-start",
    width: width / 4.5,
    fontSize: 16,
    marginLeft: "20%",
    marginBottom: "3%",
    textAlign: "center",
  },
  inputAndroid: {
    //fontSize: 16,
    //color: 'black',
    color: "#fff",
    alignContent: "flex-start",
    fontSize: 16,
    width: width / 5.1,
    marginLeft: "1%",
    marginBottom: "3%",
    textAlign: "center",
  },
});
