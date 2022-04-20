import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import ListCard from '../../Components/Cards/ListCard';
import ListHorizontalCard from '../../Components/Cards/ListHorizontalCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HomeScreenProp} from '../../Navigation/NavigationsPropsParamsTypes';
import {GetMovieDetail} from '../../store/Actions/MoviesActions';
import {RootState} from '../../store/store';
import TitleLabel from '../../Components/Labels/TitleLabel';
import LoadingOverlay from '../../Components/Modals/LoadingOverlay';

const MovieDetail: FC = (props: any) => {
  const isVisible = useIsFocused();

  const MovieData = props.route.params.item;
  const navigation = useNavigation<HomeScreenProp>();

  const dispatch: Dispatch<any> = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const MovieDetalData = useAppSelector(state => state.RelatedMovies);

  useEffect(() => {
    dispatch(GetMovieDetail(MovieData.id));
  }, [MovieData]);

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: wp(2),
        backgroundColor: '#35324f',
        paddingVertical: hp(3),
      }}>
      <LoadingOverlay
        showOverlay={
          MovieDetalData.status === 'loading' ||
          MovieDetalData.status === 'updating'
            ? true
            : false
        }
      />
      <ListCard
        onPress={() => navigation.navigate('Home')}
        bannerImage={MovieData.backdrop_path}
        posterImage={MovieData.poster_path}
        movieTitle={MovieData.title}
        releaseDate={MovieData.release_date}
        overview={MovieData.overview}
        voteAverage={MovieData?.vote_average}
      />

      {MovieDetalData.relatedData.length > 0 &&
      MovieDetalData.status == 'success' ? (
        <>
          <TitleLabel
            text="Related movies"
            textStyle={{textAlign: 'center', marginVertical: hp(2)}}
          />
          <FlatList
            horizontal
            data={MovieDetalData.relatedData}
            contentContainerStyle={{marginBottom: hp(8)}}
            renderItem={({item, index, separators}) => (
              <ListHorizontalCard
                onPress={() => navigation.navigate('MovieDetail', {item: item})}
                bannerImage={item.backdrop_path}
                posterImage={item.poster_path}
                movieTitle={item.title}
                releaseDate={item.release_date}
                overview={item.overview}
                voteAverage={item.vote_average}
              />
            )}
          />
        </>
      ) : MovieDetalData.relatedData.length <= 0 &&
        MovieDetalData.status == 'success' ? (
        <TitleLabel
          text={'No related movies found'}
          textStyle={{textAlign: 'center', marginVertical: hp(2)}}
        />
      ) : (
        MovieDetalData.status == 'failed' && (
          <TitleLabel
            text={MovieDetalData.errors}
            textStyle={{textAlign: 'center', marginVertical: hp(2)}}
          />
        )
      )}
    </ScrollView>
  );
};

export default MovieDetail;
