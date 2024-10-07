import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={estilos.topo}>
      <Text style={estilos.tituloHeader}>InfoSass</Text>
    </View>
  );
}
const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 120,
    backgroundColor:"#FF0000",
  },
  tituloHeader: {
    width: "100%",
    textAlign: "center",
    color: "white",
    paddingTop: 60,
    fontWeight: "bold",
    fontSize: 20,
  },
});
