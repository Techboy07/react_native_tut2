import { View, Text, StyleSheet, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CourseListScreen from "./screens/CourseList";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: "Welcome Home",
          headerStyle: {
            backgroundColor: "#6a51ae",
          },
          headerTintColor: "#fff",
          headerBackTitleStyle: {
            fontweight: "bold",
          },
          headerRight: () => {
            return (
              <Pressable onPress={() => alert("Menu button prwessed")}>
                <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
              </Pressable>
            );
          },
          contentStyle: {
            backgroundColor: "#e8e4f3",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ result: "" }}
        />
        <Stack.Screen name="Courses" component={CourseListScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
