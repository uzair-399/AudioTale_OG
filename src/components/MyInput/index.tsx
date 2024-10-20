import React, { memo, useState } from "react";
import { MyInputProps } from "../../types";
import {
  DimensionValue,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
// import { EyeClosed } from "../../assets";
import { useTheme } from "@react-navigation/native";
import MyText from "../MyText";
import { Email, EyeClosed, EyeOpened, Lock } from "../../assets";
import { LightTheme } from "../../theme";

function MyInput({
  label,
  multiline,
  placeholder,
  password = false,
  onChange,
  text,
  style,
  inputStyle,
  placeholderColor,
  email,
  width,
  lock,
  value,
}: MyInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={[styles({ width }).container, style]}>
      {label && (
        <MyText
          style={{ paddingLeft: 4, marginBottom: -6 }}
          textColor="#888888"
        >
          {label}
        </MyText>
      )}
      <View style={styles({}).inputContainer}>
        {email && (
          <Email
            // color={LightTheme.colors.primary}
            width={25}
            height={25}
            style={{ marginRight: 10 }}
          />
        )}
        {lock && (
          <Lock
            // color={LightTheme.colors.primary}
            width={25}
            height={25}
            style={{ marginRight: 10 }}
          />
        )}
        <TextInput
          multiline={multiline}
          secureTextEntry={password ? (showPassword ? false : true) : false}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor ? placeholderColor : "#888888"}
          value={value}
          onChangeText={(val): void => onChange?.(val)}
          style={[inputStyle, styles({ width, password }).InputStyle]}
        />
        {password && (
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={{ marginLeft: -25 }}
          >
            {showPassword ? (
              <EyeClosed width={25} height={25} />
            ) : (
              <EyeOpened width={25} height={25} />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
}
const styles = ({
  width,
  password,
}: {
  width?: DimensionValue | undefined;
  password?: boolean;
}) =>
  StyleSheet.create({
    container: {
      borderBottomColor: "#E4E4E4",
      borderBottomWidth: 1,
      width: width ? width : "100%",
      paddingHorizontal: 10,
    },
    inputContainer: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 45,
    },
    InputStyle: {
      fontFamily: "Inter-Regular",
      color: "white",
      width: password ? "90%" : "100%",
    },
  });

export default memo(MyInput);
