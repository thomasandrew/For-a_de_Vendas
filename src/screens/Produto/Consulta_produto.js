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
} from "react-native";
import { StatusBar } from "../../components/StatusBar";

import {
  Container,
  Button,
  Text,
  TexProduto,
  Title,
  StyledView,
  Input,
  Card,
  CardProduto,
  Fab,
  BottomSheetModal,
  ListItem,
} from "../../components/ui";

import SectionList, {
  ListItemContainer,
} from "../../components/SectionList/SectionList";
import Header from "../../components/Header/Header";

import { Ionicons } from "@expo/vector-icons";

//import { LargeList } from "react-native-largelist";

export default function ClientesScreen({ navigation, route }) {
  const sectionRef = useRef();
  const [totalClientes, setTotalClientes] = useState(0);
  const [listaClientes, setListaClientes] = useState([
    {
      title: "#",
      data: [
        {
          cod: "Código: 320",
          name: "1 DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 320",
          name: "2 DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
      ],
    },
    {
      title: "A",
      data: [
        {
          cod: "Código: 321",
          name: "ABAIXADOR DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 321",
          name: "ABAIXADOR DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 321",
          name: "ABAIXADOR DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 321",
          name: "ABAIXADOR DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
      ],
    },
    {
      title: "B",
      data: [
        {
          cod: "Código: 322",
          name: "B DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 322",
          name: "B DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 322",
          name: "B DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 322",
          name: "B DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
      ],
    },
    {
      title: "C",
      data: [
        {
          cod: "Código: 323",
          name: "C DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 323",
          name: "C DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 323",
          name: "C DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 323",
          name: "C DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
      ],
    },
    {
      title: "D",
      data: [
        {
          cod: "Código: 324",
          name: "D DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 324",
          name: "D DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 324",
          name: "D DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
        {
          cod: "Código: 324",
          name: "D DE LINGUA N ESTERIL C/100-",
          marca: "Marca: ESTILO",
          apresentacao: "Aprecentação: PCT C 100 UND",
          tabela: "Tabela:",
          tabela_preco: "5,8500",
          desconto_cinco: "COM 5% DESCONTO:",
          desconto_cinco_preco: "5,5000",
          desconto_dez: "COM 10% DESCONTO",
          desconto_dez_preco: "5,0000",
          desconto_quinze: "COM 15% DESCONTO:",
          desconto_quinze_preco: "4.5000",
          desconto_vinte: "COM 20% DESCONTO:",
          desconto_vinte_preco: "4,0000",
          desconto_vinte_cinco: "COM 25% DESCONTO:",
          desconto_vinte_cinco_preco: "3,5000",
          estoque: "Estoque disponivel: 621,0000",
        },
      ],
    },
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
        title="Consulta produtos"
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
              <CardProduto style={{ marginTop: "1%" }}>
                <View style={[styles.space, {}]}>
                  <Text>{item.cod}</Text>
                </View>
                <View style={[styles.space, { marginTop: "1%" }]}>
                  <Text style={{ fontSize: 17 }}>{item.name}</Text>
                </View>
                <View style={[styles.space, { marginTop: "1%" }]}>
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.marca}
                  </Text>
                </View>
                <View
                  style={[
                    styles.space,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: "1%",
                    },
                  ]}
                >
                  <Text style={[styles.space, { opacity: 0.5, fontSize: 15 }]}>
                    {item.apresentacao}
                  </Text>
                </View>
                <View
                  style={[
                    styles.space,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: "1%",
                    },
                  ]}
                >
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.tabela}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text style={{ opacity: 0.5, fontSize: 15 }}>
                      {item.desconto_cinco_preco}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.space,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: "1%",
                    },
                  ]}
                >
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.desconto_cinco}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text style={{ opacity: 0.5, fontSize: 15 }}>
                      {item.desconto_cinco_preco}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.space,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: "1%",
                    },
                  ]}
                >
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.desconto_dez}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text style={{ opacity: 0.5, fontSize: 15 }}>
                      {item.desconto_dez_preco}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.space,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: "1%",
                    },
                  ]}
                >
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.desconto_quinze}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text style={{ opacity: 0.5, fontSize: 15 }}>
                      {item.desconto_quinze_preco}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.space,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: "1%",
                    },
                  ]}
                >
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.desconto_vinte}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text style={{ opacity: 0.5, fontSize: 15 }}>
                      {item.desconto_vinte_preco}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.space,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: "1%",
                    },
                  ]}
                >
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.desconto_vinte_cinco}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text style={{ opacity: 0.5, fontSize: 15 }}>
                      {item.desconto_vinte_cinco_preco}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.space,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: "1%",
                    },
                  ]}
                >
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.estoque}
                  </Text>
                </View>
              </CardProduto>
            </TouchableOpacity>
          )
          // </ListItemContainer>
        }
        fabMargin
        style={{ flex: 1, marginHorizontal: -20 }}
      />
      <Fab
        onPress={() => navigation.navigate("Main", { screen: "AddClientes" })}
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

const styles = StyleSheet.create({});
