import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ButtonTypes} from './ButtonsTypes';
import ButtonsStyles from './ButtonsStyles';

const DarkButton: FC<ButtonTypes> = ({
  OnPress,
  ButtonText,
  ButtonStyle,
  ButtonTextStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={OnPress}
      style={[ButtonsStyles.DarkButtonStyle, ButtonStyle]}>
      <Text style={[ButtonsStyles.DarkButtonTextStyle, ButtonTextStyle]}>
        {ButtonText}
      </Text>
    </TouchableOpacity>
  );
};

export default DarkButton;
