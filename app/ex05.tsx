import React from "react";
import { StyleSheet, Text, TextInput, Pressable, View } from "react-native";

export default function ex05() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
        <TextInput
        style={styles.campo}
        placeholder="E-mail"
        keyboardType="email-address"    
        />
        <TextInput
        style={styles.campo}
        placeholder="Senha"
        secureTextEntry
        />

        <Pressable style={styles.botao} >
            <Text style={styles.textobotao}>Entrar</Text>
        </Pressable>

            <Text style={styles.esquecisenha}>Esqueci minha senha</Text>
            
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
    fontWeight: 'bold',
    fontSize: 24,
    color: "#fff",
    marginBottom: 30
  },
  campo: {
    justifyContent: "center",
    alignItems: "center",
    width: '80%',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    height: 40,
    borderColor: '#000',
    padding: 15
  },

  botao: {
    borderRadius: 10,
    backgroundColor: '#7D4F9E',
    width: '80%',
    height: 50,
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
    marginBottom: 15

  },
  textobotao: {
    color : '#fff',
    textAlign: "center",
    fontSize: 18
  },
  esquecisenha: {
    color: '#cccccc',
    fontSize: 16,
  }

});

