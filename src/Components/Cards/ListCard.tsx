import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Label from '../Labels/Label';
import TitleLabel from '../Labels/TitleLabel';
import ListCardStyle from './ListCardStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListCardPropsParams} from './ListCardType';

const ListCard: FC<ListCardPropsParams> = ({
  bannerImage = '',
  posterImage = '',
  movieTitle = '',
  releaseDate = '',
  overview = '',
  voteAverage = '',
  onPress = () => {},
}) => {
  return (
    <View style={ListCardStyle.topContainer}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Image
          style={ListCardStyle.bannerImage}
          source={{
            uri: 'https://image.tmdb.org/t/p/w500/' + bannerImage,
          }}
        />
        <View style={ListCardStyle.bannerImageContainer}>
          <Image
            style={ListCardStyle.posterImage}
            source={{
              uri: 'https://image.tmdb.org/t/p/w500/' + posterImage,
            }}
          />
        </View>
        <View style={ListCardStyle.posterImageContainer}>
          <Icon name="star" size={hp(3)} color="yellow" />
          <Label text={voteAverage + '/10'} textStyle={{marginLeft: wp(1)}} />
        </View>

        <View style={ListCardStyle.labelsContainer}>
          <TitleLabel text={movieTitle} textStyle={ListCardStyle.titleLabel} />
          <Label text={releaseDate} textStyle={ListCardStyle.releaseLabel} />
          <Label text={overview} textStyle={ListCardStyle.overviewLabel} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListCard;
