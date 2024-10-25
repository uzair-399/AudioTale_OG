// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp1i0BWRKyg9EmE-fhZymdVqeqgsW5704",
  authDomain: "audio-tale.firebaseapp.com",
  databaseURL: "https://audio-tale-default-rtdb.firebaseio.com",
  projectId: "audio-tale",
  storageBucket: "audio-tale.appspot.com",
  messagingSenderId: "731644264441",
  appId: "1:731644264441:web:5933d6b97cd3cfe44f4728",
  measurementId: "G-B6LSG5MKPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getDatabase();
