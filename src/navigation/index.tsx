import { View, Text, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AudioBooks, Home, SignIn, SignUp, Stories } from "../screens";
import { HomeTab, AudioBooksTab, StoriesTab } from "../assets";
import { LightTheme } from "../theme";
import BottomNavigation from "./BottomNavigation";

const Stack = createNativeStackNavigator();
const RootNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: LightTheme.colors.header,
          },
          headerTitleAlign: "center",
          headerTintColor: LightTheme.colors.text,

          headerTitle: () => (
            <Image source={require("../assets/Appbar_logo.png")} />
          ),
          // headerRight: () => (

          // ),
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="BottomTab" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
