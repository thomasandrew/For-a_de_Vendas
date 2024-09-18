import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  FlatList,
  VirtualizedList,
  ScrollView,
  TouchableOpacity,
  Vibration,
  Picker,
  StyleSheet,
  Text,
  Platform,
  TextInput,
  CheckBox,
  Dimensions,
  Modal,
} from "react-native";
import { StatusBar } from "../../components/StatusBar";
import RNPickerSelect from "react-native-picker-select";
import { useDarkMode } from "../../providers/DarkModeProvider";
import { darkTheme, lightTheme } from "../../theme";

import {
  Container,
  Button,
  Title,
  StyledView,
  Card,
  Fab,
  BottomSheetModal,
  ListItem,
} from "../../components/ui";
import { Input } from "react-native-elements";
import { Icon } from "react-native-elements";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import SectionList, {
  ListItemContainer,
} from "../../components/SectionList/SectionList";
import Header from "../../components/Header/Header";

import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

//import { LargeList } from "react-native-largelist";

export default function ClientesScreen({ navigation, route }) {
  const [selectedValue, setSelectedValue] = useState("Select a course");
  const [isSelected, setSelection] = useState(false);
  const { darkMode } = useDarkMode();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleCargo, setModalVisibleCargo] = useState(false);

  return (
    <Container full>
      <Header
        navigation={navigation}
        title="Cadastro de contato"
        transparent
        style={{ margin: -20, marginBottom: 20 }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={
          Platform.OS === "ios"
            ? pickerSelectStyles.inputIOS
            : pickerSelectStyles.inputAndroid
        }
        style={{ flex: 1, marginTop: "-7%" }}
      >
        <View
          style={[
            styles.divider,
            {
              borderColor: darkMode
                ? darkTheme.borderColor
                : lightTheme.borderColor,
            },
          ]}
        >
          <Text
            style={[
              styles.basicas,
              { color: darkMode ? darkTheme.text : lightTheme.text },
            ]}
          >
            Informações Básicas
          </Text>
        </View>
        <View style={{ marginTop: "5%" }} />
        <View style={styles.pic}>
          <RNPickerSelect
            placeholder={{
              label: "Selecione o tipo de contato",
              value: null,
              color: "#000",
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Cliente", value: "cliente" },
              { label: "Outro", value: "outro" },
            ]}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
          />
        </View>

        <View>
          <View>
            <TextInput
              placeholder="Nome do contato"
              placeholderTextColor="#555"
              autoCompleteType="name"
              style={styles.inp}
            />
          </View>

          <View>
            <TextInput
              placeholder="Número de documento"
              placeholderTextColor="#555"
              keyboardType="number-pad"
              style={styles.inp}
            />
          </View>

          <TextInput
            placeholder="Setor"
            placeholderTextColor="#555"
            style={styles.inp}
          />
          <TextInput
            placeholder="Data Aniversário/Inauguração"
            placeholderTextColor="#555"
            style={styles.inp}
          />

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
                <View>
                  <TextInput
                    placeholder="Adicionar cargo"
                    placeholderTextColor="#555"
                    style={styles.inp}
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

          <View style={styles.cargo}>
            <RNPickerSelect
              placeholder={{
                label: "Selecione o cargo",
                value: null,
                color: "#555",
              }}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Teste 1", value: "Teste_1" },
                { label: "Teste 2", value: "Teste_2" },
              ]}
              style={pickerSelectStylesCargo}
              useNativeAndroidPickerStyle={false}
            />
            <TouchableOpacity
              style={styles.btn_two}
              onPress={() => {
                setModalVisibleCargo(true);
              }}
            >
              <MaterialCommunityIcons name="plus" size={40} color="#fff" />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#555"
            keyboardType="email-address"
            autoCompleteType="email"
            style={styles.inp}
          />
        </View>
        <View>
          <View
            style={[
              styles.divider,
              {
                borderColor: darkMode
                  ? darkTheme.borderColor
                  : lightTheme.borderColor,
              },
            ]}
          >
            <Text
              style={[
                styles.basicas,
                { color: darkMode ? darkTheme.text : lightTheme.text },
              ]}
            >
              Endereço
            </Text>
          </View>
          {/* Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View>
                  <TextInput
                    placeholder="*Endereço de entrega"
                    placeholderTextColor="#000"
                    style={styles.inp}
                  />
                </View>
                <View style={{ marginTop: "-1%", marginBottom: "6%" }}>
                  <RNPickerSelect
                    placeholder={{
                      label: "Selecione um estado",
                      value: null,
                      color: "#555",
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: "Acre", value: "acre" },
                      { label: "Alagoas", value: "alagoas" },
                      { label: "Amapá", value: "amapa" },
                      { label: "Amazonas", value: "amazonas" },
                      { label: "Bahia", value: "bahia" },
                      { label: "Ceará", value: "ceará" },
                      {
                        label: "Distrito Federal",
                        value: "distrito_federal",
                      },
                      {
                        label: "Espírito Santo",
                        value: "espirito_santo",
                      },
                      { label: "Goiás", value: "goias" },
                      { label: "Maranhão", value: "maranhao" },
                      { label: "Mato grosso", value: "mato_grosso" },
                      {
                        label: "Mato Grosso do Sul",
                        value: "mato_grosso_do_sul",
                      },
                      { label: "Minas Gerais", value: "minas_gerais" },
                      { label: "Pará", value: "para" },
                      { label: "Paraíba", value: "paraiba" },
                      { label: "Paraná", value: "parana" },
                      { label: "Pernambuco", value: "pernambuco" },
                      { label: "Piauí", value: "piaui" },
                      {
                        label: "Rio de Jameiro",
                        value: "rio_de_janeiro",
                      },
                      {
                        label: "Rio Grande do Norte",
                        value: "rio_grande_do_norte",
                      },
                      {
                        label: "Rio Grande do Sul",
                        value: "rio_grande_do_sul",
                      },
                      { label: "Rondônia", value: "rondonia" },
                      { label: "Roraima", value: "roraima" },
                      {
                        label: "Santa Catarina",
                        value: "santa_catarina",
                      },
                      { label: "São Paulo", value: "sao_paulo" },
                      { label: "Sergipe", value: "sergipe" },
                      { label: "Tocantins", value: "tocantins" },
                    ]}
                    style={pickerSelectStyles}
                    useNativeAndroidPickerStyle={false}
                  />
                </View>
                <View>
                  <TextInput
                    placeholder="*Cidade de entrega"
                    placeholderTextColor="#000"
                    style={styles.inp}
                  />
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      setModalVisible(!modalVisible);
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
                  <TouchableOpacity style={styles.btn}>
                    <Text
                      numberOfLines={1}
                      adjustsFontSizeToFit
                      style={styles.btnTxt}
                    >
                      Consulta CEP
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          {/* Modal */}
          <View style={{ marginTop: "5%" }}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="CEP"
                placeholderTextColor="#555"
                keyboardType="number-pad"
                style={styles.cep}
              />
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.btn}>
                  <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={styles.btnTxt}
                  >
                    Consulta CEP
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    setModalVisible(true);
                  }}
                >
                  <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={styles.btnTxt}
                  >
                    Esqueci o CEP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              placeholder="Endereço"
              placeholderTextColor="#555"
              style={styles.inp}
            />
            <TextInput
              placeholder="Número"
              placeholderTextColor="#555"
              keyboardType="number-pad"
              style={styles.inp}
            />
            <TextInput
              placeholder="Complemento"
              placeholderTextColor="#555"
              style={styles.inp}
            />
            <View style={styles.pic}>
              <RNPickerSelect
                placeholder={{
                  label: "Selecione um estado",
                  value: null,
                  color: "#555",
                }}
                onValueChange={(value) => console.log(value)}
                items={[
                  { label: "Acre", value: "acre" },
                  { label: "Alagoas", value: "alagoas" },
                  { label: "Amapá", value: "amapa" },
                  { label: "Amazonas", value: "amazonas" },
                  { label: "Bahia", value: "bahia" },
                  { label: "Ceará", value: "ceará" },
                  { label: "Distrito Federal", value: "distrito_federal" },
                  { label: "Espírito Santo", value: "espirito_santo" },
                  { label: "Goiás", value: "goias" },
                  { label: "Maranhão", value: "maranhao" },
                  { label: "Mato grosso", value: "mato_grosso" },
                  { label: "Mato Grosso do Sul", value: "mato_grosso_do_sul" },
                  { label: "Minas Gerais", value: "minas_gerais" },
                  { label: "Pará", value: "para" },
                  { label: "Paraíba", value: "paraiba" },
                  { label: "Paraná", value: "parana" },
                  { label: "Pernambuco", value: "pernambuco" },
                  { label: "Piauí", value: "piaui" },
                  { label: "Rio de Jameiro", value: "rio_de_janeiro" },
                  {
                    label: "Rio Grande do Norte",
                    value: "rio_grande_do_norte",
                  },
                  { label: "Rio Grande do Sul", value: "rio_grande_do_sul" },
                  { label: "Rondônia", value: "rondonia" },
                  { label: "Roraima", value: "roraima" },
                  { label: "Santa Catarina", value: "santa_catarina" },
                  { label: "São Paulo", value: "sao_paulo" },
                  { label: "Sergipe", value: "sergipe" },
                  { label: "Tocantins", value: "tocantins" },
                ]}
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
              />
            </View>
            <TextInput
              placeholder="Cidade"
              placeholderTextColor="#555"
              style={styles.inp}
            />
            <TextInput
              placeholder="Bairro"
              placeholderTextColor="#555"
              style={styles.inp}
            />
            <TextInput
              placeholder="Telefone Comercial"
              placeholderTextColor="#555"
              keyboardType="number-pad"
              autoCompleteType="tel"
              style={styles.inp}
            />
            <TextInput
              placeholder="Telefone Celular"
              placeholderTextColor="#555"
              keyboardType="number-pad"
              autoCompleteType="tel"
              style={styles.inp}
            />
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Obeservação"
                placeholderTextColor="#555"
                numberOfLines={10}
                multiline={true}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  select: {
    color: "#fff",
  },
  divider: {
    borderBottomWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  basicas: {
    fontSize: 23,
    padding: "3%",
  },
  pic: {
    marginBottom: "6%",
  },
  cargo: {
    marginBottom: "6%",
    flexDirection: "row",
  },
  inp: {
    backgroundColor: "#fff",
    alignContent: "flex-start",
    padding: "4%",
    marginBottom: "6%",
    borderRadius: 10,
    fontSize: 16,
  },
  cep: {
    backgroundColor: "#fff",
    color: "#000",
    alignContent: "flex-start",
    padding: "4%",
    marginBottom: "6%",
    borderRadius: 10,
    fontSize: 16,
    width: "35%",
  },
  btn: {
    /*borderWidth: 2,
    backgroundColor: "blue",
    padding: "1%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    marginTop: "3%",
    top: "-7%",
    */
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
  btn_two: {
    width: "15%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
    marginLeft: "3%",
  },
  btnTxt: {
    color: "#fff",
    fontSize: 30,
  },
  textAreaContainer: {
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-around",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 30,
    fontSize: 17,
    color: "#fff",
  },
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
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    //color: 'black',
    backgroundColor: "#fff",
    color: "#000",
    alignContent: "flex-start",
    padding: "4%",
    marginTop: "1%",
    borderRadius: 10,
    fontSize: 16,
  },
  inputAndroid: {
    //fontSize: 16,
    //color: 'black',
    backgroundColor: "#fff",
    color: "#000",
    alignContent: "flex-start",
    padding: "4%",
    marginTop: "1%",
    borderRadius: 10,
    fontSize: 16,
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
  },
  inputAndroid: {
    //fontSize: 16,
    //color: 'black',
    backgroundColor: "#fff",
    color: "#000",
    alignContent: "flex-start",
    height: height / 13,
    width: width / 1.4,
    marginTop: "1%",
    borderRadius: 10,
    fontSize: 16,
    flex: 1,
    padding: "4%",
  },
});
