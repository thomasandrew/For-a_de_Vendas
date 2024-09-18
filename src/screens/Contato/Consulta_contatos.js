import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  FlatList,
  VirtualizedList,
  ScrollView,
  TouchableOpacity,
  Vibration,
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
  BottomSheetModal,
  ListItem,
} from "../../components/ui";

import SectionList, {
  ListItemContainer,
} from "../../components/SectionList/SectionList";
import Header from "../../components/Header/Header";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

//import { LargeList } from "react-native-largelist";

export default function ClientesScreen({ navigation, route }) {
  const sectionRef = useRef();
  const [totalClientes, setTotalClientes] = useState(0);
  const [listaClientes, setListaClientes] = useState([
    {
      title: "#",
      data: [
        {
          name: "1",
          cargo: "Cargo: CARGO TESTE",
          email: "1@gmail.com",
          telefone_um: "(21) 2568-8792",
          telefone_dois: "(21) 2325-7890",
        },
        {
          name: "2 ",
          cargo: "Cargo: CARGO TESTE",
          email: "2@gmail.com",
          telefone_um: "(21) 2568-8792",
          telefone_dois: "(21) 2325-7890",
        },
      ],
    },
    {
      title: "A",
      data: [
        {
          name: "AGERNO",
          cargo: "Cargo: CARGO TESTE",
          email: "agerno@gmail.com",
          telefone_um: "(21) 2568-8792",
          telefone_dois: "(21) 2325-7890",
        },
        {
          name: "AGERNO",
          cargo: "Cargo: CARGO TESTE",
          email: "agerno@gmail.com",
          telefone_um: "(21) 2568-8792",
          telefone_dois: "(21) 2325-7890",
        },
        {
          name: "AGERNO",
          cargo: "Cargo: CARGO TESTE",
          email: "agerno@gmail.com",
          telefone_um: "(21) 2568-8792",
          telefone_dois: "(21) 2325-7890",
        },
        {
          name: "AGERNO",
          cargo: "Cargo: CARGO TESTE",
          email: "agerno@gmail.com",
          telefone_um: "(21) 2568-8792",
          telefone_dois: "(21) 2325-7890",
        },
        {
          name: "AGERNO",
          cargo: "Cargo: CARGO TESTE",
          email: "agerno@gmail.com",
          telefone_um: "(21) 2568-8792",
          telefone_dois: "(21) 2325-7890",
        },
        {
          name: "AGERNO",
          cargo: "Cargo: CARGO TESTE",
          email: "agerno@gmail.com",
          telefone_um: "(21) 2568-8792",
          telefone_dois: "(21) 2325-7890",
        },
      ],
    },
    {
      title: "B",
      data: [
        {
          name: "BEATRIZ",
          cargo: "Cargo: CARGO TESTE",
          email: "beatriz@gmail.com",
          telefone_um: "(21) 2568-8792",
          telefone_dois: "(21) 2325-7890",
        },
        {
          name: "BEATRIZ",
          cargo: "Cargo: CARGO TESTE",
          email: "beatriz@gmail.com",
          telefone_um: "(21) 2568-8792",
          telefone_dois: "(21) 2325-7890",
        },
        {
          name: "BEATRIZ",
          cargo: "Cargo: CARGO TESTE",
          email: "beatriz@gmail.com",
          telefone_um: "(21) 2568-8792",
          telefone_dois: "(21) 2325-7890",
        },
        {
          name: "BEATRIZ",
          cargo: "Cargo: CARGO TESTE",
          email: "beatriz@gmail.com",
          telefone_um: "(21) 2568-8792",
          telefone_dois: "(21) 2325-7890",
        },
      ],
    },
    {
      title: "C",
      data: [
        "Cheese Cake",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
      ],
    },
    { title: "D", data: ["Teste"] },
    { title: "E", data: ["Teste"] },
    { title: "F", data: ["Teste"] },
    { title: "G", data: ["Teste"] },
    { title: "H", data: ["Teste"] },
    { title: "I", data: ["Teste"] },
    { title: "J", data: ["Teste"] },
    { title: "K", data: ["Teste"] },
    { title: "L", data: ["Teste"] },
    { title: "M", data: ["Teste"] },
    { title: "N", data: ["Teste"] },
    { title: "O", data: ["Teste"] },
    { title: "P", data: ["Teste"] },
    { title: "Q", data: ["Teste"] },
    { title: "R", data: ["Teste"] },
    { title: "S", data: ["Teste"] },
    { title: "T", data: ["Teste"] },
    { title: "U", data: ["Teste"] },
    { title: "V", data: ["Teste"] },
    { title: "W", data: ["Teste"] },
    { title: "X", data: ["Teste"] },
    { title: "Y", data: ["Teste"] },
    { title: "Z", data: ["Teste"] },
    { title: "0", data: ["Teste"] },
    { title: "1", data: ["Teste"] },
    { title: "2", data: ["Teste"] },
    { title: "3", data: ["Teste"] },
    { title: "4", data: ["Teste"] },
    { title: "5", data: ["Teste"] },
    { title: "6", data: ["Teste"] },
    { title: "7", data: ["Teste"] },
    { title: "8", data: ["Teste"] },
    {
      title: "9",
      data: [
        "Cheese Cake",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
        "Cheese Cake",
        "Ice Cream",
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

  return (
    <Container full>
      <Header
        navigation={navigation}
        title="Consulta contatos"
        transparent
        style={{ margin: -20, marginBottom: 20 }}
      />
      <Text>Total de Clientes: {totalClientes}</Text>
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
              <Card>
                <Text>{item.name}</Text>
                <Text style={{ opacity: 0.5, fontSize: 12, marginBottom: 10 }}>
                  {item.cargo}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="email"
                    size={16}
                    color={"silver"}
                  />
                  <Text style={{ opacity: 0.5, fontSize: 12, marginLeft: 10 }}>
                    {item.email}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="md-call" size={16} color={"silver"} />
                  <Text style={{ opacity: 0.5, fontSize: 12, marginLeft: 10 }}>
                    {item.telefone_um}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="cellphone-android"
                    size={16}
                    color={"silver"}
                  />
                  <Text style={{ opacity: 0.5, fontSize: 12, marginLeft: 10 }}>
                    {item.telefone_dois}
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
          )
          // </ListItemContainer>
        }
        fabMargin
        style={{ flex: 1, marginHorizontal: -20 }}
      />
      <Fab
        onPress={() => {
          navigation.navigate("Main", { screen: "CadContato" });
        }}
      />

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
