import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AudioBooks, Home, Stories } from "../screens";
import { HomeTab, AudioBooksTab, StoriesTab } from "../assets";
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
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: LightTheme.colors.background, // Set the header background to blue
        },
        headerTitleAlign: "center", // Center the header title
        headerTintColor: LightTheme.colors.text, // Optional: make the title and icons white
        tabBarIcon: ({ focused }) => {
          return tabBar(route.name, focused);
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: LightTheme.colors.background,
        },
        tabBarActiveTintColor: "#0F5D9F", // Active tab color set to blue
        tabBarInactiveTintColor: "#49ACE1", // Inactive tab color set to a lighter blue
        tabBarLabelStyle: { bottom: 10 },
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
