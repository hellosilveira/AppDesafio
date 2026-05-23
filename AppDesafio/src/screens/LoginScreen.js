// LoginScreen.js
// primeira tela do app
// o usuario digita email e senha para entrar
// os dados sao simulados, nao tem servidor real

import React, { useState } from 'react'
// useState = hook que cria variaveis que atualizam a tela automaticamente quando mudam

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
// View = container, como uma div no HTML
// Text = exibe texto na tela
// TextInput = campo de texto para o usuario digitar
// TouchableOpacity = botao que reage ao toque
// StyleSheet = onde ficam os estilos, funciona como CSS
// Alert = mostra um popup na tela

export default function LoginScreen({ navigation }) {
  // navigation = objeto que permite navegar para outras telas

  // crio variaveis para guardar o que o usuario digita
  // useState('') = começa com valor vazio
  const [email, setEmail] = useState('')  // guarda o email digitado
  const [senha, setSenha] = useState('')  // guarda a senha digitada

  // funcao chamada quando o botao Entrar é pressionado
  function entrar() {

    // verifica se algum campo esta vazio
    if (email == '' || senha == '') {
      Alert.alert('Atencao', 'preencha os campos')
      return // para a funcao aqui se estiver vazio
    }

    // verifica se email e senha estao corretos
    // dados simulados, em um app real viria de uma API
    if (email == 'heloize@email.com' && senha == '123456') {
      navigation.navigate('Home') // leva para a tela Home
    } else {
      Alert.alert('Erro', 'email ou senha errado')
    }
  }

  // o return é tudo que aparece na tela
  return (
    <View style={estilos.container}>

      {/* titulo do app */}
      <Text style={estilos.titulo}>App Produtos</Text>

      {/* campo de email */}
      <Text>Email</Text>
      <TextInput
        style={estilos.input}
        placeholder="email"
        value={email}             // mostra o valor atual da variavel
        onChangeText={setEmail}   // atualiza a variavel a cada letra digitada
        autoCapitalize="none"     // nao coloca letra maiuscula automatica
      />

      {/* campo de senha */}
      <Text>Senha</Text>
      <TextInput
        style={estilos.input}
        placeholder="senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}    // esconde os caracteres da senha
      />

      {/* botao de entrar */}
      <TouchableOpacity style={estilos.botao} onPress={entrar}>
        <Text style={estilos.botaoTexto}>Entrar</Text>
      </TouchableOpacity>

      {/* dica para facilitar os testes */}
      <Text style={estilos.dica}>use: heloize@email.com / 123456</Text>

    </View>
  )
}

// estilos da tela, funciona igual ao CSS
const estilos = StyleSheet.create({
  container: {
    flex: 1,                  // ocupa a tela toda
    padding: 20,
    justifyContent: 'center', // centraliza tudo verticalmente
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,           // borda ao redor do campo
    borderColor: '#ccc',
    borderRadius: 6,          // cantos arredondados
    padding: 10,
    marginTop: 6,
    marginBottom: 16,
    fontSize: 15,
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',     // centraliza o texto dentro do botao
    marginTop: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
  },
  dica: {
    marginTop: 16,
    color: '#aaa',
    textAlign: 'center',
    fontSize: 12,
  },
})