import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Background from "./src/components/Background/Background";

export default function App() {
  const [name, setName] = useState("Pessoa");
  return (
    <View style={styles.container}>
      <Background>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            width: 200,
            height: 100,
            marginTop: 170,
          }}
        >
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
          onPress={() => {
            console.log(name);
          }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Garante que o gradiente preenche todo o espaço
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 36,
    color: "#B5B0AA",
    fontWeight: "bold",
  },
  inputArea: {
    width: "70%",
    marginTop: 10,
    gap: 4,
  },
  inputText: {
    borderRadius: 8,
    height: 50,
    backgroundColor: "#B5B0AA",
    fontSize: 20,
    padding: 12,
  },
  textInsideInput: {
    fontSize: 20,
    color: "#B3B3B2",
    fontWeight: "semibold",
  },
  botao: {
    borderRadius: 8,
    height: 50,
    width: "70%",
    backgroundColor: "#524C46", // Estilos de sombra para iOS
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      // Estilos de sombra para Android
      android: {
        elevation: 5,
        fontSize: 20,
        letterSpacing: 4,
        padding: 10,
        marginTop: 24,
      },
    }),
  },
});
