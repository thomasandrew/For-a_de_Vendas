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
  TextInput,
} from "react-native";
import { StatusBar } from "../../components/StatusBar";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

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

export default function ClientesScreen({ navigation, route }) {
  const sectionRef = useRef();
  const [totalClientes, setTotalClientes] = useState(0);
  const [listaClientes, setListaClientes] = useState([
    {
      title: "#",
      data: [
        {
          num: "302",
          empresa: "100 POR CENTO DROGARIA",
          end: "A.DE MARTINO DROGARIA DE QUEIMADOS",
        },
        {
          num: "302",
          empresa: "100 POR CENTO DROGARIA",
          end: "A.DE MARTINO DROGARIA DE QUEIMADOS",
        },
        {
          num: "302",
          empresa: "100 POR CENTO DROGARIA",
          end: "A.DE MARTINO DROGARIA DE QUEIMADOS",
        },
        {
          num: "302",
          empresa: "100 POR CENTO DROGARIA",
          end: "A.DE MARTINO DROGARIA DE QUEIMADOS",
        },
        {
          num: "302",
          empresa: "100 POR CENTO DROGARIA",
          end: "A.DE MARTINO DROGARIA DE QUEIMADOS",
        },
        {
          num: "302",
          empresa: "100 POR CENTO DROGARIA",
          end: "A.DE MARTINO DROGARIA DE QUEIMADOS",
        },
        {
          num: "302",
          empresa: "100 POR CENTO DROGARIA",
          end: "A.DE MARTINO DROGARIA DE QUEIMADOS",
        },
        {
          num: "302",
          empresa: "100 POR CENTO DROGARIA",
          end: "A.DE MARTINO DROGARIA DE QUEIMADOS",
        },
        {
          num: "302",
          empresa: "100 POR CENTO DROGARIA",
          end: "A.DE MARTINO DROGARIA DE QUEIMADOS",
        },
        {
          num: "302",
          empresa: "100 POR CENTO DROGARIA",
          end: "A.DE MARTINO DROGARIA DE QUEIMADOS",
        },
        {
          num: "302",
          empresa: "100 POR CENTO DROGARIA",
          end: "A.DE MARTINO DROGARIA DE QUEIMADOS",
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
    Alert.alert("Tela de adicionar pedidos");
  };

  const search = (_) => {
    Alert.alert("Searching");
  };

  return (
    <Container full>
      <Header
        navigation={navigation}
        title="Consulta Pendências"
        transparent
        style={{ margin: -20, marginBottom: 20 }}
      />
      <View style={style.inputContainer}>
        <TextInput style={style.txtInput} />
        <TouchableOpacity style={style.touch} onPress={search}>
          <MaterialCommunityIcons name="magnify" size={30} color="#000" />
        </TouchableOpacity>
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
                <Text style={{ fontSize: 15 }}>{item.num}</Text>
                <Text style={{ opacity: 0.5, fontSize: 15 }}>
                  {item.empresa}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>{item.end}</Text>
                </View>
              </CardPedido>
            </TouchableOpacity>
          )
          // </ListItemContainer>
        }
        fabMargin
        style={{ flex: 1, marginHorizontal: -20 }}
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

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  txtInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  touch: {
    paddingRight: "3%",
  },
});
