import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function ex10() {
  return (
    <ScrollView style={styles.container}>
        <Image
        style={styles.imagemcapa}
        source={require("../assets/images/projeto/capa.webp")}
        />

        <View style={styles.containerperfil}>
            <Image
            style={styles.imagemperfil}
            source={require("../assets/images/projeto/icon.png")}
            />
        </View>

        <View>
            <Text style={styles.nome}>Letícia Vitória</Text>
        </View>

        <View>
            <Text style={styles.bio}>Desenvolvedora Web</Text>
            <Text style={styles.bio}>| Front-end |</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.containersecao}>
            <View style={styles.secao}>
                <Text style={styles.titulo}>Meus posts</Text>
                <Text style={styles.descricao}>12 posts</Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.titulo}>Seguidores</Text>
                <Text style={styles.descricao}>2 seguidores</Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.titulo}>Seguindo</Text>
                <Text style={styles.descricao}>2 seguindo</Text>
            </View>
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  imagemcapa: {
    width: "100%",
    height: 250,
    resizeMode: "cover",    
  },
  containerperfil: {
    position: "absolute",
    top: 150,
    left: 20,
    alignItems: "center",
    zIndex: 1, // Garantir que a imagem de perfil tenha um índice maior para aparecer sobre a capa
  },
  imagemperfil: {
    width: 100,
    height: 100,
    borderRadius: "50%", 
    borderWidth: 4,
    borderColor: "#7D4F9E"   
    
  },
  
  nome: {
    fontSize: 24,
    paddingLeft: 20,
    paddingTop: 10,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 0,
  },
  bio: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 5,
    color: "#949494",
  },

  divisor: {
    borderBottomWidth: 1,
    borderBottomColor: "#949494",
    marginVertical: 20,
    marginHorizontal: 20,
  },

  containersecao: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  secao: {
    alignItems: "center",

  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  descricao: {
    fontSize: 14,
    color: "#949494"
  },

});
