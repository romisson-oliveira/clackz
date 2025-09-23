import { COLORS } from "@/constrants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderWidth: 0,
    borderColor: "transparent",
  },
  title: {
    fontSize: 24,
    color: COLORS.textColor,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 32,
    marginLeft: 28,
  },
});
