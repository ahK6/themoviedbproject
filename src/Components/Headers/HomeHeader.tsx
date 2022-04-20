import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../Inputs/Input';
import HomeHeaderStyle from './HomeHeaderStyle';

const HomeHeader = () => {
  const [searchText, setSearchText] = useState<String>('');

  const onTextSearchChange = (text: String) => {
    setSearchText(text);
  };

  return (
    <View style={HomeHeaderStyle.homeHeaderContainer}>
      <Input
        includeLabel={false}
        onChange={(value: String = '') => onTextSearchChange(value)}
      />
      <TouchableOpacity style={HomeHeaderStyle.homeHeaderSearchButton}>
        <Icon name="search" size={hp(4)} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
