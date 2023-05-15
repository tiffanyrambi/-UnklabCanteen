import { StyleSheet, Text, View, TextInput as TextInputUC } from 'react-native'
import React from 'react'

const TextInput = ({placeholder}) => {
  return (
    <View>
      <TextInputUC style={styles.input} placeholder={placeholder}/>
      <View style={styles.garis}/>
    </View>
  )
}

export default TextInput;

const styles = StyleSheet.create({
  input:{
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    //position: 'absolute',
  },
  garis:{
    borderWidth: 1,
    borderColor: 'rgba(180, 181, 229, 0.3)',
  }
});