import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import Login from '../../Screens/OnBoard/LoginScreen';
import {RootStackParamList} from '../NavigationsPropsParamsTypes';
import {RootState} from '../../store/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

const OnBoardNavigation = () => {
  const loginStatus = useSelector((store: RootState) => store?.Login);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default OnBoardNavigation;
