import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootStackParamList} from '../NavigationsPropsParamsTypes';
import {RootState} from '../../store/store';
import Home from '../../Screens/Main/Home';
import HomeHeader from '../../Components/Headers/HomeHeader';
import MovieDetail from '../../Screens/Main/MovieDetail';
import SearchResult from '../../Screens/Main/SearchResults';

const Stack = createNativeStackNavigator<RootStackParamList>();

const UserNavigation = () => {
  const loginStatus = useSelector((store: RootState) => store?.Login);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',

          header: () => <HomeHeader />,
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          headerTitleAlign: 'center',
          title: 'Movie Detail',
        }}
      />
      <Stack.Screen
        name="SearchMovie"
        component={SearchResult}
        options={{
          headerTitleAlign: 'center',
          title: 'Search results',
        }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigation;
