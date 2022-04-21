import React, {FC, memo} from 'react';
import {Text, TextInput, View} from 'react-native';

import {LabelPropsParams} from './LabelsTypes';
import LabelsStyle from './LabelsStyles';

const TitleLabel: FC<LabelPropsParams> = ({text = '', textStyle}) => {
  return <Text style={[LabelsStyle.titleLabel, textStyle]}>{text}</Text>;
};

export default memo(TitleLabel);
