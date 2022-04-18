import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LabelsStyle = StyleSheet.create({
  titleLabel: {
    color: 'white',
    alignSelf: 'center',
    fontSize: hp(3),
    fontWeight: 'bold',
  },
});

export default LabelsStyle;
