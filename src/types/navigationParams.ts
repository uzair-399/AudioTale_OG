import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamsList = {
  SignIn: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  Draw: undefined;
  D1Nav: NavigatorScreenParams<D1ParamsList>;
};

export type BottomTabParamsList = {
  Home: undefined;
  Category: undefined;
  Cart: undefined;
  Settings: undefined;
};

export type D1ParamsList = {
  Profile: undefined;
  Favorite: undefined; //wishlist
  OrderHistory: undefined;
  DeleteAccount: undefined;
  // add more screens likewise
};
