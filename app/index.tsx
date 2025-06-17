import { Link } from "expo-router";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.botaolink}>
        <Link style={styles.link} href="/ex01">Layout Básico</Link>
      </View>
      <View style={styles.botaolink}>
        <Link style={styles.link} href="/ex02">Cartão de Perfil</Link>
      </View>
      <View style={styles.botaolink}>
        <Link style={styles.link} href="/ex03">Botão</Link>
      </View>
      <View style={styles.botaolink}>
        <Link style={styles.link} href="/ex04">Lista de Produtos</Link>
      </View>
      <View style={styles.botaolink}>
        <Link style={styles.link} href="/ex05">Login</Link>
      </View>
      <View style={styles.botaolink}>
        <Link style={styles.link} href="/ex06">ScrollView</Link>
      </View>
      <View style={styles.botaolink}>
        <Link style={styles.link} href="/ex07">Ícones Apps</Link>
      </View>
      <View style={styles.botaolink}>
        <Link style={styles.link} href="/ex08">Perfil</Link>
      </View>
      <View style={styles.botaolink}>
        <Link style={styles.link} href="/ex09">Feed</Link>
      </View>
      <View style={styles.botaolink}>
        <Link style={styles.link} href="/ex10">Configurações</Link>
      </View>
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
  botaolink: {
    width: "65%",
    height: "auto",
    backgroundColor: "#6A1B9A",
    borderRadius: 15,
    padding: 5,
    marginVertical: 10,
    alignItems: "center",
    
  },
  link: {
    fontSize: 18,
    color: "#f0f0f0",
  },
});

