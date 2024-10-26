import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { GapView, MyButton, MyInput, MyText } from "../../components";
import { LightTheme } from "../../theme";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebaseconfig";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");

  const passwordResetEmail = async () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent");
        setEmail("");
        navigation.navigate("SignIn"); // Navigate to SignIn screen
      })
      .catch((error: any) => console.log(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("./../../assets/logo.png")}
          style={{ height: 250, width: 250 }}
        />
      </View>
      <GapView length={30} />
      <MyInput
        email
        style={[styles.input]}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChange={(text) => setEmail(text)}
        width={"90%"}
      />

      <GapView length={30} />
      <View style={{ width: "50%", alignItems: "center" }}>
        <MyButton label="Submit" onPress={passwordResetEmail} />
      </View>
      <GapView length={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightTheme.colors.background,
    alignItems: "center",
    // justifyContent: "space-between", // Center contents vertically
  },
  imgContainer: {
    marginVertical: 40,
    // flex: 1,
  },

  input: {
    borderWidth: 2,
    borderColor: LightTheme.colors.border,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ForgotPassword;
