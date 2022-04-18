import {TextStyle, ViewStyle} from 'react-native';

export interface ButtonTypes {
  OnPress: () => void;
  ButtonText: string;
  ButtonStyle: ViewStyle | ViewStyle[] | undefined;
  ButtonTextStyle: TextStyle | TextStyle[] | undefined;
}
