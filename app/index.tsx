import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Background from "./src/components/Background/";
import { styles } from "./styles";

export default function App() {
  const [name, setName] = useState("Pessoa");
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
