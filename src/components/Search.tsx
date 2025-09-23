import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pesquisar..."
        style={styles.textInput}
      ></TextInput>
      <Ionicons name="search" size={24} color={"#1E1D20"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 2,
    paddingRight: 24,
    paddingLeft: 24,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 36,
    margin: 24,
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    fontSize: 16,
    color: COLORS.inputText,
    fontWeight: "bold",
  },
});
