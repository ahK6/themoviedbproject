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

const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const [currentePage, setCurrentPage] = useState<number>(1);
  const popularMoviesData = useAppSelector(state => state.Movies);

  useEffect(() => {
    console.log(popularMoviesData);
  }, [popularMoviesData]);

  useEffect(() => {
    dispatch(GetPopularMovies(currentePage));
  }, [currentePage]);

  return (
    <View style={{flex: 1, backgroundColor: '#35324f'}}>
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
      />
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
