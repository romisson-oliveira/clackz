import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Ionicons name="menu" size={24} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Text style={styles.title}>Clackz</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 24,
    paddingLeft: 16,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 36,
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
