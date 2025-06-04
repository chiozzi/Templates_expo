import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ex02() {
  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Image 
                style={styles.imagem} 
                source={require("../assets/images/projeto/icon.png")}
            />


            <Text style={styles.titulo}>Letícia</Text>
            <Text style={styles.subtitulo}>Desenvolvedora Web</Text>
            <Text style={styles.subtitulo}>| Front-end |</Text>


        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",  // centralizar 
    alignItems: "center",  //centralizar
    backgroundColor: "#B388EB", 
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5, 
    elevation: 5, // Sombras no Android
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: "50%",

  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitulo: {
    fontSize: 18,
    color: "#000",
    marginTop: 10,
    textAlign: "center",  // centralizar texto
  },
});
