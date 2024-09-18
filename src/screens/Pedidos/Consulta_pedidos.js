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
          num: "#18",
          empresa: "Empresa: P.G. RIO",
          data_emeissao: "data_de_emissao: 25/10/2019 10.44.51",
          lo: "3 B COMERCIAL EIRELI",
          total: "Total: $17.55",
        },
        { 
            num: "#18",
            empresa: "Empresa: P.G. RIO",
            data_emeissao: "data_de_emissao: 25/10/2019 10.44.51",
            lo: "3 B COMERCIAL EIRELI",
            total: "Total: $17.55",
          },
          { 
            num: "#18",
            empresa: "Empresa: P.G. RIO",
            data_emeissao: "data_de_emissao: 25/10/2019 10.44.51",
            lo: "3 B COMERCIAL EIRELI",
            total: "Total: $17.55",
          },
          { 
            num: "#18",
            empresa: "Empresa: P.G. RIO",
            data_emeissao: "data_de_emissao: 25/10/2019 10.44.51",
            lo: "3 B COMERCIAL EIRELI",
            total: "Total: $17.55",
          },
          { 
            num: "#18",
            empresa: "Empresa: P.G. RIO",
            data_emeissao: "data_de_emissao: 25/10/2019 10.44.51",
            lo: "3 B COMERCIAL EIRELI",
            total: "Total: $17.55",
          },
          { 
            num: "#18",
            empresa: "Empresa: P.G. RIO",
            data_emeissao: "data_de_emissao: 25/10/2019 10.44.51",
            lo: "3 B COMERCIAL EIRELI",
            total: "Total: $17.55",
          },
          { 
            num: "#18",
            empresa: "Empresa: P.G. RIO",
            data_emeissao: "data_de_emissao: 25/10/2019 10.44.51",
            lo: "3 B COMERCIAL EIRELI",
            total: "Total: $17.55",
          },
          { 
            num: "#18",
            empresa: "Empresa: P.G. RIO",
            data_emeissao: "data_de_emissao: 25/10/2019 10.44.51",
            lo: "3 B COMERCIAL EIRELI",
            total: "Total: $17.55",
          },
          { 
            num: "#18",
            empresa: "Empresa: P.G. RIO",
            data_emeissao: "data_de_emissao: 25/10/2019 10.44.51",
            lo: "3 B COMERCIAL EIRELI",
            total: "Total: $17.55",
          },
          { 
            num: "#18",
            empresa: "Empresa: P.G. RIO",
            data_emeissao: "data_de_emissao: 25/10/2019 10.44.51",
            lo: "3 B COMERCIAL EIRELI",
            total: "Total: $17.55",
          },
          { 
            num: "#18",
            empresa: "Empresa: P.G. RIO",
            data_emeissao: "data_de_emissao: 25/10/2019 10.44.51",
            lo: "3 B COMERCIAL EIRELI",
            total: "Total: $17.55",
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

  const showAlert = _ => {
    Alert.alert("Tela de adicionar pedidos")
  }

  return (
    <Container full>
      <Header
        navigation={navigation}
        title="Consulta Pedidos"
        transparent
        style={{ margin: -20, marginBottom: 20 }}
      />
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
            <Text style={style.txtIns}>Orçamento</Text>
          </View>
          <View style={style.ins}>
            <Image
              source={require("../../../assets/img/bola_preta.png")}
              style={style.imgCircle}
              resizeMode="contain"
            />
            <Text style={style.txtIns}>Cancelado</Text>
          </View>
          <View style={style.ins}>
            <Image
              source={require("../../../assets/img/bola_azul.png")}
              style={style.imgCircle}
              resizeMode="contain"
            />
            <Text style={style.txtIns}>Farturado</Text>
          </View>
        </View>  
      </View>
      <View style={style.instruction}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={style.inst}>
            <Image
              source={require("../../../assets/img/bola_verde.png")}
              style={style.imgCircleG}
              resizeMode="contain"
            />
            <Text style={style.txtIns}>Sincronizado</Text>
          </View>
          <View style={style.ins}>
            <Image
              source={require("../../../assets/img/bola_laranja.png")}
              style={style.imgCircleL}
              resizeMode="contain"
            />
            <Text style={{ marginLeft: "-1%" }}>Gerar Venda</Text>
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
                <Text style={{ fontSize: 15 }}>{item.num}</Text>
                <Text style={{ opacity: 0.5, fontSize: 15 }}>
                  {item.empresa}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.data_emeissao}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.lo}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ opacity: 0.5, fontSize: 15 }}>
                    {item.total}
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
      <Fab
        onPress={showAlert}
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
  instructions: {
    height: "5%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ins: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "27%",
  },
  imgCircle: {
    width: "15%",
  },
  instruction: {
    height: "5%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inst: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imgCircleL: {
    width: "20%", 
  },
  imgCircleG: {
    width: "11%",
  },
  txtIns: {
    marginLeft: "2%",  
  },
});
