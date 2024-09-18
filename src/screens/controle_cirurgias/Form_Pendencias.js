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
  Button,
} from "react-native";
import { StatusBar } from "../../components/StatusBar";
import RNPickerSelect from "react-native-picker-select";
import { Checkbox } from "react-native-paper";
import { useDarkMode } from "../../providers/DarkModeProvider";
import { darkTheme, lightTheme } from "../../theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

import {
  Container,
  Title,
  StyledView,
  Card,
  Fab,
  BottomSheetModal,
  ListItem,
} from "../../components/ui";
//import { Input } from "react-native-elements";
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
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  const [checkedFive, setCheckedFive] = useState(false);
  const [checked_Six, setChecked_Six] = useState(false);
  const [checkedSeven, setCheckedSeven] = useState(false);
  const [checkedEight, setCheckedEight] = useState(false);
  const [checkedNine, setCheckedNine] = useState(false);
  const [checkedTen, setCheckedTen] = useState(false);
  const [checkedEleven, setCheckedEleven] = useState(false);
  const [checkedTwelve, setCheckedTwelve] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [shouldShowTwo, setShouldShowTwo] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [mode, setMode] = useState("date");
  const [chosenMode, setChosenMode] = useState(null);
  const [chosenStartDate, setChosenStartDate] = useState(
    moment().format("MMM Do YY")
  );
  const [chosenEndDate, setChosenEndDate] = useState(
    moment().format("MMM Do YY")
  );

  const icone = (_) => {
    setChecked(!checked);
  };

  const icone_two = (_) => {
    setChecked_two(!checked_two);
  };

  const icone_three = (_) => {
    setCheckedThree(!checkedThree);
  };

  const icone_four = (_) => {
    setCheckedFour(!checkedFour);
  };

  const icone_five = (_) => {
    setCheckedFive(!checkedFive);
  };

  const icone_six = (_) => {
    setChecked_Six(!checked_Six);
  };

  const icone_seven = (_) => {
    setCheckedSeven(!checkedSeven);
  };

  const icone_eight = (_) => {
    setCheckedEight(!checkedEight);
  };

  const icone_nine = (_) => {
    setCheckedNine(!checkedNine);
  };

  const icone_ten = (_) => {
    setCheckedTen(!checkedTen);
  };

  const icone_eleven = (_) => {
    setCheckedEleven(!checkedEleven);
  };

  const icone_twelve = (_) => {
    setCheckedTwelve(!checkedTwelve);
  };

  const showMode = (currentMode) => {
    setDatePickerVisibility(true);
    setMode(currentMode);
  };

  const showTimePicker = () => {
    showMode("time");
  };

  const showDatePicker = () => {
    showMode("date");
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    if (chosenMode) {
      setChosenStartDate(moment(date).format("MMM Do YY"));
    } else {
      setChosenEndDate(moment(date).format("MMM Do YY"));
    }
  };

  return (
    <Container full>
      <Header
        navigation={navigation}
        title="Consulta Pendências"
        transparent
        style={{ margin: -20, marginBottom: 20 }}
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={
          Platform.OS === "ios"
            ? pickerSelectStyles.inputIOS
            : pickerSelectStyles.inputAndroid
        }
        style={{
          flex: 1,
          borderRadius: 20,
          backgroundColor: "#fff",
        }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.cont}>
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <TouchableOpacity onPress={() => icone()}>
              <MaterialCommunityIcons
                name={checked ? "check" : "checkbox-blank-circle-outline"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>Data da Cirúrgia</Text>
          </View>
          <View>
            <View style={styles.deCont}>
              <TouchableOpacity
                onPress={() => {
                  setChosenMode(true);
                  showDatePicker();
                }}
              >
                <View style={styles.down}>
                  <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={{ fontSize: 20 }}
                  >
                    De: {chosenStartDate}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setChosenMode(false);
                  showDatePicker();
                }}
              >
                <View style={styles.down}>
                  <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={{ fontSize: 20 }}
                  >
                    Até: {chosenEndDate}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {isDatePickerVisible && (
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode={mode}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            )}
          </View>
        </View>
        {/* */}
        <View style={styles.cont}>
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <TouchableOpacity onPress={() => icone_two()}>
              <MaterialCommunityIcons
                name={checked_two ? "check" : "checkbox-blank-circle-outline"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>Proposta N° </Text>
          </View>
          <View>
            <View style={styles.deCont}>
              <TouchableOpacity>
                <View style={styles.down}>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="Número"
                    style={{ fontSize: 20 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* */}
        <View style={styles.cont}>
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <TouchableOpacity onPress={() => icone_three()}>
              <MaterialCommunityIcons
                name={checkedThree ? "check" : "checkbox-blank-circle-outline"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>Pedido N°</Text>
          </View>
          <View>
            <View style={styles.deCont}>
              <TouchableOpacity>
                <View style={styles.down}>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="Número"
                    style={{ fontSize: 20 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* */}
        <View style={styles.cont}>
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <TouchableOpacity onPress={() => icone_four()}>
              <MaterialCommunityIcons
                name={checkedFour ? "check" : "checkbox-blank-circle-outline"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>Situação da Proposta</Text>
          </View>
          <View>
            <View style={styles.deCont}>
              <TouchableOpacity>
                <View style={styles.pic}>
                  <RNPickerSelect
                    placeholder={{
                      label: "Selecione uma situação",
                      value: null,
                      color: "red",
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      {
                        label: "Em Solicitação (Aberta)",
                        value: "em_solicitação",
                      },
                      { label: "Autorizado", value: "autorizado" },
                      {
                        label: "Autorizado Parcial",
                        value: "autorizado_parcial",
                      },
                      { label: "Perdida", value: "perdida" },
                      { label: "Cancelada", value: "cancelada" },
                      {
                        label: "Aguarddando Autorização",
                        value: "aguardando_autorizacao",
                      },
                      { label: "Aberto-Pós", value: "aberto_pos" },
                    ]}
                    style={pickerSelectStyles}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* */}
        <View style={styles.contTwo}>
          <View style={{ flexDirection: "row", marginBottom: "17%" }}>
            <TouchableOpacity onPress={() => icone_five()}>
              <MaterialCommunityIcons
                name={checkedFive ? "check" : "checkbox-blank-circle-outline"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>Paciente</Text>
          </View>
          <View>
            <View style={styles.deCont}>
              <View style={styles.collumn}>
                <TextInput
                  placeholder="Matrícula"
                  style={{
                    fontSize: 20,
                    borderBottomColor: "#000",
                    borderBottomWidth: 1,
                    marginBottom: "5%",
                  }}
                />
                <TextInput
                  placeholder="Nome"
                  style={{
                    fontSize: 20,
                    borderBottomColor: "#000",
                    borderBottomWidth: 1,
                    marginTop: "10%",
                    bottom: "19%",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        {/* */}
        <View style={styles.cont}>
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <TouchableOpacity onPress={() => icone_six()}>
              <MaterialCommunityIcons
                name={checked_Six ? "check" : "checkbox-blank-circle-outline"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>Médico</Text>
          </View>
          <View>
            <View style={styles.deCont}>
              <TouchableOpacity>
                <View style={styles.pic}>
                  <RNPickerSelect
                    placeholder={{
                      label: "Selecione o Médico",
                      value: null,
                      color: "red",
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[{ label: "UNIMED", value: "unimed" }]}
                    style={pickerSelectStyles}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* */}
        <View style={styles.cont}>
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <TouchableOpacity onPress={() => icone_seven()}>
              <MaterialCommunityIcons
                name={checkedSeven ? "check" : "checkbox-blank-circle-outline"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>Hospital</Text>
          </View>
          <View>
            <View style={styles.deCont}>
              <TouchableOpacity>
                <View style={styles.pic}>
                  <RNPickerSelect
                    placeholder={{
                      label: "Selecione um Hospital",
                      value: null,
                      color: "red",
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: "", value: "" },
                      { label: "", value: "" },
                    ]}
                    style={pickerSelectStyles}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* */}
        <View style={styles.cont}>
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <TouchableOpacity onPress={() => icone_eight()}>
              <MaterialCommunityIcons
                name={checkedEight ? "check" : "checkbox-blank-circle-outline"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>Procedimento</Text>
          </View>
          <View>
            <View style={styles.deCont}>
              <TouchableOpacity>
                <View style={styles.pic}>
                  <RNPickerSelect
                    placeholder={{
                      label: "Procedimento",
                      value: null,
                      color: "red",
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: "", value: "" },
                      { label: "", value: "" },
                    ]}
                    style={pickerSelectStyles}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* */}
        <View style={styles.cont}>
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <TouchableOpacity onPress={() => icone_nine()}>
              <MaterialCommunityIcons
                name={checkedNine ? "check" : "checkbox-blank-circle-outline"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>Convênio</Text>
          </View>
          <View>
            <View style={styles.deCont}>
              <TouchableOpacity>
                <View style={styles.pic}>
                  <RNPickerSelect
                    placeholder={{
                      label: "Convênio",
                      value: null,
                      color: "red",
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: "", value: "" },
                      { label: "", value: "" },
                    ]}
                    style={pickerSelectStyles}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* */}
        <View style={styles.cont}>
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            <TouchableOpacity onPress={() => icone_ten()}>
              <MaterialCommunityIcons
                name={checkedTen ? "check" : "checkbox-blank-circle-outline"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>Pendência</Text>
          </View>
          <View>
            <View style={styles.deCont}>
              <TouchableOpacity>
                <View style={styles.pic}>
                  <RNPickerSelect
                    placeholder={{
                      label: "Pendência",
                      value: null,
                      color: "red",
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: "", value: "" },
                      { label: "", value: "" },
                    ]}
                    style={pickerSelectStyles}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* */}
        <View style={[styles.cont, { justifyContent: "space-around" }]}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "3%",
            }}
          >
            <TouchableOpacity onPress={() => icone_eleven()}>
              <MaterialCommunityIcons
                name={checkedEleven ? "check" : "checkbox-blank-circle-outline"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>Cliente</Text>
            <View
              style={{
                width: width / 2.0,
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Main", { screen: "Cliente_pendencias" });
                }}
              >
                <MaterialCommunityIcons
                  name="subdirectory-arrow-right"
                  size={23}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.downTwo}>
              <Text numberOfLines={2} adjustsFontSizeToFit>
                Nome / razão social / nome fantasia
              </Text>
            </View>
          </View>
        </View>
        {/* */}
        <View style={[styles.cont, { justifyContent: "space-around" }]}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "3%",
            }}
          >
            <TouchableOpacity onPress={() => icone_twelve()}>
              <MaterialCommunityIcons
                name={checkedTwelve ? "check" : "checkbox-blank-circle-outline"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}>Produto</Text>
            <View
              style={{
                width: width / 2.0,
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Main", { screen: "Produto_pendencias" });
                }}
              >
                <MaterialCommunityIcons
                  name="subdirectory-arrow-right"
                  size={23}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.downTwo}>
              <Text numberOfLines={2} adjustsFontSizeToFit>
                Descrição do Produto
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  cont: {
    borderBottomWidth: 2,
    borderColor: "#3498db",
    width: width / 1.2,
    height: height / 6,
    justifyContent: "center",
  },
  deCont: {
    flexDirection: "row",
    //borderWidth: 3,
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: height / 10,
  },
  down: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    width: width / 3.0,
  },
  pic: {
    justifyContent: "center",
    alignItems: "center",
    width: width / 1.2,
  },
  contTwo: {
    borderBottomWidth: 2,
    borderColor: "#3498db",
    width: width / 1.2,
    height: height / 4.9,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "6%",
  },
  collumn: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    width: width / 1.2,
  },
  downTwo: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    width: width / 1.2,
    //borderWidth: 3,
    marginTop: "10%",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    //fontSize: 16,
    //color: 'black',
    //backgroundColor: "#fff",
    //color: "#000",
    //alignContent: "flex-start",
    //padding: "4%",
    //marginTop: "6%",
    //borderRadius: 10,
    //fontSize: 16,
  },
  inputAndroid: {
    //fontSize: 16,
    //color: 'black',
    //backgroundColor: "#fff",
    //color: "#000",
    //alignContent: "flex-start",
    //padding: "4%",
    //marginTop: "6%",
    //borderRadius: 10,
    //fontSize: 16,
  },
});
