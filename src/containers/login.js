import React from 'react';
import {Button, Text, View, StyleSheet, Image} from 'react-native';
const Login = ({navigation}) => {
  return (
    <View>
      <Text style={styles.heading}>Login / Sign Up</Text>
      <View style={styles.authOption}>
        <Image source={require('../assets/facebook.svg')} />
      </View>
      <Button
        title="Signup"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: 'black',
    fontSize: 40,
  },
  authOption: {
    flexDirection: 'row',
  },
});
export default Login;
