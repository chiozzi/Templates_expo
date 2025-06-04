import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "App Chiozzi",
      }} />
      <Stack.Screen name="ex01" options={{
        title: "Layout Básico",
      }} />
      <Stack.Screen name="ex02" options={{
        title: "Cartão de Perfil",
      }} />
      <Stack.Screen name="ex03" options={{
        title: "Botão",
      }} />
      <Stack.Screen name="ex04" options={{
        title: "Lista de Produtos",
      }} />
    <Stack.Screen name="ex05" options={{
        title: "Login",
      }} />
    <Stack.Screen name="ex06" options={{
        title: "ScrollView",
      }} />

     <Stack.Screen name="ex07" options={{
        title: "Ícones Apps",
      }} />
      
      <Stack.Screen name="ex08" options={{
        title: "Perfil",
      }} />

     <Stack.Screen name="ex09" options={{
        title: "Feed",
      }} />

    <Stack.Screen name="ex10" options={{
        title: "Configurações",
      }} />

    </Stack>
    


  );
}