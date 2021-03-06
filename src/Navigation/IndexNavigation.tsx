import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import Login from '../Screens/OnBoard/LoginScreen';
import Home from '../Screens/Main/Home';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from './NavigationsPropsParamsTypes';
import MovieDetail from '../Screens/Main/MovieDetail';
import Input from '../Components/Inputs/Input';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import HomeHeader from '../Components/Headers/HomeHeader';
import SearchResult from '../Screens/Main/SearchResults';
import OnBoardNavigation from './NavigationStacks/OnBoardStack';
import UserNavigation from './NavigationStacks/UserNavigation';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const loginStatus = useSelector((store: RootState) => store?.Login);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loginStatus.token == '' || loginStatus.token == null ? (
          <Stack.Screen
            name="OnBoardStack"
            component={OnBoardNavigation}
            options={{
              headerTitleAlign: 'center',
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="UserNavigation"
            component={UserNavigation}
            options={{
              headerTitleAlign: 'center',
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
