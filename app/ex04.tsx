import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";

const produtos = [
  { id: "1", nome: "Tube Top", preco: "R$49,99", imagem: require("../assets/images/projeto/tubetops.jpeg") },
  { id: "2", nome: "Wide Leg", preco: "R$79,99", imagem: require("../assets/images/projeto/calcas.jpeg") },
  { id: "3", nome: "Camisa", preco: "R$59,99", imagem: require("../assets/images/projeto/camisas.jpeg") },
  { id: "4", nome: "Saia", preco: "R$45,99", imagem: require("../assets/images/projeto/saias.jpeg") },
  { id: "5", nome: "Regata", preco: "R$39,99", imagem: require("../assets/images/projeto/regatas.jpeg") },
  { id: "6", nome: "Moletom", preco: "R$89,99", imagem: require("../assets/images/projeto/moletom.jpeg") },
  { id: "7", nome: "Blusa", preco: "R$42,99", imagem: require("../assets/images/projeto/blusinhas.jpeg") },
];

export default function ex04() {
  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.imagem} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A0E5E",
    padding: 10,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#7D4F9E",
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    marginBottom: 15,
    width: "100%",
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  nome: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  preco: {
    color: "#fff",
    fontSize: 16,
  },
});
