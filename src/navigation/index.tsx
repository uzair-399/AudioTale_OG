import React from "react";
import { Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn, SignUp } from "../screens";
import { LightTheme } from "../theme";

import BottomNavigation from "./BottomNavigation";
import { Exit } from "../assets";
import { HeaderButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";

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
        <Stack.Screen
          name="BottomTab"
          component={BottomNavigation}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable onPress={() => navigation.replace("SignIn")}>
                <Exit width={25} height={25} fill={LightTheme.colors.text} />
              </Pressable>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
