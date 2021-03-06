import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Label from '../../Components/Labels/Label';
import TitleLabel from '../../Components/Labels/TitleLabel';
import {GetPopularMovies} from '../../store/Actions/MoviesActions';
import {RootState} from '../../store/store';
import ListCard from '../../Components/Cards/ListCard';
import LoadingOverlay from '../../Components/Modals/LoadingOverlay';
import {useNavigation} from '@react-navigation/native';
import {MovieDetailScreenProp} from '../../Navigation/NavigationsPropsParamsTypes';

const Home = () => {
  const navigation = useNavigation<MovieDetailScreenProp>();
  const dispatch: Dispatch<any> = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const [currentePage, setCurrentPage] = useState<number>(1);
  const popularMoviesData = useAppSelector(state => state.Movies);

  useEffect(() => {
    dispatch(GetPopularMovies(1));
  }, []);

  useEffect(() => {
    if (currentePage !== 1) {
      dispatch(GetPopularMovies(currentePage));
    }
  }, [currentePage]);

  return (
    <View style={{flex: 1, backgroundColor: '#35324f'}}>
      <LoadingOverlay
        showOverlay={
          popularMoviesData.status === 'loading' ||
          popularMoviesData.status === 'updating'
            ? true
            : false
        }
      />
      {popularMoviesData.status === 'failed' ? (
        <>
          <TitleLabel
            text={popularMoviesData.errors}
            textStyle={{
              textAlign: 'center',
              marginVertical: hp(5),
              marginHorizontal: wp(5),
            }}
          />
        </>
      ) : (
        <>
          <TitleLabel
            text={popularMoviesData.data?.length + ' results'}
            textStyle={{alignSelf: 'center', marginVertical: hp(2)}}
          />
          <FlatList
            style={{paddingHorizontal: wp(2)}}
            data={popularMoviesData.data}
            renderItem={({item, index, separators}) => (
              <ListCard
                onPress={() => navigation.navigate('MovieDetail', {item: item})}
                bannerImage={item.backdrop_path}
                posterImage={item.poster_path}
                movieTitle={item.title}
                releaseDate={item.release_date}
                overview={item.overview}
                voteAverage={item.vote_average}
              />
            )}
            onEndReached={({distanceFromEnd}) => {
              if (
                distanceFromEnd < 0 ||
                popularMoviesData.status == 'loading' ||
                popularMoviesData.status == 'updating'
              ) {
                return;
              }

              setCurrentPage(currentePage + 1);
            }}
            onEndReachedThreshold={1}
            keyExtractor={item => item.id}
          />
        </>
      )}
    </View>
  );
};

export default Home;
