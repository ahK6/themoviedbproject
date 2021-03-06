import AnimatedLottieView from 'lottie-react-native';
import React, {FC, memo} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {OverlayPropsParams} from './OverlayTypes';

const LoadingOverlay: FC<OverlayPropsParams> = ({showOverlay = false}) => {
  return (
    <Spinner
      visible={showOverlay}
      customIndicator={
        <AnimatedLottieView
          source={require('../../assets/Lottie/loadingOverlay.json')}
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
          style={{width: 200, alignSelf: 'center'}}
          autoPlay
          loop
        />
      }
    />
  );
};

export default memo(LoadingOverlay);
