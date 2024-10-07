import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Card from '../Components/Card';

export default function Home() {
    const navigation = useNavigation();
  return (
   <View style={styles.container}>
     <Text style={styles.tituloContato}>Seja Bem-Vindo</Text> 
     <Card
     title="Sobre"
     content="Saiba mais sobre nós e nossos serviços"
     buttonText="Ir para Sobre"
     onPress={() => navigation.navigate('Sobre')}
     
     /> 
      <Text style={styles.tituloInfo}>Mais Infos</Text>
      <Card
     title="Contato"
     content="Clique abaixo para saber mais sobres os nossos contatos"
     buttonText="Ir para Sobre"
     onPress={() => navigation.navigate('Sobre')}
     
     /> 
      <Text style={styles.tituloInfo}>Nossos Produtos</Text>
      <Card
     title="Produtos"
     content="Clique abaixo para saber mais sobres os nossos produtos"
     buttonText="Ir para Produtos"
     onPress={() => navigation.navigate('Produtos')}
     
     /> 
     {/* <Button
     title = "Ir para Contato"
     onPress={() => navigation.navigate('Contato')}
     
     /> */}

    
   </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:20,
        justifyContent:"center"
    },
    tituloContato:{
    justifyContent:"center",
    fontWeight:"bold",
    marginBottom:20

    },
    tituloInfo:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:20,
        textAlign:"center"
    }
})
