import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import ListCard from '../../Components/Cards/ListCard';
import ListHorizontalCard from '../../Components/Cards/ListHorizontalCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeScreenProp} from '../../Navigation/NavigationsPropsParamsTypes';
import {GetMovieDetail} from '../../store/Actions/MoviesActions';
import {RootState} from '../../store/store';
import TitleLabel from '../../Components/Labels/TitleLabel';
import LoadingOverlay from '../../Components/Modals/LoadingOverlay';

const MovieDetail: FC = (props: any) => {
  const MovieData = props.route.params.item;
  const navigation = useNavigation<HomeScreenProp>();

  const dispatch: Dispatch<any> = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const MovieDetalData = useAppSelector(state => state.RelatedMovies);

  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);

  useEffect(() => {
    dispatch(GetMovieDetail(MovieData.id));
  }, [MovieData]);

  const scrollHandler = (event: any) => {
    if (event.nativeEvent.contentOffset.x > 20) {
      setShowLeftArrow(true);
    } else if (event.nativeEvent.contentOffset.x < 20) {
      setShowLeftArrow(false);
    }
  };

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
          <View
            style={{
              marginBottom: hp(8),
              justifyContent: 'center',
            }}>
            <FlatList
              horizontal
              data={MovieDetalData.relatedData}
              contentContainerStyle={{}}
              renderItem={({item, index, separators}) => (
                <ListHorizontalCard
                  onPress={() =>
                    navigation.navigate('MovieDetail', {item: item})
                  }
                  bannerImage={item.backdrop_path}
                  posterImage={item.poster_path}
                  movieTitle={item.title}
                  releaseDate={item.release_date}
                  overview={item.overview}
                  voteAverage={item.vote_average}
                />
              )}
              onScroll={scrollHandler}
              onScrollBeginDrag={() => {
                setShowRightArrow(true);
              }}
              onEndReached={() => {
                setShowRightArrow(false);
              }}
            />
            {showLeftArrow && (
              <View style={{position: 'absolute', left: wp(3)}}>
                <Icon name="arrow-left" size={hp(3)} color="white" />
              </View>
            )}
            {showRightArrow && (
              <View style={{position: 'absolute', right: wp(3)}}>
                <Icon name="arrow-right" size={hp(3)} color="white" />
              </View>
            )}
          </View>
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
