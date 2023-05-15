import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { BackButton,DropdownButton,PickMenu } from '../../components';

const Cashier = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <BackButton/>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Cashier</Text>
        </View>
        <View style={styles.separator}></View> 
      </View>
      <DropdownButton onPress={()=>navigation.navigate('SuccessfulScreen')} />
      <PickMenu/>
      
    </View>
  );
};

export default Cashier;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAF5',
  },
  navbar: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    height: 27,
    top: 30,
    left: '50%',
    marginLeft: -36,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: '#303B3B',
    fontFamily: 'Poppins-SemiBold',
  },
  separator: {
    position: 'absolute',
    top: 64,
    left: 30,
    width: 345,
    height: 1,
    backgroundColor: '#ABABA7',
    opacity: 0.38,
  },
  
  buttonLeft: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#541690',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFDFD',
  },
  buttonRight: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#541690',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFDFD',
    marginLeft: 5,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#541690',
  },
  count: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
    marginRight: 5,
  },
  
});