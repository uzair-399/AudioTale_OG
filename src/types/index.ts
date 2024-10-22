// import { Theme } from "@react-navigation/native";
import {
  ColorValue,
  DimensionValue,
  ImageSourcePropType,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextStyle,
  ViewStyle,
} from "react-native";

// export type MyTheme = Theme & {
//   colors: {
//     textSec: string;
//     placeholder?: string;
//     statusBar: string;
//     positive?: string;
//     negative?: string;
//     focused?: string;
//   };
// };

export type MyTextProps = {
  text?: string;
  textColor?: string;
  style?: TextStyle;
  weight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  size?: number;
};
export interface MyInputProps {
  label?: string;
  placeholder?: string;
  password?: boolean;
  text?: string;
  onChange?: (val: string) => void;
  onChangeText?: (value: string) => void;
  width?: DimensionValue | undefined;
  style?: ViewStyle;
  placeholderColor?: string;
  inputStyle?: StyleProp<TextStyle>;
  multiline?: boolean;
  leftchild?: React.ReactNode;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  email?: boolean;
  lock?: boolean;
  value?: string;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}

export interface MyButtonProps {
  label?: string;
  onPress?: () => void;
  textColor?: string;
  backgroundColor?: ColorValue | undefined | string;
  style?: ViewStyle | ViewStyle[];
  labelStyle?: TextStyle;
  key?: string;
  chevron?: boolean;
  disabled?: boolean;
}

export type categoryProps = {
  id: string;
  name: string;
};

export type MyBannerProps = {
  background?: ImageSourcePropType;
  title2?: string;
  touchable?: boolean;
  label?: string;
  height?: number;
  width?: number;
  source?: ImageSourcePropType; // Correct type for the image source
  require?: ImageSourcePropType;
  title?: string;
  style?: ViewStyle;
  genre?: string;
  onPress?: () => void;
};

export interface RootObject {
  audiobooks: Audiobooks;
  "fictional-stories": Fictionalstories;
}

export interface Fictionalstories {
  "Blood Romance": BloodRomance;
  DCosta: BloodRomance;
  Haunted: BloodRomance;
  "Jo Bache Hain Sang Samet Lo": BloodRomance;
  Piyas: BloodRomance;
  "Teri Berukhi Ke Dayar Me": BloodRomance;
}

export interface BloodRomance {
  episodes: Episode[];
  featureImage: string;
  genre: string;
  title: string;
}

export interface Episode {
  audioUrl: string;
  title: string;
}

export interface Audiobooks {
  "Eat That Frog": EatThatFrog;
  "Peer-e-Kamil": EatThatFrog;
  "The Adventures of Sherlock Holmes": EatThatFrog;
  "The Girl On The Train": EatThatFrog;
  "The Hounds Of Baskervilles ": EatThatFrog;
  "The Poor Traveller": EatThatFrog;
}

export interface EatThatFrog {
  audioUrl: string;
  category: string;
  featureImage: string;
  genre: string;
  title: string;
}
