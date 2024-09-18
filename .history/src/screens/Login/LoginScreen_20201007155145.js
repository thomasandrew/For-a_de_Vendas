import { View, Dimensions, StyleSheet, Image, Text, TextInput, CheckBox } from 'react-native'
import { StatusBar }from '../../components/StatusBar'
import styled from 'styled-components'
import { Button } from 'react-native-elements';

import { Container, Button, Title, StyledView, Input } from '../../components/ui'

import { getAll, setData, getData, clearAll, clearData } from '../../services/AsyncStorage'
import { TouchableOpacity } from 'react-native-gesture-handler'
 export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={[styles.centerAlign, { height: "100%" }]}>  
                <Image source={require('../../../assets/img/logoWSGE_cinza.png')} style={styles.logo} resizeMode="contain"/> 
                <Image source={require('../../../assets/img/logoWSGE.png')} style={styles.logo} resizeMode="contain"/> 
            </View> 
            <View style={[styles.centerAlign, {marginTop: 2, backgroundColor: "rgba(210,210,210,0.9)", height: height }]}>
            <View style={[styles.centerAlign, { backgroundColor: "#363537", height: height }]}>
            <View style={styles.inputContainer}>
                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Sign In</Text>
                <View style={{ marginTop: 30, marginBottom: 10 }}>
                    <TextInput placeholder="Usuario" style={styles.input}/>
                    <TextInput secureTextEntry={true} placeholder="Senha" style={styles.input}/>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <CheckBox style={{ width: 20, heihgt: 20, borderColor: "#aaa" }}/>
                    <Text style={{ marginLeft: 8 }}>Lembrar senha</Text>
                </View>
                <View style={{
                    flex: 0.5,
                    alignItems: "flex-end",      
                }}>
                <TouchableOpacity>
                    <Text style={{ color: "#c08" }}>Esqueci senha</Text>
                </TouchableOpacity>

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
@@ -47,11 +64,12 @@ const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: height / 2.7,
        backgroundColor: "#000",
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