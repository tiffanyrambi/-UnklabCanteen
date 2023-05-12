import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <Text>Button component</Text>
  );
};

export default Button

const styles = StyleSheet.create({
  container: color => ({
    height: 45,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  }),
  text: textColor => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: textColor,
  }),
});