import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import { Text, View } from "react-native";
export default function InfoJson() {
  const [perguntas, setPerguntas] = useState([]);
  //buscar Perguntas e respostas no servidor (API)   
  const Perguntas = () => {
    axios
      .get("http://10.0.2.2:3000/faq")
      .then((reponse) => {
        setPerguntas(reponse.data);
      })
      .catch((error) => {
        console.log("deu erro :/", error);
      });
  };

  useEffect(() => {
    Perguntas();
  }, []);

  return (
    <View>
      <Text>Informações Sobre o Json</Text>
      {perguntas.length >0 ?(
        perguntas.map((pergunta, index) =>(
          <View>
              <Text>{pergunta.pergunta}</Text>
              <Text>{pergunta.resposta}</Text>
              <Text>------------------------</Text>
            </View>
        )) 
      ) : (
        <Text>Erro ao buscar as Informações</Text>
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