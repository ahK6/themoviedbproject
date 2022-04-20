import React, {FC} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {InputPasswordPropsParams} from './InputTypes';
import InputStyle from './InputStyles';

const PasswordInput: FC<InputPasswordPropsParams> = ({
  onChange = () => {},
  validateError,
  hidePassword = false,
  setHidePassword = () => {},
  label = '',
  rootContainer = {},
  containerStyle = {},
  labelStyle = {},
  textInputStyle = {},
  errorLabelStyle = {},
}) => {
  return (
    <View style={[InputStyle.passwordContainer, rootContainer]}>
      <Text style={[InputStyle.labelText, labelStyle]}>{label}</Text>

      <View
        style={[
          InputStyle.container,
          containerStyle,
          {justifyContent: 'center'},
        ]}>
        <TextInput
          style={[InputStyle.input, textInputStyle]}
          onChangeText={onChange}
          secureTextEntry={hidePassword}
        />
        {hidePassword == true ? (
          <TouchableOpacity
            onPress={setHidePassword}
            style={{position: 'absolute', right: wp(4)}}>
            <Icon name="eye" size={hp(4)} color="#900" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={setHidePassword}
            style={{position: 'absolute', right: wp(4)}}>
            <Icon name="eye-slash" size={hp(4)} color="#900" />
          </TouchableOpacity>
        )}
        {validateError && (
          <Text style={[InputStyle.errorLabel, errorLabelStyle]}>
            {validateError}
          </Text>
        )}
      </View>
    </View>
  );
};

export default PasswordInput;
