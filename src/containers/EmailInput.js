import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormInput from '../components/FormInput';
import {Button} from 'react-native-elements';

const EmailInput = () => {
  return (
    <View style={styles.EmailInput}>
      <Text style={styles.head}>Your e-mail address</Text>
      <Text style={styles.subhead}>We'll send an OTP for verification</Text>
      <FormInput />
      <View style={styles.button}>
        <Button
          title="Continue"
          buttonStyle={{backgroundColor: 'red', paddingVertical: 14}}
          onPress={() => {
            navigation.push('Otp');
          }}
        />
      </View>
    </View>
  );
};

export default EmailInput;

const styles = StyleSheet.create({
  EmailInput: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 67,
    paddingTop: 20,
  },
  head: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 6,
  },
  subhead: {
    marginBottom: 24,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',

    borderRadius: 5,
  },
});
