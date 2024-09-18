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
  Image,
  Modal,
  TouchableHighlight,
} from "react-native";
import { StatusBar } from "../../components/StatusBar";
import RNPickerSelect from "react-native-picker-select";
import { Checkbox } from "react-native-paper";
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

//import { LargeList } from "react-native-largelist";

const { width, height } = Dimensions.get("screen");

export default function ClientesScreen({ navigation, route }) {
  const { darkMode } = useDarkMode();
  const [selectedValue, setSelectedValue] = useState("Select a course");
  const [checked, setChecked] = useState(false);
  const [checked_two, setChecked_two] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [shouldShowTwo, setShouldShowTwo] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const icone = (_) => {
    setChecked(!checked);
  };

  const combine = (_) => {
    icone();
    setShouldShow(!shouldShow);
  };

  const icone_two = (_) => {
    setChecked_two(!checked_two);
  };

  const combineTwo = (_) => {
    icone_two();
    setShouldShowTwo(!shouldShowTwo);
  };

  return (
    <Container full>
      <Header
        navigation={navigation}
        title="Adicionar Clientes"
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
        style={{ flex: 1 }}
      >
        <View
          style={[
            styles.divider,
            {
              borderBottomColor: darkMode
                ? darkTheme.borderColor
                : lightTheme.borderColor,
            },
          ]}
        >
          <Text
            style={[
              styles.basicas,
              {
                color: darkMode ? darkTheme.text : lightTheme.text,
              },
            ]}
          >
            Informações Básicas
          </Text>
        </View>

        <View style={styles.pic}>
          <RNPickerSelect
            placeholder={{
              label: "Escolha",
              value: null,
              color: "red",
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Pessoa Juridica", value: "Pessoa_juridica" },
              { label: "Pessoa Física", value: "Pessoa_física" },
            ]}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
          />
        </View>

        <View>
          <View>
            <TextInput
              placeholder="*Nome Completo"
              placeholderTextColor="#000"
              style={styles.inp}
            />
          </View>

          <View>
            <TextInput
              placeholder="Registro de Identidade"
              placeholderTextColor="#000"
              keyboardType="number-pad"
              style={styles.inp}
            />
          </View>

          <TextInput
            placeholder="*CPF"
            placeholderTextColor="#000"
            keyboardType="number-pad"
            style={styles.inp}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#000"
            style={styles.inp}
          />
          <TextInput
            placeholder="Data de aniversário"
            placeholderTextColor="#000"
            style={styles.inp}
          />
        </View>
        <View
          style={[
            styles.divider,
            {
              borderBottomColor: darkMode
                ? darkTheme.borderColor
                : lightTheme.borderColor,
            },
          ]}
        >
          <Text
            style={[
              styles.basicas,
              {
                color: darkMode ? darkTheme.text : lightTheme.text,
              },
            ]}
          >
            Endereço
          </Text>
        </View>
        <View style={{ paddingTop: "5%" }}>
          <TextInput
            placeholder="*CEP"
            placeholderTextColor="#000"
            keyboardType="number-pad"
            style={styles.inp}
          />
          <TextInput
            placeholder="Endereço"
            placeholderTextColor="#000"
            style={styles.inp}
          />
          <TextInput
            placeholder="Complemento"
            placeholderTextColor="#000"
            style={styles.inp}
          />
          <View style={{ marginTop: "-6%", paddingBottom: "6%" }}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" },
              ]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
            />
          </View>

          <TextInput
            placeholder="*Cidade"
            placeholderTextColor="#000"
            style={styles.inp}
          />
          <TextInput
            placeholder="*Bairro"
            placeholderTextColor="#000"
            style={styles.inp}
          />
          <TextInput
            placeholder="Telefone"
            placeholderTextColor="#000"
            keyboardType="number-pad"
            style={styles.inp}
          />
          <TextInput
            placeholder="Telefone 2"
            placeholderTextColor="#000"
            keyboardType="number-pad"
            style={styles.inp}
          />
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Observação"
              placeholderTextColor="#000"
              numberOfLines={10}
              multiline={true}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => combine()}
              style={
                Platform.OS === "ios"
                  ? checkBoxStyles.inputIOS
                  : checkBoxStyles.inputAndroid
              }
            >
              <MaterialCommunityIcons
                name={checked ? "check" : "checkbox-blank-circle-outline"}
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                flex: 1,
              }}
            >
              <Text
                style={
                  Platform.OS === "ios"
                    ? txtStyles.inputIOS
                    : txtStyles.inputAndroid
                }
              >
                End.entrega
              </Text>
              <Text
                style={
                  Platform.OS === "ios"
                    ? txtStyles.inputIOS
                    : txtStyles.inputAndroid
                }
              >
                End.cobrança
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => combineTwo()}
              style={
                Platform.OS === "ios"
                  ? checkBoxStyles.inputIOS
                  : checkBoxStyles.inputAndroid
              }
            >
              <MaterialCommunityIcons
                name={checked_two ? "check" : "checkbox-blank-circle-outline"}
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* End.entrega */}
        <View>
          {/*Here we will return the view when state is true 
        and will return false if state is false*/}
          {shouldShow ? null : (
            <View>
              <View
                style={[
                  styles.divider,
                  {
                    borderBottomColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.basicas,
                    {
                      color: darkMode ? darkTheme.text : lightTheme.text,
                    },
                  ]}
                >
                  Endereço de Entrega
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: "5%" }}>
                <TextInput
                  placeholder="CEP"
                  placeholderTextColor="#555"
                  keyboardType="number-pad"
                  style={styles.cep}
                />
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
                      <View style={{ marginTop: "-6%", marginBottom: "6%" }}>
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
                <TouchableOpacity
                  style={[styles.btn, { marginTop: "1%" }]}
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

              <View>
                <TextInput
                  placeholder="*Endereço de entrega"
                  placeholderTextColor="#000"
                  style={styles.inp}
                />
              </View>

              <TextInput
                placeholder="*Número do endereço de entrega"
                placeholderTextColor="#000"
                style={styles.inp}
              />
              <TextInput
                placeholder="Complemento do endreço de entrega"
                placeholderTextColor="#000"
                style={styles.inp}
              />
              <View style={{ marginTop: "-6%", paddingBottom: "6%" }}>
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
                placeholder="*Cidade de Entrega"
                placeholderTextColor="#000"
                style={styles.inp}
              />
              <TextInput
                placeholder="*Bairro de Entrega"
                placeholderTextColor="#000"
                style={styles.inp}
              />
              <View style={{ marginBottom: "2%" }}>
                <View style={styles.textAreaContainer}>
                  <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Referêcia de entrega"
                    placeholderTextColor="#000"
                    numberOfLines={10}
                    multiline={true}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
        <View>
          {shouldShowTwo ? null : (
            <View>
              <View
                style={[
                  styles.divider,
                  {
                    borderBottomColor: darkMode
                      ? darkTheme.borderColor
                      : lightTheme.borderColor,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.basicas,
                    {
                      color: darkMode ? darkTheme.text : lightTheme.text,
                    },
                  ]}
                >
                  Endereço de Cobrança
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: "5%" }}>
                <TextInput
                  placeholder="CEP"
                  placeholderTextColor="#555"
                  keyboardType="number-pad"
                  style={styles.cep}
                />
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
                          placeholder="*Endereço de cobrança"
                          placeholderTextColor="#000"
                          style={styles.inp}
                        />
                      </View>
                      <View style={{ marginTop: "-6%", marginBottom: "6%" }}>
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
                          placeholder="*Cidade de cobrança"
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
                <TouchableOpacity
                  style={[styles.btn, { marginTop: "1%" }]}
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

              <View>
                <TextInput
                  placeholder="*Endereço de cobrança"
                  placeholderTextColor="#000"
                  style={styles.inp}
                />
              </View>
              <TextInput
                placeholder="Complemento do endreço de cobrança"
                placeholderTextColor="#000"
                style={styles.inp}
              />
              <View style={{ marginTop: "-6%", paddingBottom: "6%" }}>
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
                placeholder="*Cidade de cobrança"
                placeholderTextColor="#000"
                style={styles.inp}
              />
              <TextInput
                placeholder="*Bairro de cobrança"
                placeholderTextColor="#000"
                style={styles.inp}
              />
              <TextInput
                placeholder="Telefone do endereço de cobrança"
                placeholderTextColor="#000"
                keyboardType="number-pad"
                style={styles.inp}
              />
            </View>
          )}
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
    color: "#fff",
    fontSize: 23,
    padding: "3%",
  },
  pic: {
    marginBottom: "6%",
  },
  inp: {
    backgroundColor: "#fff",
    color: "#000",
    alignContent: "flex-start",
    padding: "4%",
    marginBottom: "6%",
    borderRadius: 10,
    fontSize: 16,
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
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    margin: 30,
    fontSize: 17,
    color: "#fff",
  },
  cep: {
    backgroundColor: "#fff",
    color: "#000",
    alignContent: "flex-start",
    padding: "4%",
    marginBottom: "6%",
    borderRadius: 10,
    fontSize: 16,
    width: "60%",
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
  btnTxt: {
    color: "#fff",
    fontSize: 30,
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
    marginTop: "6%",
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
    marginTop: "6%",
    borderRadius: 10,
    fontSize: 16,
  },
});

const checkBoxStyles = StyleSheet.create({
  inputIOS: {
    justifyContent: "center",
    alignContent: "center",
    //borderWidth: 1,
    paddingTop: "-3%",
    borderColor: "#fff",
    marginTop: "6%",
    borderRadius: 20,
  },
  inputAndroid: {
    justifyContent: "center",
    alignContent: "center",
    //borderWidth: 1,
    paddingTop: "-3%",
    borderColor: "#fff",
    marginTop: "5%",
    borderRadius: 20,
  },
});

const txtStyles = StyleSheet.create({
  inputIOS: {
    justifyContent: "center",
    alignContent: "center",
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    marginTop: "6%",
    marginLeft: "4%",
    color: "#fff",
    fontSize: 13,
  },
  inputAndroid: {
    justifyContent: "center",
    alignContent: "center",
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    marginTop: "6%",
    marginLeft: "4%",
    color: "#fff",
    fontSize: 13,
  },
});
