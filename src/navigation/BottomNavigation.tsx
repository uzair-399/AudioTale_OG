import { View, Text, Pressable } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AudioBooks, Home, Stories } from "../screens";
import {
  HomeTab,
  AudioBooksTab,
  StoriesTab,
  Exit,
  Search,
  Filter,
} from "../assets";
import { LightTheme } from "../theme";

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
  const tabBar = (screen: string, isFocused: Boolean) => {
    const iconSize = 24; // Adjust the size as needed
    switch (screen) {
      case "Home":
        if (isFocused) {
          return (
            <HomeTab
              fill={LightTheme.colors.primary}
              width={iconSize}
              height={iconSize}
            />
          );
        } else {
          return <HomeTab fill="white" width={iconSize} height={iconSize} />;
        }
      case "AudioBooks":
        if (isFocused) {
          return (
            <AudioBooksTab
              fill={LightTheme.colors.primary}
              width={iconSize}
              height={iconSize}
            />
          );
        } else {
          return (
            <AudioBooksTab
              width={iconSize}
              height={iconSize}
              fill={LightTheme.colors.text}
            />
          );
        }
      case "Stories":
        if (isFocused) {
          return (
            <StoriesTab
              fill={LightTheme.colors.primary}
              width={iconSize}
              height={iconSize}
            />
          );
        } else {
          return (
            <StoriesTab
              fill={LightTheme.colors.text}
              width={iconSize}
              height={iconSize}
            />
          );
        }
      default:
        return null;
    }
  };

  return (
    <BottomTab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerStyle: {
          backgroundColor: LightTheme.colors.background, // Set the header background to blue
        },

        headerRight: () => (
          <View style={{ flexDirection: "row" }}>
            <Pressable style={{ marginRight: 15 }}>
              <Search height={25} width={25} />
            </Pressable>
            <Pressable style={{ marginRight: 15 }}>
              <Filter width={25} height={25} />
            </Pressable>
          </View>
        ),
        headerTitleAlign: "center", // Center the header title
        headerTintColor: LightTheme.colors.text, // Optional: make the title and icons white
        tabBarActiveTintColor: "#0F5D9F", // Active tab color set to blue
        tabBarLabelStyle: { bottom: 10 },
        tabBarIcon: ({ focused }) => {
          return tabBar(route.name, focused);
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: LightTheme.colors.background,
        },
      })}
    >
      <BottomTab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <BottomTab.Screen name="AudioBooks" component={AudioBooks} />
      <BottomTab.Screen name="Stories" component={Stories} />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
