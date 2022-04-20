import React, {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {LabelPropsParams} from './LabelsTypes';
import LabelsStyle from './LabelsStyles';

const TitleLabel: FC<LabelPropsParams> = ({text = '', textStyle}) => {
  return <Text style={[LabelsStyle.titleLabel, textStyle]}>{text}</Text>;
};

export default TitleLabel;
