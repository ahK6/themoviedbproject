import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ButtonsStyles = StyleSheet.create({
  DarkButtonStyle: {
    backgroundColor: '#35324f',
    width: wp('80%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  DarkButtonTextStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: hp(2),
    fontWeight: 'bold',
  },
});

export default ButtonsStyles;
