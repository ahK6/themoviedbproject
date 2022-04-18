import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const InputStyle = StyleSheet.create({
  container: {width: wp('80%'), alignSelf: 'center'},
  passwordContainer: {
    width: wp(80),
    alignSelf: 'center',
  },
  input: {
    width: wp('80%'),
    alignSelf: 'center',
    marginVertical: hp('1%'),
    fontSize: wp('4%'),
    borderRadius: 20,
    borderWidth: 0.5,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: wp(5),
  },
  button: {
    backgroundColor: '#ed7bc4',
    width: wp('80%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  labelText: {
    color: '#35324f',
    fontWeight: 'bold',
    fontSize: hp(2),
  },

  errorLabel: {
    color: '#ea7836',
    fontSize: hp(2),
  },
});

export default InputStyle;
