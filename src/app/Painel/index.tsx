// @/app/Painel/
import Background from "@/components/Background/";
import { useRouter } from "expo-router"; // importando estado para rotas
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles/styles";

export default function Painel() {
  const router = useRouter();
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao Painel!</Text>

        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}
