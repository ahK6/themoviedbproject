import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeHeaderStyle = StyleSheet.create({
  homeHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(8),
    paddingHorizontal: wp(2),
  },

  homeHeaderSearchButton: {
    backgroundColor: '#35324f',
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    borderRadius: 10,
  },
});

export default HomeHeaderStyle;
