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
import {SearchMovie} from '../../store/Actions/MoviesActions';
import {RootState} from '../../store/store';
import ListCard from '../../Components/Cards/ListCard';
import LoadingOverlay from '../../Components/Modals/LoadingOverlay';
import {useNavigation} from '@react-navigation/native';
import {MovieDetailScreenProp} from '../../Navigation/NavigationsPropsParamsTypes';

const SearchResult = () => {
  const navigation = useNavigation<MovieDetailScreenProp>();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const searchData = useAppSelector(state => state.SearchMovies);

  return (
    <View style={{flex: 1, backgroundColor: '#35324f'}}>
      <LoadingOverlay
        showOverlay={
          searchData.status === 'loading' || searchData.status === 'updating'
            ? true
            : false
        }
      />
      {searchData.status === 'failed' ? (
        <>
          <TitleLabel
            text={searchData.errors}
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
            text={searchData.searchData?.length + ' results'}
            textStyle={{alignSelf: 'center', marginVertical: hp(2)}}
          />
          <FlatList
            style={{paddingHorizontal: wp(2)}}
            data={searchData.searchData}
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
            onEndReachedThreshold={0.1}
            keyExtractor={item => item.id}
          />
        </>
      )}
    </View>
  );
};

export default SearchResult;

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
