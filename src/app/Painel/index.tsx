// @/app/Painel/index.tsx
import Background from "@/components/Background/";
import { useLocalSearchParams, useRouter } from "expo-router"; // importando estado para rotas
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./_styles/styles";

export default function Painel() {
  const router = useRouter();
  const { userName } = useLocalSearchParams(); // Recebe o parâmetro userName
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao Painel, {userName}!</Text>

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
