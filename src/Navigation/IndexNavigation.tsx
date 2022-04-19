import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import Login from '../Screens/OnBoard/LoginScreen';
import Home from '../Screens/Main/Home';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const loginStatus = useSelector((store: RootState) => store?.Login);

  useEffect(() => {
    console.log('wefkwkfj ' + JSON.stringify(loginStatus));
  }, [loginStatus]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loginStatus.token == '' || loginStatus.token == null ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitleAlign: 'center',
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
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
