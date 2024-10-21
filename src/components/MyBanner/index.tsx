import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { LightTheme } from "../../theme";
import MyText from "../MyText";
import { MyBannerProps } from "../../types";

const MyBanner = ({
  label,
  height,
  width,
  source,
  title,
  title2,
  style,
  onPress,
}: MyBannerProps) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.shadowBox, { height, width }]}>
        <Pressable onPress={onPress} style={styles.pressable}>
          <ImageBackground
            source={source}
            style={[styles.imageBackground, { height, width }]}
            imageStyle={styles.imageStyle}
          >
            <MyText style={styles.title}>{title}</MyText>
          </ImageBackground>
          {title2 && (
            <View style={styles.title2Container}>
              <MyText
                style={styles.title2}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {title2}
              </MyText>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default MyBanner;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: LightTheme.colors.background,
  },
  label: {
    color: LightTheme.colors.text,
    fontSize: 24,
    fontWeight: "700",
    margin: 10,
    marginBottom: 15,
  },
  shadowBox: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    shadowColor: "#49ACE1",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 6,
  },
  pressable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    borderRadius: 20, // Ensure image corners are rounded
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
    flexWrap: "wrap",
  },
  title2: {
    color: "white", // White text
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 5,
  },
  title2Container: {
    position: "absolute", // Positioned at the bottom
    bottom: 0,
    width: "100%", // Make the background full-width
    backgroundColor: "#0E7A9E", // Blue background
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
});
