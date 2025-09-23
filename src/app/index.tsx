// app/index.tsx
import { Redirect } from "expo-router";

export default function InitialRedirect() {
  // Redireciona o usuário imediatamente para a rota /Home
  return <Redirect href="/Home" />;
}
