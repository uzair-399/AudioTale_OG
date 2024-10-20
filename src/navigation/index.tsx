import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AudioBooks, Home, Stories } from "../screens";

const BottomTab = createBottomTabNavigator();

const RootNav = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{}}>
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="AudioBooks" component={AudioBooks} />
        <BottomTab.Screen name="Stories" component={Stories} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
