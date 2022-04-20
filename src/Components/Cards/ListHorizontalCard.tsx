import React, {FC} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Label from '../Labels/Label';
import TitleLabel from '../Labels/TitleLabel';
import ListCardStyle from './ListCardStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListCardPropsParams} from './ListCardType';

const ListHorizontalCard: FC<ListCardPropsParams> = ({
  posterImage = '',
  voteAverage = '',
  onPress = () => {},
}) => {
  return (
    <View style={ListCardStyle.HorizontalCardTopContainer}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Image
          style={ListCardStyle.HorizontalPosterImage}
          source={{
            uri: 'https://image.tmdb.org/t/p/w500/' + posterImage,
          }}
        />
        <View style={ListCardStyle.HorizontalRateContainer}>
          <Icon name="star" size={hp(3)} color="yellow" />
          <Label text={voteAverage + '/10'} textStyle={{marginLeft: wp(1)}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListHorizontalCard;
