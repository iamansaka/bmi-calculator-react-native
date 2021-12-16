// Librairies
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "../Screens/Home";
import ResultScreen from "../Screens/Result";

const StackNavigator = createStackNavigator();

const headerConfig = {
  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 2,
};

export function MainStackNavigator() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ title: "Calculatrice BMI", headerStyle: { ...headerConfig } }}
      />
      <StackNavigator.Screen name="ResultStack" component={ResultScreen} />
    </StackNavigator.Navigator>
  );
}
