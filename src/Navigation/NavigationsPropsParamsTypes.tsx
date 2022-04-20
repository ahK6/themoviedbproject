import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  MovieDetail: {};
  SearchMovie: undefined;
};

export type HomeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type MovieDetailScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'MovieDetail'
>;

export type SearchMovieScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'SearchMovie'
>;
