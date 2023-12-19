import {
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
  FlatList,
  Text,
  View,
} from "react-native";
import groupedPokemons from "./grouped-data.json";
const charmanderData = {
  name: "Charmander",
  image: require("./assets/charmander.png"),
  type: "Fire",
  hp: 39,
  moves: ["Scratch", "Ember", "Growl", "Leer"],
  weaknesses: ["Water", "Rock"],
};

const squirtleData = {
  name: "Squirtle",
  image: require("./assets/squirtle.png"), // Replace with the actual image path
  type: "Water",
  hp: 44,
  moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
  weaknesses: ["Electric", "Grass"],
};

const bulbasaurData = {
  name: "Bulbasaur",
  image: require("./assets/bulbasaur.png"), // Replace with the actual image path
  type: "Grass",
  hp: 45,
  moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
};

const pikachuData = {
  name: "Pikachu",
  image: require("./assets/pikachu.png"), // Replace with the actual image path
  type: "Electric",
  hp: 35,
  moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
  weaknesses: ["Ground"],
};

export default function App() {
  const pokeArray = [charmanderData, squirtleData, bulbasaurData, pikachuData];
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={groupedPokemons}
        renderSectionHeader={({ section }) => (
          <Text style={{ ...styles.listHeader }}>{section.type}</Text>
        )}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                margin: 7,
                borderWidth: 2,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 24 }}>{item}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS == "android" ? 25 : 0,
  },
  listHeader: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#fff",
  },
});
