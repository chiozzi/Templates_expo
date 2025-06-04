import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

// Definindo o tipo para cada item de configuração
type SettingOption = {
  id: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap; // Usando a tipagem dos ícones válidos do Ionicons
};

const settings: SettingOption[] = [
  {
    id: '1',
    name: 'Notificações',
    icon: 'notifications-outline', // Ícone de notificação do Expo
  },
  {
    id: '2',
    name: 'Privacidade',
    icon: 'lock-closed-outline', // Ícone de privacidade do Expo
  },
  {
    id: '3',
    name: 'Segurança',
    icon: 'shield-checkmark-outline', // Ícone de segurança do Expo
  },
  {
    id: '4',
    name: 'Idioma',
    icon: 'language-outline', // Ícone de idioma do Expo
  },
  {
    id: '5',
    name: 'Tema',
    icon: 'sunny-outline', // Ícone de tema do Expo
  },
  {
    id: '6',
    name: 'Conta',
    icon: 'person-circle-outline', // Ícone de conta do Expo
  },
];

export default function ex10() {
 // Função para renderizar cada item de configuração
  const renderSetting = ({ item }: { item: SettingOption }) => (
    <View style={styles.containerconfigs}>
      <TouchableOpacity
        style={styles.opcaoconfigs}
        onPress={() => handleOptionPress(item.name)} // Ação ao clicar
      >
        <Ionicons name={item.icon} style={styles.icon} />
        <Text style={styles.textoconfigs}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  // Função chamada quando uma opção é clicada
  const handleOptionPress = (optionName: string) => {
    Alert.alert('Opção clicada', `Você clicou em ${optionName}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={settings}
        renderItem={renderSetting}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.conteudo} // Adicionando estilo para o conteúdo da lista
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#4A0E5E',
    width: '100%', // Garantir que o ScrollView ocupe toda a largura da tela
    overflowX: 'hidden', // Impede rolagem horizontal
  },
  
  conteudo: {
    paddingVertical: 10, // Adiciona padding vertical para não ficar grudado na borda da tela
  },
  containerconfigs: {
    backgroundColor: '#fff',
    marginTop: 50,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: '100%',

    



  },
  opcaoconfigs: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%', // Ajusta o item para ocupar 100% da largura
  },
  icon: {
    fontSize: 30,
    marginRight: 10,


  },
  textoconfigs: {
    fontSize: 18,
    color: '#000',

  },
});
