import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios';
import { StyleSheet } from 'react-native';
 
export default function About() {
  const [contatos, setContatos] = useState([]);
 
  // função para buscar contatos do servidor
  const listContatos = () =>{
    axios
    .get('http://10.0.2.2:3000/contatos')
    .then((response) => {
      setContatos(response.data)
    })
    .catch((error) => {
      console.error("Erro ao buscar contatos", error)
    });
  };
 
  useEffect(() =>{
    listContatos();
  }, [])
  return (
    <View>
        <Text>Lista de contatos</Text>
        {contatos.length > 0 ?(
          contatos.map((contato, index) =>(
            <View>
              <Text>{contato.nome}</Text>
              <Text>{contato.telephone}</Text>
              <Text>------------------------</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noContacts}>Nenhum contato disponível</Text>
        )}
    </View>
  )
}
 
const styles = StyleSheet.create({
  constainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contatoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  noContacts: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
});