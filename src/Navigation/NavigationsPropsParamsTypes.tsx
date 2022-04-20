import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  MovieDetail: {};
};

export type HomeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type MovieDetailScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'MovieDetail'
>;
