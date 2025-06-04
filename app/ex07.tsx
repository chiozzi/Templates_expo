import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


// Definição explícita do tipo dos ícones
type AppItem = {
  id: string;
  nome: string;
  icone: keyof typeof Ionicons.glyphMap; // Essa linha corrige o erro
};

const apps: AppItem[] = [
  { id: "1", nome: "Sacola", icone: "bag-handle-outline" },
  { id: "2", nome: "Mensagens", icone: "chatbox-outline" },
  { id: "3", nome: "Gostei", icone: "heart-outline" },
  { id: "4", nome: "Promoções", icone: "pricetag-outline" },
  { id: "5", nome: "Estrela", icone: "star-outline" },
  { id: "6", nome: "Confugurações", icone: "settings-outline" },

];


export default function ex10() {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Aplicativos</Text>
        <FlatList
            data={apps}
            keyExtractor={(item) => item.id}
            numColumns={3}
            renderItem={({ item }) => (
            <TouchableOpacity style={styles.containerapp}>
                <View style={styles.containericone}>
                <Ionicons style={styles.icone} name={item.icone} />
                </View>
                <Text style={styles.texto}>{item.nome}</Text>
            </TouchableOpacity>
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",  // centralizar horizontal
    alignItems: "center",  //centralizar vertical
    backgroundColor: "#B388EB", // 4A0E5E    
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  containerapp: {
    alignItems: "center",
    margin: 15,
  },
  containericone: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: "#4A0E5E",
    alignItems: "center",
    justifyContent: "center",

  },
  icone: {
    fontSize: 40,
    color: '#fff'


  },
  texto: {
    marginTop: 5,
    fontSize: 14,
    color: "#1A1A1A",
    fontWeight: "bold",
  },
});
