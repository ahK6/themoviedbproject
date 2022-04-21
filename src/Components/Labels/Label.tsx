import React, {FC, memo} from 'react';
import {Text} from 'react-native';

import {LabelPropsParams} from './LabelsTypes';
import LabelsStyle from './LabelsStyles';

const Label: FC<LabelPropsParams> = ({text = '', textStyle}) => {
  return <Text style={[LabelsStyle.normalLabel, textStyle]}>{text}</Text>;
};

export default memo(Label);
