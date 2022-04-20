import {TextStyle, ViewStyle} from 'react-native';

export interface ListCardPropsParams {
  bannerImage: string;
  posterImage: string;
  movieTitle: string;
  releaseDate: string;
  overview: string;
  voteAverage: string;
  onPress: () => void;
}
