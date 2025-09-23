// src/app/Home/index.tsx
import Background from "@/components/Background/index";
import { useRouter } from "expo-router"; // Importando estado para rotas
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../Home/styles/styles";

export default function Home() {
  const [name, setName] = useState("Pessoa");

  const router = useRouter(); // Inicializando router

  function handleClick() {
    router.push("../Painel/");
  }
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
            onChangeText={(value) =>
              value === "" ? setName("Pessoa") : setName(value)
            }
          />
        </View>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.9}
          onPress={handleClick}
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
