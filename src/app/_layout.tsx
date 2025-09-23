// app/_layout.tsx

import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";

// Crie seu tema personalizado
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#C2B3A4", // Use a cor inicial do seu gradiente
  },
};

export default function Layout() {
  return (
    <ThemeProvider value={MyTheme}>
      <Stack screenOptions={{ animation: "none" }} />
    </ThemeProvider>
  );
}
