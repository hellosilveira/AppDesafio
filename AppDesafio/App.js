// App.js
// arquivo principal do app
// importa todas as telas e configura a navegacao

import React from 'react'

// NavigationContainer = envolve todo o app para a navegacao funcionar
import { NavigationContainer } from '@react-navigation/native'

// createNativeStackNavigator = cria a navegacao em pilha
// pilha = cada tela nova vai em cima da anterior
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// importo cada tela que criei
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import ListScreen from './src/screens/ListScreen'
import CreateScreen from './src/screens/CreateScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // NavigationContainer precisa envolver tudo
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"               // primeira tela que abre
        screenOptions={{ headerShown: false }}  // esconde o cabecalho padrao
      >
        {/* registro cada tela com um nome */}
        {/* esse name é o que uso no navigation.navigate() */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}