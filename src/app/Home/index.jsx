// src/app/Home/index.tsx
import Background from "@/components/Background/index";
import { useRouter } from "expo-router"; // Importando estado para rotas
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles.ts";

export default function Home() {
  const [name, setName] = useState(""); // Começa com string vazia para melhor validação.

  const router = useRouter(); // Inicializando router

  const handleNavigation = () => {
    // Acessa o valor do nome diretamente do estado
    if (name.trim() === "") {
      Alert.alert(
        "Nome não inserido",
        "Deseja prosseguir sem adicionar um nome?",
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Sim",
            onPress: () =>
              router.push({
                pathname: "./Painel/",
                params: { userName: "Pessoa" },
              }),
          },
        ]
      );
    } else {
      Alert.alert("Confirme seu nome", `Seu nome é ${name}?`, [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          onPress: () =>
            router.push({ pathname: "/Painel/", params: { userName: name } }),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Background>
        <View style={styles.areaLogo}>
          <Text style={styles.title}>Clackz</Text>
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.textInsideInput}>Insira seu nome...</Text>
          <TextInput
            placeholder="Nome..."
            style={styles.inputText}
            onChangeText={setName} // Use setNAme diretamente
            // Aciona a busca quando o usuário pressiona Enter no teclado
            onSubmitEditing={handleNavigation}
          />
        </View>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.9}
          onPress={handleNavigation}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#B5B0AA",
              fontWeight: "bold",
              fontSize: 24,
            }}
          >
            Vamos se divertir?
          </Text>
        </TouchableOpacity>
      </Background>
    </View>
  );
}
