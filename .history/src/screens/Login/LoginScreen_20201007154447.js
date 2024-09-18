import { Containers, Title, StyledView, Input } from '../../components/ui'
// Temas
import { useDarkMode } from './providers/DarkModeProvider'
import { darkTheme, lightTheme } from './theme'

import { getAll, setData, getData, clearAll, clearData } from '../../services/AsyncStorage'
import { TouchableOpacity } from 'react-native-gesture-handler'
// Componentes de páginas
import LoginScreen from './screens/Login'
import PesquisaScreen from './screens/Pesquisa'
import InicioScreen from './screens/Inicio'
import MenuScreen from './screens/Menu'
import ClientesScreen from './screens/Clientes'

const { width, height } = Dimensions.get("screen")
import temp from './screens/temp'

export default function LoginScreen({ navigation }) {

const Stack = createStackNavigator();
const RootTab = createMaterialBottomTabNavigator();



const RootTabNavigator = () => {
    const { darkMode } = useDarkMode()
    return (
        <View style={styles.container}>
            <View style={[styles.centerAlign, { height: "100%" }]}>  
                <Image source={require('../../../assets/img/logoWSGE.png')} style={styles.logo} resizeMode="contain"/> 
            </View> 
            <View style={[styles.centerAlign, { backgroundColor: "#363537", height: height }]}>
            <View style={styles.inputContainer}>
                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Sign In</Text>
                <View style={{ marginTop: 30, marginBottom: 10 }}>
                    <TextInput placeholder="Usuario" style={styles.input}/>
                    <TextInput secureTextEntry={true} placeholder="Senha" style={styles.input}/>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <CheckBox style={{ width: 20, height: 20, borderColor: "#aaa" }}/>
                    <Text style={{ marginLeft: 8}}>Lembrar senha</Text>

                <View style={{
                    flex: 1,
                    alignItems: "flex-end",        
                }}>
                <TouchableOpacity>
                    <Text style={{ color: "#000" }}>Esqueci senha</Text>
                </TouchableOpacity>
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
            <RootTab.Screen name="Tela0" component={PesquisaScreen} options={{
                tabBarIcon: ({ color }) => <Ionicons name="md-search" size={24} color={color} />
            }} />
            <RootTab.Screen name="Tela1" component={InicioScreen} options={{
                tabBarIcon: ({ color }) => <Ionicons name="md-home" size={24} color={color} />
            }} />
            <RootTab.Screen name="Tela4" component={MenuScreen} options={{
                tabBarIcon: ({ color }) => <Ionicons name="md-menu" size={24} color={color} />
            }} />
        </RootTab.Navigator>

    )
}

const MainStackNavigator = () => {
    const { darkMode } = useDarkMode()
    return(
        <Stack.Navigator screenOptions={{
            headerTintColor: darkMode ? darkTheme.text : lightTheme.text,
            headerStyle: {
                backgroundColor: darkMode ? darkTheme.nav : lightTheme.nav,
                shadowColor: darkMode ? darkTheme.nav : lightTheme.nav,
            },
        }}>
            <Stack.Screen name="ClientesScreen" component={ClientesScreen} options={{headerShown:false, title: "Clientes"}}/>
        </Stack.Navigator>
    )
}


                </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                <View>
                    <Button 
                        buttonStyle={{ 
                            width: width / 1.25, 
                            padding: 10, 
                            borderRadius: 20, 
                            backgroundColor: '#363537', 
                            alignItems: 'center'
                            }} 
                            title="Logar"  
                            onPress={() => navigation.replace('Home')} 
                        />
                </View>
            </View>
            </View>  
            </View>            
        </View>
const Routes = () => {
    const { darkMode } = useDarkMode()
    return (
        <>
            <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
                headerTintColor: darkMode ? darkTheme.text : lightTheme.text,
                headerStyle: {
                    backgroundColor: darkMode ? darkTheme.nav : lightTheme.nav,
                    shadowColor: darkMode ? darkTheme.nav : lightTheme.nav,
                },
                headerTitleStyle: { 
                    alignSelf: 'center' 
                },
            }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: "Login"}}/>
                <Stack.Screen name="Main" component={MainStackNavigator} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={RootTabNavigator} options={{
                    headerShown: false,
                }} />
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
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: height / 2.7,
        backgroundColor: "#363537",
    },
    centerAlign: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363537',
    },
    inputContainer: {
        padding: 20,
        marginTop: -height / 1.6,
        borderRadius: 20,
        width: width / 1.1,
        height: height / 2,
        backgroundColor: "rgba(255,255,255,1)",
    },
    logo: {
        width: width / 1.7,
        height: height / 3,
    },
    input: {
        borderWidth: 1.5,
        borderColor: "#aaa",
        borderRadius: 30,
        width: width / 1.2,
        height: height / 15.0,
        marginVertical: 15,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
    },
})
export default Routes