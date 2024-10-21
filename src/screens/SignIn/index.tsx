import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { GapView, MyButton, MyInput, MyText } from "../../components";
import { LightTheme } from "../../theme";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignIn = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        navigation.replace("BottomTab");
        // Add your form submission logic here (e.g., API calls)
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={require("./../../assets/logo.png")}
              style={{ height: 250, width: 250 }}
            />
          </View>
          <View style={styles.formContainer}>
            <MyInput
              email
              style={[
                styles.input,
                touched.email && errors.email ? styles.errorInput : null,
              ]}
              placeholder="Email"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />

            <GapView length={20} />
            <MyInput
              lock
              style={[
                styles.input,
                touched.password && errors.password ? styles.errorInput : null,
              ]}
              placeholder="Password"
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              password
            />

            <GapView length={20} />
            <MyText
              size={20}
              weight="900"
              style={{ color: LightTheme.colors.primary }}
            >
              Forgot Password ?
            </MyText>
            <GapView length={30} />
            <View style={{ width: "50%", alignItems: "center" }}>
              <MyButton onPress={handleSubmit} label="SignIn" />
            </View>
            <GapView length={30} />
            <MyText textColor={LightTheme.colors.text}>
              Don't have an account?{" "}
              <Pressable onPress={() => navigation.navigate("SignUp")}>
                <MyText weight="800" textColor={LightTheme.colors.primary}>
                  Sign Up{" "}
                </MyText>
              </Pressable>
              Here
            </MyText>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightTheme.colors.background,
    alignItems: "center",
  },
  imgContainer: {
    margin: 20,
    // flex: 1,
  },
  formContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: LightTheme.colors.border,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  errorInput: {
    borderColor: "red", // This will change border color if there's an error
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default SignIn;
