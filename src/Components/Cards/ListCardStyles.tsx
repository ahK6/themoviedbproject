import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LisCardStyle = StyleSheet.create({
  topContainer: {
    marginVertical: hp(1),
    backgroundColor: 'white',
    borderRadius: 10,
    width: wp(96),
  },

  bannerImageContainer: {position: 'absolute', top: hp(8), left: wp(3)},

  bannerImage: {
    marginRight: 15,
    width: wp(96),
    height: hp(25),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  posterImageContainer: {
    position: 'absolute',
    left: wp(3),
    top: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
  },

  posterImage: {
    width: wp(20),
    height: hp(15),
    borderRadius: 10,
  },

  labelsContainer: {paddingHorizontal: wp(2), paddingVertical: hp(1)},

  titleLabel: {color: 'black', textAlign: 'center'},

  releaseLabel: {
    color: 'black',
    textAlign: 'center',
  },

  overviewLabel: {color: 'black', textAlign: 'center'},
});

export default LisCardStyle;
