import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'

type HomeProp = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProp) => {
  
  return (
    <View style={styles.constiner}>
      <Text style={styles.smallText}>Home Screen</Text>

      <Button 
      title='Go to details'
      onPress={()=> navigation.push("Details",{productId:"55"})}
      />

      
    </View>
  )
}

export default Home

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