// HomeScreen.js
// tela principal que aparece depois do login
// mostra botoes para navegar para as outras telas

import React from 'react'
// nao preciso de useState aqui pois nao tem campos para preencher

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }) {
  // navigation = objeto para navegar entre telas

  return (
    <View style={estilos.container}>

      <Text style={estilos.titulo}>Bem vinda!</Text>
      <Text style={estilos.subtitulo}>o que voce quer fazer?</Text>

      {/* botao para ir para a lista de produtos */}
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={estilos.botaoTexto}>ver produtos</Text>
      </TouchableOpacity>

      {/* botao para cadastrar produto */}
      {/* array de estilos combina dois estilos, o segundo sobrescreve a cor */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: 'green' }]}
        onPress={() => navigation.navigate('Create')}
      >
        <Text style={estilos.botaoTexto}>cadastrar produto</Text>
      </TouchableOpacity>

      {/* botao para sair, volta para o login */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: 'gray' }]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={estilos.botaoTexto}>sair</Text>
      </TouchableOpacity>

    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 14,          // espaco entre os botoes
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 15,
  },
})