import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Link href="/ex01">Layout Básico</Link>
    <Link href="/ex02">Cartão de Perfil</Link>
    <Link href="/ex03">Botão</Link>
    <Link href="/ex04">Lista de Produtos</Link>
    <Link href="/ex05">Login</Link>
    <Link href="/ex06">ScrollView</Link>
    <Link href="/ex07">Ícones Apps</Link>
    <Link href="/ex08">Perfil</Link>
    <Link href="/ex09">Feed</Link>
    <Link href="/ex10">Configurações</Link>

    </View>
  );
}
