// @/app/Painel/index.tsx
import Background from "@/components/Background";
import Header from "@/components/Header";
import Search from "@/components/Search";
import { useLocalSearchParams, useRouter } from "expo-router"; // importando estado para rotas
import { Text, View } from "react-native";
import { styles } from "./_styles/styles";

export default function Painel() {
  const router = useRouter();
  const { userName } = useLocalSearchParams(); // Recebe o parâmetro userName

  return (
    <View style={styles.container}>
      <Background>
        <Header />
        <Text style={styles.title}>Olá, {userName}!</Text>
        <View style={{ width: "100%", alignSelf: "flex-start" }}>
          <Search />
        </View>
      </Background>
    </View>
  );
}
