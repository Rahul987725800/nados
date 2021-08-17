import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
const Otp = ({navigation}) => {
  return (
    <View style={styles.Otp}>
      <Text style={styles.head}>Verify OTP</Text>
      <View style={styles.subhead}>
        <Text style={{color: '#A2A2A2'}}>Signing up with </Text>
        <Text>rajat.jain6931@gmail.com</Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={[styles.box, styles.lastBox]}></View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 21}}>
        <Text style={{color: '#A2A2A2'}}>Resend OTP in </Text>
        <Text>54 sec</Text>
      </View>
      <View style={styles.bottom}>
        <View
          style={{
            marginBottom: 28,
          }}>
          <Text>By signing up you agree with our terms and privacy policy</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Continue"
            buttonStyle={{
              backgroundColor: 'red',
              paddingVertical: 14,
            }}
            onPress={() => {
              navigation.push('EmailInput');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  Otp: {
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
    flexDirection: 'row',
  },
  boxContainer: {
    flexDirection: 'row',
  },
  box: {
    backgroundColor: '#F3F3F3',
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  lastBox: {
    marginRight: 0,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    borderRadius: 5,
  },
});
