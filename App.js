import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  StatusBar,
  Platform,
  Switch,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="example@email.com"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="message"
        multiline
      />

      <View style={styles.switchContaner}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((current) => !current)}
          trackColor={{ false: "#767577", true: "lightblue" }}
          thumbColor={"#f4f3f4"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS == "android" ? 25 : 0,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    padding: 10,
    fontSize: 24,
  },
  multilineText: {
    height: 100,
    textAlignVertical: "top",
  },
  switchContaner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    gap: 100,
  },
});
