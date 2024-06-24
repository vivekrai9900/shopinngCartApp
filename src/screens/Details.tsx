import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'

import {NativeStackNavigationProp} from '@react-navigation/native-stack'


type DetailsProp= NativeStackScreenProps<RootStackParamList,'Details'>



const Details = ({route}: DetailsProp) => {

  const {productId}=route.params

 const navigation=  useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.constiner}>
      <Text style={styles.smallText}>Details screen of {productId}</Text>

      <Button
      title='Go to home'
      // onPress={()=>navigation.navigate('Home')}
      onPress={()=>navigation.popToTop()}

      />
        
      
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    constiner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    smallText:{
        color:'#000000'
    }
})