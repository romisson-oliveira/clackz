// @/app/Painel/
import Background from "@/components/Background/";
import { Text, View } from "react-native";
import { styles } from "./styles/styles";

export default function Painel() {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao Painel!</Text>
      </View>
    </Background>
  );
}
