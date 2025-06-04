import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function ex05() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Tendências da Moda 2025</Text>

      <View style={styles.bloco}>
        <Text style={styles.texto}>
            👗 Em 2025, o conforto continua sendo prioridade na moda. Peças como moletons estilosos, conjuntos de alfaiataria em tecidos leves e roupas oversized dominam as ruas.
        </Text>
        <Image   
        style={styles.imagem}              
        source={{ uri: "https://placehold.co/300" }} // Imagem de avatar aleatória
        />
      </View>

      <View style={styles.bloco}>
        <Text style={styles.texto}>
            🌈 Cores vibrantes estão em alta. Roxo, laranja, verde-limão e azul elétrico são as apostas da temporada para quem quer se destacar.        
        </Text>
        <Image   
        style={styles.imagem}              
        source={{ uri: "https://placehold.co/300" }} // Imagem de avatar aleatória
        />
      </View>

      <View style={styles.bloco}>
        <Text style={styles.texto}>
            🌿 Sustentabilidade é mais que tendência — é compromisso. Marcas investem em tecidos reciclados, processos ecológicos e produções locais.
        </Text>
        <Image   
        style={styles.imagem}              
        source={{ uri: "https://placehold.co/300" }} // Imagem de avatar aleatória
        />
      </View>

     <View style={styles.bloco}>
        <Text style={styles.texto}>
            ✨ Brilhos e texturas metálicas ganham espaço nas festas. Roupas com paetês, tecidos acetinados e detalhes metalizados são escolhas certeiras para a noite.
        </Text>
        <Image   
        style={styles.imagem}              
        source={{ uri: "https://placehold.co/300" }} // Imagem de avatar aleatória
        />
      </View>

      <View style={styles.bloco}>
        <Text style={styles.texto}>
            📱 Moda digital se expande com força. Roupas virtuais, desfiles em realidade aumentada e filtros de estilo são parte do novo universo fashion.
        </Text>
        <Image   
        style={styles.imagem}              
        source={{ uri: "https://placehold.co/300" }} // Imagem de avatar aleatória
        />
      </View>



        <Text style={styles.rodape}>Fim da exploração</Text>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A0E5E", 
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  bloco: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    padding: 12,
    marginBottom: 15,
    alignSelf: 'center',
    width: "95%",
    height: "auto",

    
  },
  texto: {
    color: "#333",
    marginBottom: 10,
    fontSize: 18

  },
  imagem: {
    width: "100%",
    height: 150,
    borderRadius: 15,
  },
  rodape: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#949494",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "center", // centraliza o Text
    }

});
