import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import EmailInput from '../containers/EmailInput';
import Login from '../containers/login';
import Otp from '../containers/otp';
import Practice from '../containers/Practice';
import Signup from '../containers/signup';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="EmailInput" component={EmailInput} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Practice" component={Practice} />
    </Stack.Navigator>
  );
}
