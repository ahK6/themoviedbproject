import {ViewStyle, TextStyle} from 'react-native';

export interface InputPropsParams {
  onChange: () => void;
  validateError: string | undefined;
  label: string;
  containerStyle: ViewStyle | ViewStyle[] | undefined;
  labelStyle: TextStyle | TextStyle[] | undefined;
  textInputStyle: TextStyle | TextStyle[] | undefined;
  errorLabelStyle: TextStyle | TextStyle[] | undefined;
  includeLabel: boolean;
}

export interface InputPasswordPropsParams {
  onChange: () => void;
  validateError: string | undefined;
  hidePassword: boolean;
  setHidePassword: () => void;
  label: string;
  containerStyle: ViewStyle | ViewStyle[] | undefined;
  labelStyle: TextStyle | TextStyle[] | undefined;
  textInputStyle: TextStyle | TextStyle[] | undefined;
  errorLabelStyle: TextStyle | TextStyle[] | undefined;
  rootContainer: ViewStyle | ViewStyle[] | undefined;
}
