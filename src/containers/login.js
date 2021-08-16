import React from 'react';
import {Button, Text, View} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <Button
        title="Signup"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
    </View>
  );
};
export default Login;
