import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ex01() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu App</Text>
      <Text style={styles.subtitulo}>Letícia Vitória</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A0E5E", 
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitulo: {
    fontSize: 18,
    color: "#f0f0f0",
    marginTop: 10,
  },
});
