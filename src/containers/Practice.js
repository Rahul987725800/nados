import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
const Practice = () => {
  return (
    <View>
      <Text>Practice</Text>
      <Input
        placeholder="BASIC INPUT"
        leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
      />
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({});
