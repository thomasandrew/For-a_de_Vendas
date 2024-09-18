import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, VirtualizedList, ScrollView, TouchableOpacity, Vibration } from 'react-native'
import { StatusBar } from '../../components/StatusBar';

import { Container, Button, Text, Title, StyledView, Input, Card, Fab, BottomSheetModal, ListItem } from '../../components/ui'

import SectionList, { ListItemContainer } from '../../components/SectionList/SectionList'
import Header from '../../components/Header/Header'

import { Ionicons } from '@expo/vector-icons'


//import { LargeList } from "react-native-largelist";



export default function ClientesScreen({ navigation, route }) {
    const sectionRef = useRef()
    const [totalClientes, setTotalClientes] = useState(0)
    const [listaClientes, setListaClientes] = useState([
        {
            title: "#",
            data: [
                { name: "100 POR CENTO DROGARIA", trade: "A.DE MARTINO DROGARIA DE QUEIMADOS", address: "CENTRO DE JAPERI, JAPERI - RJ", phone: "(21) 2670-2873" },
                { name: "3 B COMERCIAL EIRELI", trade: "3 B COMERCIAL EIRELI", address: "INFLUENCIA, CARMO - RJ", phone: "(21) 2537-4186" },
            ],
        },
        {
            title: "A",
            data: [
                { name: "A SUA FARMACIA E VOCE", trade: "A SUA FARMACIA DA FREGUESIA LTDA", address: "REGUESIA JACAREPAGUÁ, RIO DE JANEIRO - RJ", phone: "(21) 2568-8792" },
                { name: "A SUA FARMACIA E VOCE", trade: "A SUA FARMACIA DA FREGUESIA LTDA", address: "TAQUARA, RIO DE JANEIRO - RJ", phone: "(21) 2568-8792" },
                { name: "ALCANTARA MEDICAMENTOS LTDA", trade: "ALCANTARA MEDICAMENTOS LTDA", address: "KM32, NOVA IGUAÇU - RJ", phone: "--" },
                { name: "ALF COMERCIAL", trade: "ALF DO NASCIMENTO DISTRIBUIDORA DE PRO. DE HIGIENE", address: "VICENTE CARVALHO, RIO DE JANEIRO - RJ", phone: "(21) 3352-6835" },
                { name: "AMERICAS FARMA", trade: "AMERICAS FARMA", address: "VARGEM PEQUENA, RIO DE JANEIRO - RJ", phone: "(21) 2428-3206" },
                { name: "AMIGAOZAO", trade: "AMIGAOZAO MERCADO LTDA", address: "JARDIM PRIMAVERA, DUQUE DE CAXIAS - RJ", phone: "--" },
            ]
        },
        {
            title: "B",
            data: [
                { name: "BANDEIRANTES FARMA", trade: "LIDER DA CURICICA DROGARIA E PERFUMARIA LTDA", address: "JACAREPAGUÁ, RIO DE JANEIRO - RJ", phone: "(21) 3256-5853" },
                { name: "BARA COMERCIO DE MEDICAMENTOS LTDA", trade: "BARA COMERCIO DE MEDICAMENTOS LTDA", address: "CENTRO, RIO DE JANEIRO - RJ", phone: "(21) 3173-4660" },
                { name: "BIG FARMA", trade: "TDM FARMACIA LTDA", address: "VILA SÃO JOÃO, SÃO JOÃO DE MERITI - RJ", phone: "(21) 3755-9261" },
                { name: "BOA SAUDE", trade: "FARMACIA JARDIM SUMARE LTDA", address: "JARDIM SUMARE, SAO JOÃO DE MERITI - RJ", phone: "(21) 2751-6440" },
            ],
        },
        {
            title: "C",
            data: ["Cheese Cake", "Ice Cream", "Cheese Cake", "Ice Cream", "Cheese Cake", "Ice Cream", "Cheese Cake", "Ice Cream", "Cheese Cake", "Ice Cream", "Ice Cream", "Cheese Cake", "Ice Cream", "Ice Cream", "Cheese Cake", "Ice Cream",],
        },
        { title: "D", data: ["Teste"] },
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
            data: ["Cheese Cake", "Ice Cream", "Cheese Cake", "Ice Cream", "Cheese Cake", "Ice Cream", "Cheese Cake", "Ice Cream", "Cheese Cake", "Ice Cream", "Ice Cream", "Cheese Cake", "Ice Cream", "Ice Cream", "Cheese Cake", "Ice Cream", "Cheese Cake", "Ice Cream",]
        },
    ])
    const [showBottomSheetModal, setShowBottomSheetModal] = useState(false)

    const listaClientesGerada = []
    useEffect(() => {
        for (let i = 0; i < 100; i++) {
            listaClientesGerada.push({ id: i, nome: `Teste ${i}` },)
        }
    }, [])


    const handleSection = (index) => {
        sectionRef.current.scrollToLocation({ sectionIndex: index, itemIndex: 0 })
    }



    return (
        <Container full>
            <Header
                navigation={navigation}
                title="Clientes"
                transparent
                style={{ margin: -20, marginBottom: 20 }}
            />
            <Text>Total de Clientes: {totalClientes}</Text>
            <Text></Text>
            <SectionList
                sections={listaClientes}
                total={qtd => setTotalClientes(qtd)}
                renderItem={({ item }) =>
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
                            setShowBottomSheetModal(true)
                            Vibration.vibrate(50)
                            //alert(`Ligar para ${item.phone}`)
                        }}
                    >
                        <Card>
                            <Text>{item.name}</Text>
                            <Text style={{ opacity: 0.5, fontSize: 12, marginBottom: 10 }}>{item.trade}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="md-map" size={16} color={'silver'} />
                                <Text style={{ opacity: 0.5, fontSize: 12, marginLeft: 10 }}>{item.address}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="md-call" size={16} color={'silver'} />
                                <Text style={{ opacity: 0.5, fontSize: 12, marginLeft: 10 }}>{item.phone}</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                    // </ListItemContainer>
                }
                fabMargin
                style={{ flex: 1, marginHorizontal: -20 }}
            />
            <Fab onPress={() => navigation.navigate("Main", { screen: "AddClientes" })} />

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
    )
}
