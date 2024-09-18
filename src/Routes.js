import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// Temas
import { useDarkMode } from "./providers/DarkModeProvider";
import { darkTheme, lightTheme } from "./theme";

// Componentes de páginas
import LoginScreen from "./screens/Login";
import PesquisaScreen from "./screens/Pesquisa";
import InicioScreen from "./screens/Inicio";
import MenuScreen from "./screens/Menu";
import ClientesScreen from "./screens/Clientes";
import AddClientes from "./screens/Clientes/AddClientes";
import CadContato from "./screens/Contato/CadContato";
import Sobre_JD from "./screens/Sobre_JD";
import Atualizacao_dados from "./screens/Atualizacao_dados/Atualizacao_dados";
import Produto from "./screens/Produto/Consulta_produto";
import Consulta_contatos from "./screens/Contato/Consulta_contatos";
import Pedidos from "./screens/Pedidos/Consulta_pedidos";
import Backup from "./screens/Envia_backup/enviar_backup";
import cirurgias from "./screens/controle_cirurgias/controle_de_cirurgia";
import Cirurgia_Pendencia from "./screens/controle_cirurgias/Pendencia";
import Form_Pendencia from "./screens/controle_cirurgias/Form_Pendencias";
import Cliente_pendencias from "./screens/controle_cirurgias/Cliente_pendencias";
import Produto_pendencias from "./screens/controle_cirurgias/Produto_pendencia";
import Consulta_agenda from "./screens/Agenda/Consulta_agenda"

import temp from "./screens/temp";

const Stack = createStackNavigator();
const RootTab = createMaterialBottomTabNavigator();

const RootTabNavigator = () => {
  const { darkMode } = useDarkMode();
  return (
    <RootTab.Navigator
      initialRouteName="Tela1"
      activeColor="#167fc2"
      inactiveColor="#777"
      keyboardHidesNavigationBar={true}
      labeled={false}
      barStyle={{
        backgroundColor: darkMode ? darkTheme.nav : lightTheme.nav,
        elevation: 0,
        shadowOpacity: 0,
      }}
    >
      <RootTab.Screen
        name="Tela0"
        component={Sobre_JD}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <RootTab.Screen
        name="Tela1"
        component={InicioScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" size={24} color={color} />
          ),
        }}
      />
      <RootTab.Screen
        name="Tela4"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-menu" size={24} color={color} />
          ),
        }}
      />
    </RootTab.Navigator>
  );
};

const MainStackNavigator = () => {
  const { darkMode } = useDarkMode();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: darkMode ? darkTheme.text : lightTheme.text,
        headerStyle: {
          backgroundColor: darkMode ? darkTheme.nav : lightTheme.nav,
          shadowColor: darkMode ? darkTheme.nav : lightTheme.nav,
        },
      }}
    >
      <Stack.Screen
        name="ClientesScreen"
        component={ClientesScreen}
        options={{ headerShown: false, title: "Clientes" }}
      />
      <Stack.Screen
        name="AddClientes"
        component={AddClientes}
        options={{ headerShown: false, title: "Adicionar Clientes" }}
      />
      <Stack.Screen
        name="CadContato"
        component={CadContato}
        options={{ headerShown: false, title: "Cadastro de contato" }}
      />
      <Stack.Screen
        name="Sobre_JD"
        component={Sobre_JD}
        options={{ headerShown: false, title: "Informações obre a JD System" }}
      />
      <Stack.Screen
        name="Atualizacao_dados"
        component={Atualizacao_dados}
        options={{ headerShown: false, title: "Atualização de dados" }}
      />
      <Stack.Screen
        name="Consulta_produto"
        component={Produto}
        options={{ headerShown: false, title: "Consulta produtos" }}
      />
      <Stack.Screen
        name="Consulta_contatos"
        component={Consulta_contatos}
        options={{ headerShown: false, title: "Consulta contatos" }}
      />
      <Stack.Screen
        name="Consulta_pedidos"
        component={Pedidos}
        options={{ headerShown: false, title: "Consulta Pedidos" }}
      />
      <Stack.Screen
        name="enviar_backup"
        component={Backup}
        options={{ headerShown: false, title: "Enviar Backup" }}
      />
      <Stack.Screen
        name="controle_de_cirurgia"
        component={cirurgias}
        options={{ headerShown: false, title: "Controle de Cirurgia" }}
      />
      <Stack.Screen
        name="consulta_pendencias"
        component={Cirurgia_Pendencia}
        options={{ headerShown: false, title: "Consulta Pendências" }}
      />
      <Stack.Screen
        name="Form_Pendencias"
        component={Form_Pendencia}
        options={{ headerShown: false, title: "Consulta Pendências" }}
      />
      <Stack.Screen
        name="Cliente_pendencias"
        component={Cliente_pendencias}
        options={{ headerShown: false, title: "Consulta Pendências" }}
      />
      <Stack.Screen
        name="Produto_pendencias"
        component={Produto_pendencias}
        options={{ headerShown: false, title: "Consulta Pendências" }}
      />
      <Stack.Screen
        name="Consulta_agenda"
        component={Consulta_agenda}
        options={{ headerShown: false, title: "Consulta de Agendamentos" }}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerTintColor: darkMode ? darkTheme.text : lightTheme.text,
          headerStyle: {
            backgroundColor: darkMode ? darkTheme.nav : lightTheme.nav,
            shadowColor: darkMode ? darkTheme.nav : lightTheme.nav,
          },
          headerTitleStyle: {
            alignSelf: "center",
          },
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Main"
          component={MainStackNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={RootTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen name="Home" component={temp}
                    options={{
                        //headerShown: false,
                        title: 'My home',
                        // headerStyle: {
                        //     backgroundColor: '#f4511e',
                        // },
                    }}
                /> */}
      </Stack.Navigator>
    </>
  );
};

export default Routes;
