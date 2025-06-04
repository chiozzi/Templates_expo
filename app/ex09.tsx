import React from "react";
import { StyleSheet, Text, View, FlatList, Image, ImageSourcePropType } from "react-native";


// Definindo o tipo para Post
type Post = {
  id: string;
  nome: string;
  icon: ImageSourcePropType;
  imagem: string;
  descricao: string;
};

// Array de Posts com dados de exemplo
const posts: Post[] = [
  {
    id: "1",
    nome: "Letícia Vitória",
    icon: require("../assets/images/projeto/icon.png"),
    imagem: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    descricao: "Aproveitando o fim de semana com a família!",
  },
  {
    id: "2",
    nome: "Bruno Sai",
    icon: require("../assets/images/projeto/icon2.jpg"),
    imagem: "https://www.w3schools.com/w3images/fjords.jpg",
    descricao: "Uma tarde incrível em um lugar maravilhoso!",
  },
  {
    id: "3",
    nome: "Ana Carolina",
    icon: require("../assets/images/projeto/icon3.jpg"),
    imagem: "https://www.w3schools.com/w3images/forest.jpg",
    descricao: "Conectando-se com a natureza. Muito bom!",
  },
  
  
];


export default function ex09() {
    const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.containerpost}>
      {/* Foto do Usuário */}
      <View style={styles.infouser}>
        <Image source={item.icon } style={styles.icon} />
        <Text style={styles.nome}>{item.nome}</Text>
      </View>
      
      {/* Imagem do Post */}
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      
      {/* Descrição do Post */}
      <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
  );
   return (
    <View style={styles.container}>
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7D4F9E",
    padding: 10,
    flex: 1,
  },

  containerpost: {
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 15,
    padding: 10,
    marginBottom: 30,
    
  },
  
  infouser: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 20,
    
    
  },
  nome:{
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
  imagem: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },

  descricao: {
    color: '#949494',
    fontSize: 14,
    textAlign: "center"


  },
});
