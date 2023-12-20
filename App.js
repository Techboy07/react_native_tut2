import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseListScreen from "./screens/CourseList";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

import IonIcons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "blue",
        }}
      >
        <Tab.Screen
          name="Courses"
          component={CourseListScreen}
          options={{
            tabBarLabel: "my courses",
            tabBarIcon: () => <IonIcons name="book" size={15} />,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "my profile",
            tabBarIcon: () => <IonIcons name="person" size={15} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "my profile",
            tabBarIcon: () => <IonIcons name="settings" size={15} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
