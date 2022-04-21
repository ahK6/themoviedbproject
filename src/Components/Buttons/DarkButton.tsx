import React, {FC, memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ButtonTypes} from './ButtonsTypes';
import ButtonsStyles from './ButtonsStyles';
import AnimatedLottieView from 'lottie-react-native';

const DarkButton: FC<ButtonTypes> = ({
  OnPress = () => {},
  isLoading = false,
  ButtonText = '',
  ButtonStyle = {},
  ButtonTextStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={isLoading == false ? OnPress : () => {}}
      style={[ButtonsStyles.DarkButtonStyle, ButtonStyle]}>
      {isLoading ? (
        <AnimatedLottieView
          source={require('../../assets/Lottie/loading.json')}
          colorFilters={[
            {
              keypath: 'button',
              color: 'white',
            },
            {
              keypath: 'Sending Loader',
              color: 'white',
            },
          ]}
          style={{width: wp(7), alignSelf: 'center'}}
          autoPlay
          loop
        />
      ) : (
        <Text style={[ButtonsStyles.DarkButtonTextStyle, ButtonTextStyle]}>
          {ButtonText}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(DarkButton);
