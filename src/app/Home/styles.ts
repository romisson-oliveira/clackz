// src/app/Home/styles/styles.ts
import { COLORS } from "@/constants/colors";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    // Garante que o gradiente preenche todo o espaço
  },
  areaLogo: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 100,
    marginTop: 100,
  },
  text: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: "bold",
  },
  title: {
    fontSize: 36,
    color: COLORS.textNewColor,
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
    backgroundColor: COLORS.textNewColor,
    fontSize: 20,
    padding: 12,
  },
  textInsideInput: {
    fontSize: 20,
    color: COLORS.inputText,
    fontWeight: "semibold",
  },
  botao: {
    borderRadius: 8,
    height: 50,
    width: "70%",
    backgroundColor: "#524C46", // Estilos de sombra para iOS
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
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
