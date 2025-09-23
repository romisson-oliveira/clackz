import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";

// 1. Defina a interface para as props.
// O "ReactNode" tipa o conteúdo filho que pode ser renderizado.
interface BackgroundProps {
  children: ReactNode;
}

// 2. Destructure as props diretamente na assinatura da função.
export default function Background({ children }: BackgroundProps) {
  return (
    <LinearGradient
      colors={["#C2B3A4", "#746D65"]}
      locations={[0, 0.33]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.backgroundGradient}
    >
      {/* 3. Renderize o conteúdo "children" aqui */}
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    alignItems: "center",
    borderWidth: 0,
    borderColor: "transparent",
    padding: 8,
  },
});
