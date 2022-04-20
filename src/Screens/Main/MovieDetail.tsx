import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import ListCard from '../../Components/Cards/ListCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HomeScreenProp} from '../../Navigation/NavigationsPropsParamsTypes';
import {GetMovieDetail} from '../../store/Actions/MoviesActions';
import {RootState} from '../../store/store';

interface MovieDetail {
  item: {
    backdrop_path: string;
    poster_path: string;
    title: string;
    release_date: string;
    overview: string;
    vote_average: string;
  };
}

const MovieDetail: FC<MovieDetail> = (props: any) => {
  const {item} = props.route.params;
  const navigation = useNavigation<HomeScreenProp>();

  const dispatch: Dispatch<any> = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const MovieDetalData = useAppSelector(state => state.Movies.movieData);

  useEffect(() => {
    dispatch(GetMovieDetail(890656));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: wp(2),
        backgroundColor: '#35324f',
        paddingVertical: hp(3),
      }}>
      <ListCard
        onPress={() => navigation.navigate('Home')}
        bannerImage={item?.backdrop_path}
        posterImage={item?.poster_path}
        movieTitle={item?.title}
        releaseDate={item?.release_date}
        overview={item?.overview}
        voteAverage={item?.vote_average}
      />

      <FlatList
        horizontal
        data={MovieDetalData}
        renderItem={({item, index, separators}) => <Text>flatlist</Text>}
      />
    </View>
  );
};

export default MovieDetail;
