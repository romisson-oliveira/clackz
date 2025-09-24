// @/app/Painel/index.tsx
import Background from "@/components/Background";
import Header from "@/components/Header";
import Search from "@/components/Search";
import painelData from "@/data/painel.json";
import { useLocalSearchParams, useRouter } from "expo-router"; // importando estado para rotas
import { Image, Text, View } from "react-native";
import { styles } from "./_styles/styles";

export default function Painel() {
  const router = useRouter();
  const { userName } = useLocalSearchParams(); // Recebe o parâmetro userName

  const images: Record<string, any> = {
    BOMDIA: require("../../../assets/images/painel/BOMDIA.jpg"),
    BOATARDE: require("../../../assets/images/painel/BOATARDE.jpg"),
    BOANOITE: require("../../../assets/images/painel/BOANOITE.jpg"),
    EMPATIA: require("../../../assets/images/painel/EMPATIA.jpg"),
  };

  return (
    <View style={styles.container}>
      <Background>
        <Header />
        <Text style={styles.title}>Olá, {userName}!</Text>
        <View style={{ width: "100%", alignSelf: "flex-start" }}>
          <Search />
        </View>
        <View style={{ flexDirection: "column", width: "100%", padding: 4 }}>
          <Text>Escolha o seu tema para hoje:</Text>

          <View style={styles.grid}>
            {painelData.map((item) => (
              <View key={item.id} style={styles.cell}>
                <Image source={images[item.uri]} style={styles.image} />
              </View>
            ))}
          </View>
        </View>
      </Background>
    </View>
  );
}
