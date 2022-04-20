import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LabelsStyle = StyleSheet.create({
  titleLabel: {
    color: 'white',
    fontSize: hp(3),
  },

  normalLabel: {
    color: 'white',
    fontSize: hp(2),
  },
});

export default LabelsStyle;
