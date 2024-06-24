// import { View, Text } from 'react-native'
import React from 'react'

//Navigation

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//screens

import Home from './screens/Home'
import Details from './screens/Details'


 export type RootStackParamList = {
  Home: undefined;
  Details: {productId : string};
};


const stack = createNativeStackNavigator<RootStackParamList>()



const App = () => {
  return (
   <NavigationContainer>
    <stack.Navigator initialRouteName='Home'>
     <stack.Screen 
     name='Home'
     component={Home}
     options={{
      title:'Treanding Products'
     }
     }
     />

<stack.Screen 
     name='Details'
     component={Details}
     options={{
      title:'Products Details'
     }
     }
     />
    </stack.Navigator>
   </NavigationContainer>
  )
}

export default App