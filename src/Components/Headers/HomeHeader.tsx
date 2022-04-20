import React, {useEffect, useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../Inputs/Input';
import HomeHeaderStyle from './HomeHeaderStyle';
import {Dispatch} from 'redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {SearchMovie} from '../../store/Actions/MoviesActions';
import {useNavigation} from '@react-navigation/native';
import {SearchMovieScreenProp} from '../../Navigation/NavigationsPropsParamsTypes';

const HomeHeader = () => {
  const navigation = useNavigation<SearchMovieScreenProp>();

  const dispatch: Dispatch<any> = useDispatch();

  const [searchText, setSearchText] = useState<String>('');

  const onTextSearchChange = (text: String) => {
    setSearchText(text);
  };

  const onPressButton = () => {
    if (searchText === '') {
      return Alert.alert('Please enter a text in search field');
    }
    dispatch(SearchMovie(searchText));
    navigation.navigate('SearchMovie');
  };

  return (
    <View style={HomeHeaderStyle.homeHeaderContainer}>
      <Input
        includeLabel={false}
        onChange={(value: String = '') => onTextSearchChange(value)}
      />
      <TouchableOpacity
        onPress={() => {
          onPressButton();
        }}
        style={HomeHeaderStyle.homeHeaderSearchButton}>
        <Icon name="search" size={hp(4)} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
