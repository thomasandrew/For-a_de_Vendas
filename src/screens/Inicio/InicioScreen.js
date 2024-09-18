import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  VirtualizedList,
  BackHandler,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "../../components/StatusBar";
import {
  Container,
  Button,
  Title,
  StyledView,
  Input,
  Text,
  ButtonCard,
} from "../../components/ui";
import Carousel from "react-native-carousel-control";
import RNPickerSelect from "react-native-picker-select";

// Assets
import { imgs } from "../../components/assets";

const { width, height } = Dimensions.get("screen");

export default function InicioScreen({ navigation }) {
  //Sair ao chegar na tela inicial
  BackHandler.addEventListener("hardwareBackPress", (e) => {
    if (navigation.canGoBack() === false) {
      alert("Sair?");
      return true;
    }
    return false;
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleCargo, setModalVisibleCargo] = useState(false);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ height: 50, alignItems: "center", marginBottom: 30 }}>
          <Image
            source={imgs.logoWSGE_cinza}
            style={{
              maxWidth: 150,
              maxHeight: 49,
              resizeMode: "stretch",
            }}
          />
        </View>

        <View>
          <StyledView style={{ height: Dimensions.get("window").width }}>
            {/*<Text>Carrosseu de Gráficos</Text>*/}
            <Carousel
              pageStyle={{
                backgroundColor: "white",
                borderRadius: 5,
                right: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
              swipeThreshold={0.1}
            >
              <View
                style={{
                  //borderWidth: 3,
                  width: width / 1.3,
                  height: height / 2.1,
                  marginTop: "3%",
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#000", fontSize: 18 }}>
                    HISTÓRICO DE PEDIDOS
                  </Text>
                  <Text style={{ color: "#000", fontSize: 15 }}>
                    Outubro 2020
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "19%",
                  }}
                >
                  <Text style={{ color: "#000", fontSize: 27 }}>
                    NÃO HÁ REGISTROS
                  </Text>
                  <Text style={{ color: "#000", fontSize: 27 }}>
                    PARA ESTE MÊS!
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    height: height / 4.5,
                    //borderWidth: 2,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#2ecc71",
                        width: "4%",
                        height: height / 60,
                      }}
                    />
                    <View style={{ marginLeft: "3%" }}>
                      <Text style={{ color: "#000", fontSize: 14 }}>
                        Pedido
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      //borderWidth: 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#d63031",
                        width: "4%",
                        height: height / 60,
                      }}
                    />
                    <View style={{ marginLeft: "3%" }}>
                      <Text style={{ color: "#000", fontSize: 14 }}>
                        Orçamento
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      //borderWidth: 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#0652DD",
                        width: "4%",
                        height: height / 60,
                      }}
                    />
                    <View style={{ marginLeft: "3%" }}>
                      <Text style={{ color: "#000", fontSize: 14 }}>
                        Farturado
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      //borderWidth: 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#d35400",
                        width: "4%",
                        height: height / 60,
                      }}
                    />
                    <View style={{ marginLeft: "3%" }}>
                      <Text style={{ color: "#000", fontSize: 14 }}>
                        Gerada venda
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      //borderWidth: 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#181818",
                        width: "4%",
                        height: height / 60,
                      }}
                    />
                    <View style={{ marginLeft: "3%" }}>
                      <Text style={{ color: "#000", fontSize: 14 }}>
                        Cancelado
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View
                  style={{
                    //borderWidth: 3,
                    width: width / 1.3,
                    height: height / 2.1,
                    marginTop: "3%",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "#000", fontSize: 18 }}>
                      TOP 3 PRODUTOS EM VENDAS
                    </Text>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Outubro 2020
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "19%",
                    }}
                  >
                    <Text style={{ color: "#000", fontSize: 27 }}>
                      NÃO HÁ REGISTROS
                    </Text>
                    <Text style={{ color: "#000", fontSize: 27 }}>
                      PARA ESTE MÊS!
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View
                  style={{
                    //borderWidth: 3,
                    width: width / 1.3,
                    height: height / 2.1,
                    marginTop: "3%",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "#000", fontSize: 18 }}>
                      TOP 3 CLIENTES EM VENDAS
                    </Text>
                    <Text style={{ color: "#000", fontSize: 15 }}>
                      Outubro 2020
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "19%",
                    }}
                  >
                    <Text style={{ color: "#000", fontSize: 27 }}>
                      NÃO HÁ REGISTROS
                    </Text>
                    <Text style={{ color: "#000", fontSize: 27 }}>
                      PARA ESTE MÊS!
                    </Text>
                  </View>
                </View>
              </View>
            </Carousel>
          </StyledView>
        </View>

        <ScrollView bounces={false}></ScrollView>

        <Text>Lista de atalhos</Text>

        {/* Modal Cargo */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleCargo}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.cargo}>
                <RNPickerSelect
                  placeholder={{
                    label: "Selecione",
                    value: null,
                    color: "#555",
                  }}
                  onValueChange={(value) => console.log(value)}
                  items={[
                    { label: "Contato", value: "contato" },
                    { label: "Cliente", value: "cliente" },
                  ]}
                  style={pickerSelectStylesCargo}
                  useNativeAndroidPickerStyle={false}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  paddingRight: "3%",
                }}
              >
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    setModalVisibleCargo(!modalVisibleCargo);
                  }}
                >
                  <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={{ color: "#fff" }}
                  >
                    Cancelar
                  </Text>
                </TouchableOpacity>
                <View />
                <TouchableOpacity style={styles.btn}>
                  <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={{ color: "#fff" }}
                  >
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* Modal Cargo */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: -10, minHeight: 100, maxHeight: 100 }}
        >
          <ButtonCard
            title="Cadastro cliente"
            onPress={() => {
              navigation.navigate("Main", { screen: "AddClientes" });
            }}
          />
          <ButtonCard
            title="Consulta cliente"
            onPress={() => {
              navigation.navigate("Main", { screen: "ClientesScreen" });
            }}
          />
          <ButtonCard
            title="Consulta produto"
            onPress={() => {
              navigation.navigate("Main", { screen: "Consulta_produto" });
            }}
          />
          <ButtonCard
            title="Cadastro contato"
            onPress={() => {
              navigation.navigate("Main", { screen: "CadContato" });
            }}
          />
          <ButtonCard
            title="Consulta contato"
            onPress={() => {
              navigation.navigate("Main", { screen: "Consulta_contatos" });
            }}
          />
          <ButtonCard title="Cadastro pedido" onPress={() => {}} />
          <ButtonCard
            title="Consulta pedido"
            onPress={() => {
              navigation.navigate("Main", { screen: "Consulta_pedidos" });
            }}
          />
          <ButtonCard
            title="Cadastro agenda"
            onPress={() => {
              setModalVisibleCargo(true);
            }}
          />
          <ButtonCard
            title="Consulta agenda"
            onPress={() => {
              navigation.navigate("Main", { screen: "Consulta_agenda" });
            }}
          />
          <ButtonCard
            title="Atualização de dados"
            onPress={() => {
              navigation.navigate("Main", { screen: "Atualizacao_dados" });
            }}
          />
          {/*<ButtonCard title="Sobre JD System" onPress={() => { navigation.navigate("Main", { screen: "Sobre_JD" }) }} /> */}
          <ButtonCard title="Sair do app" onPress={() => {}} />
          <ButtonCard
            title="Desconectar"
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          />
        </ScrollView>

        {/* <FlatList
                nestedScrollEnabled={false}
                data={[
                    { id: "00", name: "Relâmpago McQueen" },
                    { id: "01", name: "Agente Tom Mate" },
                    { id: "02", name: "Doc Hudson" },
                    { id: "03", name: "Cruz Ramirez" },
                    { id: "04", name: "Cruz Ramirez" },
                    { id: "05", name: "Cruz Ramirez" },
                    { id: "06", name: "Cruz Ramirez" },
                    { id: "07", name: "Cruz Ramirez" },
                    { id: "08", name: "Cruz Ramirez" },
                    { id: "09", name: "Cruz Ramirez" },
                    { id: "10", name: "Cruz Ramirez" },
                    { id: "11", name: "Cruz Ramirez" },
                ]}
                keyExtractor={item => item.id}
                numColumns={3}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flex: 1, backgroundColor: 'silver', margin: 5 }}>
                            <Text >{item.name}</Text>
                        </View>
                    );
                }}
            /> */}

        {/* <VirtualizedList
                    data={[
                        { id: "00", name: "Relâmpago McQueen" },
                        { id: "01", name: "Agente Tom Mate" },
                        { id: "02", name: "Doc Hudson" },
                        { id: "03", name: "Cruz Ramirez" },
                        { id: "04", name: "Cruz Ramirez" },
                        { id: "05", name: "Cruz Ramirez" },
                        { id: "06", name: "Cruz Ramirez" },
                        { id: "07", name: "Cruz Ramirez" },
                        { id: "08", name: "Cruz Ramirez" },
                        { id: "09", name: "Cruz Ramirez" },
                        { id: "10", name: "Cruz Ramirez" },
                        { id: "11", name: "Cruz Ramirez" },
                    ]}
                    initialNumberToRender={10}
                    getItemCount={(data) => data.length}
                    getItem={(data, index) => {
                        return data[index];
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={{ height: 50 }}>
                                <Text>{index}- {item.name}</Text>
                            </View>
                        );
                    }}
                /> */}
      </ScrollView>
      <StatusBar />
    </Container>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "#3d3d3d",
    padding: 35,
    borderRadius: 20,
    elevation: 5,
  },
  cargo: {
    marginBottom: "6%",
    flexDirection: "row",
  },
  btn: {
    backgroundColor: "#3498db",
    alignContent: "flex-start",
    padding: "4%",
    marginBottom: "7%",
    borderRadius: 10,
    fontSize: 16,
    width: "37%",
    marginLeft: "3%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const pickerSelectStylesCargo = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    //color: 'black',
    backgroundColor: "#fff",
    color: "#000",
    alignContent: "flex-start",
    height: height / 13,
    width: width / 1.4,
    marginTop: "1%",
    borderRadius: 10,
    fontSize: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "4%",
    marginLeft: "6%",
  },
  inputAndroid: {
    //fontSize: 16,
    //color: 'black',
    backgroundColor: "#fff",
    color: "#000",
    alignContent: "center",
    height: height / 13,
    width: width / 1.4,
    marginTop: "1%",
    borderRadius: 10,
    fontSize: 16,
    flex: 1,
    padding: "8%",
    marginLeft: "6%",
    justifyContent: "center",
    alignItems: "center",
  },
});
