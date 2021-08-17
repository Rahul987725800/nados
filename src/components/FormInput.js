import React, {useState} from 'react';
import {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, Surface} from 'react-native-paper';
const FormInput = props => {
  const {style, ...args} = props;
  const [email, setEmail] = useState('');
  const ref = useRef(null);
  return (
    <View style={styles.inputContainer}>
      <TextInput mode="outlined" {...args} />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 26,
    elevation: 6,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 5,
    borderColor: '#707070',
  },
  inputOuter: {},
});
