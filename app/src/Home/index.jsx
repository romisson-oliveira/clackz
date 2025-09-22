// src/Home/Home.js
import { Text, View } from "react-native";
import Background from "../components/Background/Background";
import { styles } from "./styles/styles";

export default function Home() {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo à Home!</Text>
      </View>
    </Background>
  );
}
