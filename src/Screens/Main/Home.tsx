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

const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const [currentePage, setCurrentPage] = useState<number>(1);
  const popularMoviesData = useAppSelector(state => state.Movies);
  const popularMoviesStatus = useAppSelector(state => state.Movies.status);

  useEffect(() => {
    if (currentePage === 1) {
      dispatch(GetPopularMovies(1));
    } else if (currentePage !== 1) {
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
            text={'Some thing went wrong, please try again later'}
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
                onPress={() => console.log('tesst')}
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
            onEndReachedThreshold={0.1}
            keyExtractor={item => item.id}
          />
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#35324f',
  },
  sectionImageContainer: {
    width: wp(100),
    height: hp(27),
    backgroundColor: '#ed7bc4',

    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 170,
    height: 200,
    aspectRatio: 1 * 1.4,
  },
});
