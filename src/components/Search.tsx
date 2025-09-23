import { COLORS } from "@/constrants/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Search() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Adicione aqui a lógica de submissão da busca
    if (searchText.length > 0) {
      // Exemplo: mostrar um alerta com o texto pesquisado
      Alert.alert("Buscando por...", searchText);
      // Aqui você faria uma chamada de API, navegação, etc.
    } else {
      Alert.alert("Atenção", "Por favor, digite algo para buscar.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pesquisar..."
        style={styles.textInput}
        value={searchText}
        onChangeText={setSearchText}
        // Aciona a busca quando o usuário pressiona Enter no teclado
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.searchIcon}>
        <Ionicons name="search" size={24} color={"#1e1d20d3"} />
      </TouchableOpacity>
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
  textInput: {
    flex: 1, // Permite que o TextInput ocupe todo o espaço disponível
    fontSize: 16,
    color: COLORS.inputText,
    fontWeight: "bold",
  },
  searchIcon: {
    // Pode adicionar padding extra para aumentar a área clicável
    paddingLeft: 10,
    paddingVertical: 5,
  },
});
