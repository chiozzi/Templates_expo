import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ex03() {
  return (
    <View style={styles.container}>
        <Pressable style={({ pressed }) => [styles.botao, pressed && styles.botaoapertado]}>
            <Text style={styles.textobotao}>Isso é um botão</Text>
        </Pressable>
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
  botao: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 250,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Efeito de sombra no Android



  },
  textobotao: {
    color : '#000',
    textAlign: "center",

  },
  botaoapertado:{
    opacity: 0.7, // Efeito ao pressionar
  }

});
