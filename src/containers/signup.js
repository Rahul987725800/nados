import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Button, Text, Surface} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import FormInput from '../components/FormInput';
const Signup = ({navigation}) => {
  const onSubmit = data => console.log(data);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <ScrollView>
      <View style={styles.signupForm}>
        <View>
          <Text style={styles.head}>Create your account</Text>
          <Text style={styles.subhead}>Signing up with +1234567</Text>
        </View>
        <View style={styles.form}>
          <FormInput
            label="Full Name"
            value={name}
            onChangeText={e => setName(e)}
          />
          <FormInput
            label="Phone Number"
            value={phone}
            onChangeText={e => setPhone(e)}
          />
          <FormInput
            label="Password"
            value={pass}
            onChangeText={e => setPass(e)}
          />
          <FormInput
            label="Confirm Password"
            value={confirmPass}
            onChangeText={e => setConfirmPass(e)}
          />
        </View>

        <View style={styles.button}>
          <Button
            mode="contained"
            title="Continue"
            buttonStyle={{backgroundColor: 'red', paddingVertical: 14}}
            onPress={() => {
              navigation.push('Otp');
            }}>
            Continue
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
export default Signup;
const styles = StyleSheet.create({
  signupForm: {
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
  form: {},

  button: {
    borderRadius: 5,
    alignSelf: 'center',
    width: '90%',
  },
});
