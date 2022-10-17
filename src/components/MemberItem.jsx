import React from 'react'
import {View, Text} from 'react-native'

const memberItem = (props) => {
  return (
    <View key={props.id} style={{padding: 20, }}>
    <Text style={{fontWeight: 'bold',textColor:'blue'}}>Nombre: {props.name}</Text>
    <Text style={{fontStyle:'italic'}}>Alias: {props.alias}</Text>
    <Text>Edad: {props.age}</Text>
  </View>
  )
}

export default memberItem;