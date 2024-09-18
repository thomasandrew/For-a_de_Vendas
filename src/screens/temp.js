import { StatusBar } from '../components/StatusBar';
import PropTypes from 'prop-types'

import React, {useRef,useState} from 'react';
import {  ScrollView, Dimensions, Alert,  } from 'react-native';


import { Container, Button, Title, StyledView, Input, Text, View, Card, Screen } from '../components/ui'

export default function temp({navigation}) {
  const sliderRef = useRef()

  let currentSlide = 0
  let sliderInterval = setInterval(() => {
    handleSlider(4)
  }, 6000)

  const handleSlider = (max) => {
    const { width } = Dimensions.get('window')
    if (currentSlide === max - 1) {
      currentSlide = 0
    } else {
      currentSlide += 1
    }
    sliderRef.current.scrollTo({ x: width * currentSlide, y: 0, animated: true })
  }

  navigation.addListener('beforeRemove', (e) => {
    clearInterval(sliderInterval)
  })

  return (
    <Screen>
    <Container>
      <Title>Teste</Title>
      <Text>Página temp</Text>
      <Button title="Styled Button" onPress={() => alert("Click")} />
      <StyledView>
        <Text>Exemplo</Text>
      </StyledView>

      <ScrollView
        ref={sliderRef}
        horizontal
        style={{marginHorizontal:-20,marginVertical:10}}
        scrollEventThrottle={200}
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={()=>clearInterval(sliderInterval)}
        pagingEnabled={true}
        >
        <Card style={{padding:20,width:Dimensions.get('window').width - 40, height:Dimensions.get('window').width -40, marginHorizontal:20, borderRadius: 10, flex: 1, elevation:26}}>
          <Text>Exemplo 1</Text>
        </Card>
        <Card style={{padding:20,width:Dimensions.get('window').width - 40, height:Dimensions.get('window').width -40, marginHorizontal:20, borderRadius: 10, flex: 1, elevation:26}}>
          <Text>Exemplo 2</Text>
        </Card>
        <Card style={{padding:20,width:Dimensions.get('window').width - 40, height:Dimensions.get('window').width -40, marginHorizontal:20, borderRadius: 10, flex: 1, elevation:26}}>
          <Text>Exemplo 3</Text>
        </Card>
        <Card style={{padding:20,width:Dimensions.get('window').width - 40, height:Dimensions.get('window').width -40, marginHorizontal:20, borderRadius: 10, flex: 1, elevation:26}}>
          <Text>Exemplo 4</Text>
        </Card>
      </ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <Input
          placeholder="Place"
        //value={"Teste"}
        />
        <Button title="+" onPress={handleSlider} />
        <Button title="pausa" onPress={()=>clearInterval(sliderInterval)} />
      </View>
      <Text>p</Text>
      <Text>p</Text>
      <Text>p</Text>
      <Text>p</Text>
      <Text>p</Text>
      <Text>p</Text>
      <Text>p</Text>
      <Text>p</Text>
      <Text>p</Text>
      <Text>p</Text>
      <Text>p</Text>
      <Text>p</Text>
      <StatusBar style="auto" />
    </Container>
    </Screen>
  );
}
