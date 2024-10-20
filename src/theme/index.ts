import { DarkTheme as DT, DefaultTheme } from "@react-navigation/native";

const colors = {
  light: {
    primary: "#49ACE1",
    background: "#0C1E31",
    card: "#0E7A9E",
    text: "#ffffff",
    border: "#E4E4E4",
    notification: "#FFFFFF", //todo: set later
    textSec: "#666666",
    placeholder: "#888888",
    statusBar: "#0C1E31",
    focused: "#0E7A9E",
    positive: "#ffffff",
    negative: "#000000",
  },
  dark: {
    primary: "#49ACE1",
    background: "#101010",
    card: "#29292E",
    text: "#FFF",
    border: "#6F6F6F",
    notification: "#FFFFFF", //todo: set later
    textSec: "#FFFFFF",
    placeholder: "#FFFFFF",
    statusBar: "#29292E",
    focused: "#49ACE1",
    positive: "#000000",
    negative: "#ffffff",
  },
};

const LightTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, ...colors.light },
};

const DarkTheme = {
  ...DT,
  colors: { ...DT.colors, ...colors.dark },
};

export { colors, LightTheme, DarkTheme };
