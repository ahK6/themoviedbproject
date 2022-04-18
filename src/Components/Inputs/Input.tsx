import React, {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {InputPropsParams} from './InputTypes';
import InputStyle from './InputStyles';

const Input: FC<InputPropsParams> = ({
  onChange,
  validateError,
  label,
  containerStyle,
  labelStyle,
  textInputStyle,
  errorLabelStyle,
  includeLabel,
}) => {
  return (
    <View style={[InputStyle.container, containerStyle]}>
      {includeLabel ? (
        <Text style={[InputStyle.labelText, labelStyle]}>{label}</Text>
      ) : null}
      <TextInput
        style={[InputStyle.input, textInputStyle]}
        onChangeText={onChange}
      />
      {validateError && (
        <Text style={[InputStyle.errorLabel, errorLabelStyle]}>
          {validateError}
        </Text>
      )}
    </View>
  );
};

export default Input;
